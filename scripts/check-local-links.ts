import { existsSync, readdirSync, readFileSync, realpathSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();
const ignoredDirectories = new Set([".git", "node_modules"]);

function markdownFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return ignoredDirectories.has(entry.name) ? [] : markdownFiles(path);
    return entry.isFile() && entry.name.endsWith(".md") ? [path] : [];
  }).sort();
}

function parseDocument(markdown: string) {
  const tokens = parser.parse(markdown, {});
  const anchors = new Set<string>();
  const links: string[] = [];
  const counts = new Map<string, number>();
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === "heading_open") {
      const content = tokens[i + 1];
      const label = (content.children ?? [])
        .filter((child) => ["text", "code_inline"].includes(child.type))
        .map((child) => child.content).join("");
      const base = label.toLowerCase().replace(/[^\p{L}\p{N}\p{M}\-_ ]/gu, "").replace(/ /g, "-");
      let slug = base;
      let suffix = counts.get(base) ?? 0;
      while (anchors.has(slug)) slug = base + "-" + ++suffix;
      counts.set(base, suffix);
      anchors.add(slug);
    }
    for (const child of token.children ?? []) {
      const target = child.type === "link_open" ? child.attrGet("href")
        : child.type === "image" ? child.attrGet("src") : null;
      if (target !== null) links.push(String(target));
    }
  }
  return { anchors, links };
}

export function checkDocuments(directory: string) {
  const root = realpathSync(directory);
  const files = markdownFiles(root);
  const errors: string[] = [];
  let localLinks = 0;
  const documents = new Map(files.map((file) => [file, parseDocument(readFileSync(file, "utf8"))]));
  for (const [source, document] of documents) {
    for (const url of document.links) {
      if (/^(https?:|mailto:)/i.test(url)) continue;
      localLinks++;
      const context = relative(root, source) + ": " + url;
      if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
        errors.push(context + " (unsupported link scheme)");
        continue;
      }
      let path: string;
      let fragment: string;
      try {
        const hash = url.indexOf("#");
        path = decodeURIComponent(hash < 0 ? url : url.slice(0, hash));
        fragment = hash < 0 ? "" : decodeURIComponent(url.slice(hash + 1));
      } catch {
        errors.push(context + " (invalid URL encoding)");
        continue;
      }
      let target = path === "" ? source
        : resolve(path.startsWith("/") ? root : dirname(source), path.startsWith("/") ? "." + path : path);
      const withinRoot = (candidate: string) => candidate === root || candidate.startsWith(root + sep);
      if (!withinRoot(target) || (existsSync(target) && !withinRoot(realpathSync(target)))) {
        errors.push(context + " (outside repository)");
        continue;
      }
      if (!existsSync(target)) {
        errors.push(context + " (missing target)");
        continue;
      }
      if (statSync(target).isDirectory()) target = resolve(target, "README.md");
      if (existsSync(target) && !withinRoot(realpathSync(target))) {
        errors.push(context + " (outside repository)");
        continue;
      }
      if (fragment && target.endsWith(".md")) {
        if (!existsSync(target)) {
          errors.push(context + " (missing README for anchor)");
          continue;
        }
        const targetDocument = documents.get(target) ?? parseDocument(readFileSync(target, "utf8"));
        if (!targetDocument.anchors.has(fragment)) errors.push(context + " (missing heading anchor)");
      } else if (fragment) {
        errors.push(context + " (anchors require a Markdown target)");
      }
    }
  }
  return { documents: files.length, localLinks, errors };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const report = checkDocuments(process.cwd());
  for (const error of report.errors) console.error(error);
  console.log("Checked " + report.localLinks + " local links in " + report.documents + " Markdown documents.");
  process.exitCode = report.errors.length ? 1 : 0;
}
