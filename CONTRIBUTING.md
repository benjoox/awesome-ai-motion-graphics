# Contributing

Help readers find resources they can inspect, adapt, and render. Explain what is reusable, credit its source, and choose an existing category.

## Resource selection

Prefer primary repositories, documented skills, reproducible source projects, and examples with published prompts. Label finished videos without source as visual references. Group games separately from video production.

Use one entry per resource: name, direct HTTPS link, creator credit where useful, and one factual sentence explaining its use. Avoid hype, affiliate links, engagement counts, and model rankings. Check for duplicates.

Open each new external link and confirm it supports the description. Accessibility does not establish permission to reuse its contents. Record uncertainty when it affects how a reader can use the work.

## Original prompts and guides

Templates are original writing inspired by credited examples. Link to published creator prompts rather than copying them. Do not upload third-party videos, music, screenshots, characters, or code.

Include inputs, audience or takeaway, timed planning, constraints, rendered review, and deliverables. Preserve supplied facts and copy. Use placeholders for required user content.

Index every new document. Use relative repository links and descriptive titles. Attribute process claims and distinguish prompt analysis from audiovisual review.

## Local checks

Use Node.js 22 or later and pnpm 10.7.0.

~~~sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm check
pnpm audit
~~~

Checks cover Markdown, tooling types, local links and heading anchors, checker tests, and whitespace. CI also checks dependencies for high-severity vulnerabilities. External links require manual review because hosts such as X may block automated requests. Aesthetic quality and video playback are not automated.

## Pull requests

Create a focused branch and use Conventional Commits. Describe the reader-facing change, credit sources, list validation, and disclose limitations. Use the PR template.

The main branch requires a PR, passing documentation checks, and linear history. It has no mandatory second approval while maintained by one owner, so the owner can merge their reviewed PR. CODEOWNERS routes contributions to the maintainer. The versioned [main ruleset](.github/rulesets/main.json) records the remote rules; changes to this file must be applied to GitHub settings by a maintainer.

## Rights and conduct

By submitting original writing or code, you agree to contribute it under the [MIT License](LICENSE). Contribute only material you have permission to contribute. Third-party projects retain their licenses. A listing grants no rights to a creator's media.

Follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). See [SECURITY.md](SECURITY.md) for sensitive reports.
