---
title: Put the working prototype on the canvas, not in a private tab
date: 2026-11-26
slug: put-the-working-prototype-on-the-canvas
excerpt: Figma's code layers and Specs put a clickable prototype and the decisions behind it on the same canvas. The scarce thing is no longer a first build. It is agreeing on what that build is for.
tags: Prototyping, Product design, AI workflows
cover: /blog/cover-prototype.jpg
sources:
- Build by design, Figma Blog | https://www.figma.com/blog/build-by-design/
- Introducing Specs, Figma Blog | https://www.figma.com/blog/introducing-figma-specs/
- Workflow lab: Test ideas with code layers and the Figma agent, Figma Blog | https://www.figma.com/blog/workflow-lab-build-with-code-on-the-canvas-using-the-figma-agent-and-code-layers/
---

On October 15, 2026, Figma put a name to a problem a lot of product teams already feel. Coding agents made it cheap to spin up a working prototype. The work then often leaves the room. A teammate gets a link, or a video of someone else clicking through a flow. They can see the end result. They cannot sit with the thinking. One of Figma's customers put the pace in five words. "It's fast, fast, fast... then slow."

That day, Figma moved code layers into open beta on every plan. A code layer is a prototype backed by running code, sitting on the same canvas as the frames and comments the team already shares. You can start from a design, clone a GitHub repository, upload a local folder, capture a live page with Figma's Chrome extension, or ask an agent, inside Figma or through the Figma MCP server, to bring a project onto the canvas.

![Working prototypes sitting side by side on a shared canvas](/blog/prototype-side-by-side.jpg "A direction is easier to judge when the team can click it in the same place.")

The useful move is not that code can appear in Figma. It is that several working versions can sit next to each other. In Figma's own walkthrough, a designer prompts the Figma agent for three directions, clicks through each one, and leaves a comment without leaving the file. They can duplicate a layer, open the code editor, change a heading by hand, and apply that change back to the code. When the visual work needs familiar tools, Extract designs turns the current screen, a single element, or a recorded flow into editable design layers. Those edits can be pushed back into the running prototype. Two explorations can be combined, a technical spec can describe what changed, and the update can go to a branch or a pull request.

Written context gets a home on the same canvas. Specs, also announced on October 15 and rolling out in open beta on web, desktop, and mobile, is a shared Markdown document that can embed a frame, a FigJam diagram, or a code layer, instead of pointing at a screenshot or a stale link. Press D, or drag an existing Markdown file onto the canvas. When the team agrees on a direction, you copy the link to the spec and add it to a coding agent's prompt. Through the Figma MCP server, that prompt can carry the Markdown, the linked frames and diagrams, the code layers, and any Code Connect snippets that map a design component to production code.

![A written spec sitting beside a coded screen](/blog/prototype-spec.jpg "The decision and the thing it describes should live next to each other.")

Mark Harvey, a staff product designer at Intuit, keeps a spec next to a new set of icons so the file name, category, tags, and description live with the drawings. The Figma agent, now generally available, can read and reply to comments in a spec the way a teammate would. The plan and the critique stay attached to the work.

The same release widens what a design system can give an agent. Guidelines can be added to published libraries, now in open beta on paid plans. Code sources, from a GitHub repository or an npm package, are starting in closed beta, also on paid plans, so the agent can build and edit with the components the codebase already uses. Figma is also previewing a place to gather those libraries, with a system map for dependencies and a system check for gaps such as missing descriptions and interactive states.

None of this makes a weak direction strong, and a running prototype is not a shipped product. Code layers are still in beta. Figma says more complex codebases are work still to come. Someone still has to decide which version is right, what the prototype is allowed to invent, and what must wait for engineering.

![Loose explorations narrowing to one working prototype](/blog/prototype-decision.jpg "Explore in the open, then carry the decision forward.")

> If the team cannot click it together, it is not ready to argue over.

We have watched too many fast prototypes die in private tabs. The speed is real. The cost is that the thinking becomes invisible.

If you are exploring a flow this month, put the working version on the canvas the team already shares. Let people click it. Write down what you learned next to it. Then decide what ships.
