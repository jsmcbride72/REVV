---
title: Design for the agent, and for the person who sent it
date: 2026-11-28
slug: design-for-the-agent-and-the-person-who-sent-it
excerpt: User experience is becoming agentic experience. The user now includes agents acting on a person's behalf, so teams design for two audiences: the agent that executes, and the human who delegates and reviews.
tags: Agents, Product design, Experience design
cover: /blog/design-for-the-agent-and-the-person-who-sent-it.jpg
sources:
- Introducing AX: Why Agent Experience Matters | https://biilmann.blog/articles/introducing-ax/
- One Year of AX | https://biilmann.blog/articles/one-year-of-ax/
- Experience Design: Dropping the "User" from "User Experience", Nielsen Norman Group | https://www.nngroup.com/articles/ux-vs-experience-design/
- Latest updates, Google Universal Commerce Protocol | https://developers.google.com/merchant/ucp/latest-updates
---

Most product teams still design as if a person will be looking at the screen the whole time. That is a reasonable habit. It is also increasingly incomplete. Someone asks an assistant to book a flight or cancel a subscription, and the first user to hit your flow may be an agent acting for a person who is not watching every step.

That shift has a name. In January 2025, Mathias Biilmann of Netlify coined Agent Experience, or AX: the holistic experience AI agents will have as the user of a product or platform. A year later he wrote that AX had mostly been heard as a new kind of developer experience, and that it was on its way to becoming as generally applicable as UX itself.

![Two faintly glowing paths on a dark field, one entering a system and one returning to a quieter plane](/blog/ax-two-audiences.jpg "The work now has two audiences: the agent that executes, and the person who still owns the result.")

## UX is not going away

Nielsen Norman Group made the same point in plainer design language on October 30, 2026. Raluca Budiu wrote that UX is not disappearing. The field is expanding because people may no longer interact with a company directly. Their agents may do it for them, sometimes outside the channels the company designed.

The success test does not change. Designing for agents, she writes, is not the same as optimizing blindly for agent success. The goals and welfare of the humans behind them still hold priority. What changes is where the problems show up. A flow can work for a person, and work for an agent, and still break when the task moves from one to the other. Budiu's example is a flight booking: the agent recommends a flight, the person accepts, and then the person is asked to log in inside the agent's in-app browser, where their password manager is not available. The agent was fine. The login request was reasonable. The experience failed in the handoff.

> The user is now two audiences: the agent that does the work, and the person who still has to live with it.

## The product already has an agent experience

You do not get to opt out of this. Biilmann's point is blunt: every product already has an Agent Experience. The only question is whether it is good or bad. Agents can already drive a browser, and some are being built into browsers. If your only path is a visual interface meant for a person, an agent will still try to use it, with more friction and more ways to get the task wrong in someone else's name.

The work, as he has framed it, is practical. Can the agent access the product on behalf of a user, with the right permissions, and with a human in the loop when that is required? Does it have the context to use the product well, including machine-readable docs and tools such as MCP? Are there tools an agent can actually operate, not just a UI it has to scrape?

This is no longer only a developer-tools story. In November 2026, Google's documentation for the Universal Commerce Protocol added a beta Model Context Protocol transport so merchants can implement native checkout and cart over a JSON-RPC `tools/call` endpoint. Checkout now has an official agent-facing path sitting next to the page a person would use.

![A checkout moving from an agent path into a human confirmation](/blog/ax-checkout-handoff.jpg "Checkout is still a design problem. The first customer in the flow may not be looking at your page.")

We have been writing about one side of this already: letting an agent look up the real component, answer with a product's own interface pieces, and hand back a file a person can still edit. AX is the wider frame. The agent is a user of your product, and the person who sent it still has to trust, oversee, and sometimes reverse what happens.

![A completed action with a clear path back toward the person who authorized it](/blog/ax-reversibility.jpg "Oversight is part of the design: see what happened, stop it, or undo it.")

## What product teams should do with this

**Write both users into the brief.** For every important flow, name the person, the agent that may act for them, and where control should pass back. If the brief only describes screens, you are designing half the experience.

**Make the product readable to an agent.** Clear APIs, machine-ready documentation, and explicit tools beat a visual UI that an agent has to infer. Permissions should be scoped to the task, and it should be obvious when a human has to be in the loop.

**Design the handoff, and the undo.** Decide what the agent may do on its own, what needs a confirmation, and what it should never do. When the person is pulled back in, they should see what already happened, what is about to happen, and how to stop or reverse it. Do not drop them into a tool they do not normally use and call that review.

If you are shipping a flow this quarter that an assistant might run for a customer, walk it twice. Once as the agent. Once as the person who gets the result. The interface still matters. So does the path an agent takes when nobody is looking at the screen.
