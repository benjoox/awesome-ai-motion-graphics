# Security

This repository contains documentation, prompts, and development checks. Linked projects are independently maintained; report problems in them to their maintainers.

## Sensitive reports

Use [private vulnerability reporting](https://github.com/benjoox/awesome-ai-motion-graphics/security/advisories/new) for exposed credentials or vulnerabilities here. Include affected files, impact, and reproducible steps. Do not publish live credentials or exploit details in an issue.

If private reporting is unavailable, use [GitHub Support](https://support.github.com/) for an exposed secret, and the repository owner's published contact method for other sensitive reports.

## Development practices

Use placeholder credentials in prompts. Keep real keys in ignored environment files and send them only to the intended provider. Review linked skills before running them. Use the dependency lockfile and pinned workflow actions.

CI runs with read-only repository permissions and requires no secrets. Dependency updates arrive as reviewable PRs. Inclusion in this list is not a security audit or endorsement.

## Tooling dependencies

CI audits dependencies for high-severity vulnerabilities. The pinned KaTeX override applies the patch for [GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7) until the upstream math extension selects a patched version. Review the override when updating the extension.
