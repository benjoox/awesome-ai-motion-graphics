# Awesome AI Motion Graphics

A curated list of open-source tools, agent skills, prompts, and source projects for making motion graphics and video with code and AI coding agents.

The initial resources from [Muhammad Ayan's X post](https://x.com/socialwithaayan/status/2105271130215064056) are organized below by what they offer, alongside a few foundational frameworks and skills. The emphasis is on resources you can inspect, adapt, and render yourself. Interactive games are grouped separately from video production tools.

## Contents

- [Frameworks and renderers](#frameworks-and-renderers)
- [Agent skills](#agent-skills)
- [Prompt and reference collections](#prompt-and-reference-collections)
- [Prompt library](#prompt-library)
- [Production workflows](#production-workflows)
- [Reference libraries](#reference-libraries)
- [Motion production examples](#motion-production-examples)
- [Video creation tools and starters](#video-creation-tools-and-starters)
- [Source projects and examples](#source-projects-and-examples)
- [Contributing](#contributing)
- [License](#license)

## Frameworks and renderers

- [Remotion](https://github.com/remotion-dev/remotion) — Create and render videos with React and TypeScript.
- [HyperFrames](https://github.com/heygen-com/hyperframes) — Render deterministic video from HTML, CSS, media, and seekable animations; designed for agent workflows.
- [Motion Canvas](https://github.com/motion-canvas/motion-canvas) — TypeScript framework for programmatic 2D animation and video.
- [Manim Community](https://github.com/ManimCommunity/manim) — Python framework for mathematical and explanatory animation.

## Agent skills

- [Remotion Agent Skills](https://github.com/remotion-dev/skills) — Official agent guidance for building with Remotion.
- [HyperFrames skill and frame guide](https://github.com/heygen-com/hyperframes) — Agent-facing guidance included with HyperFrames for composing video from web technologies.
- [Motion Graphics Music Video Skill](https://github.com/makevoid/motion-graphics-music-video-skill) — Claude Code plugin for making motion graphics videos from a song and a prompt.
- [Opus Video Skills](https://github.com/tuzhechen2005/opus-video-skills) — Style-specific Claude Code skills for code-generated video.
- [Bang Motion](https://github.com/bangtutorial/bang-motion) — Skill and starters for browser-based promos, openers, kinetic type, and explainers.
- [Claude Animation](https://github.com/buildwithhanif/claude-animation-skill) — Node Canvas skill with drawn rigs, textures, synthesized sound, and frame verification.
- [AI Motion Graphics](https://github.com/docusphere/claude-skill-motion-graphics) — Beat-sheet workflow covering generated assets, audio, and Remotion assembly.
- [Persian Motion Director](https://github.com/atmirrr/persian-motion-director) — Claude skill for Persian (Farsi) motion graphics, with right-to-left typography guidance, HarfBuzz glyph-shaping tools, copy linting, and browser and Remotion examples.

## Prompt and reference collections

- [ClaudeVideo](https://claudevideo.org/) — Searchable index of Claude Opus 5.5 videos with links to original creators and available prompts; its [guides](https://claudevideo.org/guides) and [skills directory](https://claudevideo.org/skills) help trace techniques back to useful source projects.
- [Awesome Opus 5.5 Videos](https://github.com/yihui-dev/awesome-opus5-5-videos) — A growing index of creator videos with their prompts, including motion graphics and explainers. Browse the original work and prompts before adapting a technique.
- [Awesome Claude 5.5 Videos: source-linked guide](https://github.com/athemeroy/awesome-claude-5-5-videos) — A separate source-linked video catalog describing their visual styles and how their frames were made.
- [Awesome AI Motion](https://github.com/guanmo-ai/awesome-ai-motion) — Motion design, creative video, and interactive art linked to source, prompts, and production notes.
- [Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) — 43 film styles, each with a reusable style prompt and a code-made short film.

## Prompt library

Start with the [style prompt library](prompts/README.md) for original, fill-in briefs covering showreels, kinetic typography, UI motion, product launches, explainers, data stories, collage, hand-drawn animation, music videos, and 3D scenes. Each prompt links to a creator example for visual reference.

## Production workflows

- [Movez's motion design studio course](https://x.com/0xMovez/status/2104216919033192746) — References, direction, rendering, springs, sound, critique, and reusable instructions.
- [Production workflow guide](workflows/README.md) — Connect reference analysis, a director's brief, rendered review, and multi-format delivery.

## Reference libraries

- [What Ships](https://whatships.com/) — Product-launch videos for studying pacing, typography, and visual direction.

## Motion production examples

Start with [six production examples](showcase/README.md): twoclipping's UI morph, MakerMap, the Steve Jobs biography, Small print, Pip, and a watercolor short. Each credits its creator and explains a distinct production lesson.

The [course reference inventory](showcase/movez-course-references.md) links to every embedded post and the four additional videos mentioned in Movez's article.

## Video creation tools and starters

- [ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) — Starter kit for hand-painted cartoon animation with p5.js, p5.brush, character assets, and an animation guide.
- [Shipvideo](https://github.com/diggerhq/shipvideo) — Create a launch video from a URL or prompt using agent-written HTML and a render workflow.

## Source projects and examples

### Motion graphics and film

- [PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) — Source, storyboard, animation guide, and render script for a code-rendered music video built with Claude Opus 5.5.
- [Battle of Austerlitz Film](https://github.com/WinterArc21/Battle-of-Austerlitz-Film) — Five-minute WebGL history film with terrain data, procedural animation, offline narration, and synthesized sound.

### Interactive animation and games

These projects appeared alongside the motion graphics resources in the source post. They are useful references for generated visual systems, though they are interactive projects rather than video frameworks.

- [Tidewater](https://github.com/dgreenheck/tidewater) — A coastal town and fishing game with WebGPU visuals.
- [Claude Opus 5.5 Demo](https://github.com/riba2534/claude-opus-5-5-demo) — Three browser games built from one-shot prompts.

## Contributing

Read the [contribution guide](CONTRIBUTING.md) for selection criteria, attribution, checks, and PR requirements. Follow the [code of conduct](CODE_OF_CONDUCT.md); use the [security policy](SECURITY.md) for sensitive reports.

Suggestions are welcome. Please link to the original project, choose the most relevant section, and describe what someone can learn or build with it in one sentence. Prefer source code, reproducible examples, and documented skills over promotional demos. Keep descriptions factual and avoid time-sensitive star counts.

## License

Original repository content is available under the [MIT License](LICENSE). Linked projects, prompts, and media retain their own licenses and rights; this repository does not grant permission to reuse them.
