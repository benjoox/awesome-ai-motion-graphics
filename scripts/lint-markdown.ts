import { relative } from "node:path";
import { lint, readConfig } from "markdownlint/promise";
import { markdownFiles } from "./check-local-links.ts";

const files = markdownFiles(process.cwd());
const config = await readConfig(".markdownlint.json");
const results = await lint({ files, config });
const errors = Object.entries(results).flatMap(([file, issues]) => issues.map((issue) =>
  `${relative(process.cwd(), file)}:${issue.lineNumber} ${issue.ruleNames[0]} ${issue.ruleDescription}${issue.errorDetail ? ": " + issue.errorDetail : ""}`
));
for (const error of errors) console.error(error);
console.log("Linted " + files.length + " Markdown documents.");
process.exitCode = errors.length ? 1 : 0;
