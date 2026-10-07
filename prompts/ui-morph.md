# UI morph

**Original creator specification:** [twoclipping](https://x.com/twoclipping/status/2103273003555402193).

**Reference:** [One shape morphs through UI states](https://claudevideo.org/videos/one-shape-morphs-through-a-dozen-ui-states-on-beat) — creator example with a published prompt.

```text
Create a [12]-second UI motion study in which one persistent element becomes these states: [list 5–8 states]. The element should feel like the same object throughout. Show the cause of each change with a cursor, touch point, or clear user action.

Stage: [size]. Visual system: [background, component colors, type, icon style]. Build a state table with start/end times, size, position, content, and interaction for each state. Show me that table before implementation.

Use closed-form springs for changes in shape and position. For repeated targets, preserve continuity with a sum of timed responses rather than restarting a stateful simulation. Use different springs for leading and trailing edges when an indicator stretches. During a drag, map the value to the cursor; on release, settle from that position. Let new content enter after the container begins morphing and old content leave before the next state. Keep strokes and corner treatment consistent. For loops, match near-end and start positions, velocities, content, and cursor state. Do not depend on accumulated browser state.

Render a frame at each state and each midpoint, then a full preview. Fix clipped text, impossible cursor actions, and uneven holds before export.
```
