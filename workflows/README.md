# Production workflows

A code-rendered film needs a clear brief, assets, a deterministic renderer, coordinated sound, and review of the output. Use these workflows alongside the [original prompt library](../prompts/README.md).

## From reference to delivery

1. Define audience, message, duration, formats, assets, and sound.
2. Use [reference analysis](../prompts/reference-analysis.md) to describe visual grammar. Borrow principles rather than content.
3. Write a [director's brief](../prompts/director-brief.md) with timed shots, exact copy, continuity, and deliverables.
4. Derive frames from time and explicit inputs. Seed procedural texture; avoid wall-clock timers and prior-frame state.
5. Establish the audio timeline. Measure supplied music or document a synthesized score's timing. Beat detection alone does not establish the first bar's downbeat.
6. Render stills and an animatic. Use [render review](../prompts/render-review.md) on frames, transitions, playback, and sound.
7. [Recompose formats](../prompts/multi-format-delivery.md) from one timed sequence.
8. Deliver source, asset provenance, render instructions, video, and limitations.

Consecutive frames and playback are necessary for motion review. A contact sheet can reveal layout problems but cannot prove smooth motion or sound alignment. Self-review is feedback, not independent approval.

## Further reading

- [Movez's motion design studio course](https://x.com/0xMovez/status/2104216919033192746) — References, direction, rendering, springs, sound, critique, and reusable instructions.
- [twoclipping's UI specification](https://x.com/twoclipping/status/2103273003555402193) — Timed states, interactions, springs, rendering, and a continuous loop.
- [Pradeep Kapoor's production template](https://x.com/pradeepXkapoor/status/2103177003885273599) — Character-film direction and staged production.
- [Six production examples](../showcase/README.md) — Specifications, product data, narrative, sound, and iteration.

## Renderer choice and verification

Use an existing renderer when it fits the brief. Canvas or SVG can suit focused studies; Remotion and HyperFrames offer structured authoring and rendering. Neither guarantees art direction or reusable components.

A seek function does not prove determinism. Verify the same frame requested in a different order. For loops, compare near-end and start positions, velocities, content, and audio; wrapping time does not establish continuity.

## Packaging a reusable workflow

Separate stable production instructions from changing inputs. Record supported formats, assets, render commands, and review steps. Try a fresh subject before calling it reusable. Keep credentials outside instructions and authorize a budget before using paid providers.
