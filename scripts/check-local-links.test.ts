import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { checkDocuments } from "./check-local-links.ts";

function fixture(files: Record<string, string>, check: (root: string) => void) {
  const root = mkdtempSync(join(tmpdir(), "motion-docs-"));
  try {
    for (const [name, content] of Object.entries(files)) {
      const path = join(root, name);
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content);
    }
    check(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("resolves encoded paths, reference links, and headings across documents", () => {
  fixture({
    "README.md": "# Index\n\n[guide][g]\n\n[g]: guide%20notes.md#read-this\n",
    "guide notes.md": "# Guide\n\n## Read *this*\n",
  }, (root) => assert.deepEqual(checkDocuments(root).errors, []));
});

test("reports broken files and heading fragments independently", () => {
  fixture({
    "README.md": "# Index\n\n[missing](no.md)\n\n[wrong](guide.md#absent)\n",
    "guide.md": "# Guide\n",
  }, (root) => {
    const report = checkDocuments(root);
    assert.equal(report.errors.length, 2);
    assert.match(report.errors[0], /missing target/);
    assert.match(report.errors[1], /missing heading anchor/);
  });
});

test("handles duplicate headings and explicit numbered heading collisions", () => {
  fixture({
    "README.md": "# Index\n\n[one](guide.md#repeat-1)\n\n[two](guide.md#repeat-1-1)\n",
    "guide.md": "# Guide\n\n## Repeat\n\n## Repeat\n\n## Repeat-1\n",
  }, (root) => assert.deepEqual(checkDocuments(root).errors, []));
});

test("ignores examples in code fences and does not request external links", () => {
  fixture({
    "README.md": "# Index\n\n~~~text\n[example](missing.md)\n~~~\n\n[remote](https://example.com/)\n",
  }, (root) => {
    const report = checkDocuments(root);
    assert.equal(report.localLinks, 0);
    assert.deepEqual(report.errors, []);
  });
});

test("rejects traversal and malformed encoding", () => {
  fixture({
    "README.md": "# Index\n\n[outside](../private.md)\n\n[bad](%FF.md)\n",
  }, (root) => {
    const report = checkDocuments(root);
    assert.equal(report.errors.length, 2);
    assert.match(report.errors[0], /outside repository/);
    assert.match(report.errors[1], /invalid URL encoding/);
  });
});

test("rejects a symlink to a file outside the repository", () => {
  fixture({ "README.md": "# Index\n\n[outside](outside.md)\n" }, (root) => {
    const outside = mkdtempSync(join(tmpdir(), "motion-outside-"));
    try {
      writeFileSync(join(outside, "secret.md"), "# Private\n");
      symlinkSync(join(outside, "secret.md"), join(root, "outside.md"));
      assert.match(checkDocuments(root).errors[0], /outside repository/);
    } finally {
      rmSync(outside, { recursive: true, force: true });
    }
  });
});

test("directory links resolve their README when an anchor is specified", () => {
  fixture({
    "README.md": "# Index\n\n[guide](guide/#details)\n",
    "guide/README.md": "# Guide\n\n## Details\n",
  }, (root) => assert.deepEqual(checkDocuments(root).errors, []));
});

test("rejects a directory README symlink escaping the repository", () => {
  fixture({ "README.md": "# Index\n\n[outside](guide/#secret)\n" }, (root) => {
    const outside = mkdtempSync(join(tmpdir(), "motion-outside-"));
    try {
      writeFileSync(join(outside, "secret.md"), "# Secret\n");
      mkdirSync(join(root, "guide"));
      symlinkSync(join(outside, "secret.md"), join(root, "guide/README.md"));
      assert.match(checkDocuments(root).errors[0], /outside repository/);
    } finally {
      rmSync(outside, { recursive: true, force: true });
    }
  });
});
