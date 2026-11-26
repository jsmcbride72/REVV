---
title: Let the agent look up the button, not invent one
date: 2026-11-26
slug: let-the-agent-look-up-the-button
excerpt: New York State's design system now answers an assistant the way a reference site answers a person. The agent looks up the component. It does not have to invent one.
tags: Design systems, Agents, Design tokens
cover: /blog/cover-lookup.jpg
sources:
- Assembling, Not Guessing, New York State Design System | https://designsystem.ny.gov/about/updates/nysds-mcp-server/
- @nysds/mcp-server on npm | https://www.npmjs.com/package/@nysds/mcp-server
---

On November 11, 2026, the team behind the New York State Design System published a simple diagnosis. Ask an assistant for a benefits form and you will get one in seconds. You will also, they write, probably get React styled with Tailwind, a few invented class names, and accessibility nobody has tested. Without context, the assistant guesses.

That is why they released an MCP server for the system itself. It is not another model. It does not generate anything. It is the reference site, written for machines. An assistant can ask which components exist for a form, which attributes `nys-button` accepts, or how a token is meant to be used, and a structured answer comes back from the design system. The package is `@nysds/mcp-server`. It starts on demand with `npx`, needs Node.js 18 or later, and works with assistants including Claude Code, Cursor, Gemini CLI, GitHub Copilot, and Claude Desktop.

![A guessed interface beside one assembled from known parts](/blog/lookup-guess.jpg "Without the system in reach, the assistant drifts toward a generic answer.")

Jesse Gardner, who wrote the announcement, is blunt about why guessing fails in this setting. New York already has dozens of versions of the same button. AI does not fix that problem. It speeds it up. A made-up last name in a talk summary is funny, he notes. A made-up form control on a state service is not.

The server breaks a large system into small lookups. The team's machine-readable manifest runs about 150,000 tokens, more than some models can hold at once. So the assistant does not swallow the catalog. It calls `find_components`, then `get_component` for only the parts it needs, then `validate_component_api` to check that every attribute in the draft actually exists. There are matching tools for tokens, including `get_token` and `get_token_graph`, which shows how values reference each other from primitives up to the tokens a product actually applies. In their measurements, looking up and validating a single component comes to about 10,000 tokens instead of 150,000. A six-component form lands around 35,000, still about three-quarters less.

![A single component card being retrieved from a larger library](/blog/lookup-part.jpg "The assistant should ask for the part it needs, not swallow the whole library.")

The content is not a parallel set of docs maintained for the model. Component guidance lives in the source as JSDoc. A build turns those comments into `custom-elements.json`, and that file feeds both the MCP server and the public usage site. Tokens work the same way. The success color, `--nys-color-success`, carries a description with two plain rules: use it for confirmations and positive feedback, and pair it with a success icon. The server ships with the same version number as the components, so the assistant is not reading last quarter's button.

This is the part that matters for a design system team.

> If the agent cannot look the component up, it will invent one, and it will invent it quickly.

The New York team is also clear about the other half of the path. When designers hand off screens from the NYSDS Figma library, Figma's MCP server can return Code Connect snippets for the same `nys-*` components, configured as the designer set them. Engineers who start from requirements, with no mockup, use the NYSDS server. Both routes assemble from the same parts. Designers are not written out of the work. As Gardner puts it, their work moves into the layer the assistant builds on.

![A quiet grid of already-tested interface parts](/blog/lookup-parts.jpg "The work is encoding what is already right so the agent can follow it.")

None of this replaces a system that is incomplete, and the team says so. The server is a work in progress. The quality of the output depends on the documentation, which they improve with each release. They test the components with people who use screen readers every day. When an accessibility bug is fixed in `nys-button`, every product that updates the library gets the fix. Code generated from scratch is frozen the day it ships.

The closing line of their post is the brief. AI does not know what is right, only what is likely. The job is to encode what is right into something it can follow.

If a coding assistant is about to build a form for you this month, give it a way to look the parts up. Then check the result against the system, not against whatever looked plausible. The server is a reference. The judgment still has to be yours.
