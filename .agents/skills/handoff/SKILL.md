---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save directly to `HANDOFF.md` in the current workspace directory.

Include a "suggested skills" section in the document, which suggests skills that the agent should invoke.
