# Recorded footage to a short-form edit

Turn a recorded performance into a captioned short with a coding agent, a text cut list, and a local media renderer. Use this when the source is camera footage and the work is selecting takes, preserving delivery, reframing, and adding graphics.

**Reference:** Brooke Lacey's [How I AI episode with Claire Vo](https://podcasts.apple.com/ec/podcast/claude-cuts-my-tiktok-how-this-creator-is-scaling-video/id1809663079?i=1000797061835), “Claude cuts my TikTok.” Lacey describes using Claude Code, FFmpeg, Whisper, and Python. This guide and the accompanying [prompt](../prompts/short-form-edit.md) are original templates inspired by that discussion, not her published implementation. The episode transcript informs this guide; the demonstrated output has not been independently reviewed or reproduced here.

## Inputs and editing direction

Supply source footage, audience, intended takeaway, target duration, aspect ratios, frame rate, exact product facts, permitted graphics, and an output directory. Keep originals intact. Specify whether media, transcripts, or sampled frames may be sent to a cloud service; running a renderer locally does not establish that the whole agent session stays local.

If you have previous videos you own, annotate a few examples with timestamps: where a hook lands, how long a reaction holds, and which pauses make a joke work. Turn those observations into a short editing guide. Record creator corrections as explicit rules and test them on another take. Analysis of examples is context and instruction, not evidence of model training.

## Build the edit

1. **Inspect the source.** Record dimensions, orientation, duration, frame rate, and audio properties. Inspect whether variable frame rate or an audio offset needs handling before assigning cut times.
2. **Locate speech.** Combine speech or silence detection with a word-timed transcript. Listen around proposed boundaries: timestamps are estimates, and clipped consonants, breaths, and room-tone changes need correction.
3. **Choose the performance.** Mark repeated takes and spoken editing directions such as “cut that out.” Treat them as candidates for review, since the phrase may be part of the intended content. Choose takes for meaning, intelligibility, cadence, and facial delivery. Preserve useful pauses and reactions.
4. **Write the cut list.** Store each selection's source path, in/out points, shot size, and purpose in a TSV or equivalent structured file. State units, frame rate, and whether out points are exclusive. Keep source times separate from output times and retain reasons for discarded takes.
5. **Reframe and place graphics.** Track the speaker if needed and smooth crop movement. Assign wide, medium, or close framing deliberately. Inspect hands, face, and empty space in the rendered crop before positioning supplied screenshots or cards. Recompose each target format.
6. **Time captions to the edited speech.** Map word timings through the cut list onto the output timeline. Correct the words manually where needed, define when each caption disappears, and avoid carrying text across unrelated cuts or long pauses. Check contrast, phone readability, and platform safe areas.
7. **Render from explicit inputs.** Save the cut list, crop and overlay settings, caption data, tool versions, and render command. Use a short preview to resolve timing and placement before rendering all variants.

An illustrative TSV header is `source`, `in_seconds`, `out_seconds`, `shot`, and `label`, separated by tabs. A real renderer must define how those fields map to frames and validate bounds and positive durations. This is a proposed schema, not a recovered file from Lacey's setup.

## Review and deliver

Watch and listen to the finished cut, especially word endings, reactions, reframing changes, graphics entrances, and caption boundaries. Check sync near the beginning, middle, and end; matching stream durations alone cannot establish lip sync. Confirm the edit preserves the speaker's meaning and does not combine takes into an unsupported claim.

Use the [render review prompt](../prompts/render-review.md) to record concrete defects and review corrected intervals. Verify output dimensions, duration, frame count, audio presence, and full decoding. Report what was actually inspected and any remaining uncertainty about sound or playback.

Deliver the video variants, cut list, corrected captions, editing guide, settings, asset provenance, and repeatable render instructions. Describe any dependencies that need installing. Documentation here does not supply an executable editor or establish production speed.

## Optional audience feedback loop

Use supplied or authorized exports of audience comments alongside the creator's videos to identify recurring questions and propose new scripts. Separate audience requests from verified product facts. Keep this research as an input to the next brief; comments and engagement do not establish why a particular edit performed well.
