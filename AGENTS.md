# Repository instructions

This public repository contains a resource list and original prompts for AI-assisted, code-rendered motion graphics. Read README.md and CONTRIBUTING.md before editing.

## Editorial rules

- Write for readers outside the project. Use plain English and explain what a resource helps someone build or learn.
- Keep private project names, machine paths, credentials, transcripts, internal research, and authoring notes out of public files.
- Link to original creators. Prefer inspectable source, documented workflows, and published prompts.
- Write original summaries and templates. Do not copy another creator's prompts, code, media, or articles without permission and a compatible license.
- Distinguish tools, source projects, visual references, and interactive games. A finished video does not prove a reusable implementation.
- Attribute production times, costs, model use, and iteration counts to the creator. Avoid rankings, hype, star counts, and unsupported claims.
- Captions and prompts support process descriptions, not claims of a playback review.
- Update existing entries instead of duplicating them. Index every new document.
- Prompts must define inputs, an intended takeaway, timed planning, constraints, rendered review, and deliverables. Never invent product claims.
- Preserve reading time. Fast cuts, springs, and actions on every beat are choices, not universal rules.
- Use relative repository links and direct HTTPS source links.

## Workflow

Use focused branches and Conventional Commits, such as docs(prompts): add reference analysis or chore(repo): add documentation checks. Never bypass checks.

Run pnpm install --frozen-lockfile --ignore-scripts, pnpm check, and pnpm audit before committing. Open new external links manually and report validation in the PR. CI checks Markdown, tooling types, local files and anchors, checker tests, and whitespace; it does not judge audiovisual quality or external websites.

Pin dependencies and actions. Keep CI permissions at contents: read. Never execute contributor code through pull_request_target. Do not commit generated videos, downloaded media, or secrets. Ask before changing the license, repository scope, publishing releases, or merging a PR.
