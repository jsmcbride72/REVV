---
title: Agents should borrow your components, not invent a new interface
date: 2026-11-18
slug: agents-should-borrow-your-components
excerpt: Google's A2UI 1.0 lets an agent answer with screens drawn from a product's own components. The design system just got a new client.
tags: Generative UI, Agents, Design systems
cover: /blog/cover-a2ui.jpg
sources:
- A2UI 1.0 announcement, Google Developers Blog | https://developers.googleblog.com/en/a2ui-10-build-delightful-fast-reliable-agentic-experiences/
- A2UI documentation | https://a2ui.org
---

On November 11, 2026, Google released A2UI 1.0, the first stable version of an open protocol for generative UI. The problem it names is one product teams already feel. People can ask an agent almost anything, and what comes back is usually a wall of text. Text is a poor way to compare three products, edit a plan, or confirm a booking.

A2UI lets the agent answer with an interactive screen instead: a form, a chart, a picker. The agent describes what to show. The application draws that description with its own native components, at the speed of the product people already use. Google's write-up is explicit about the boundary. Agents place and configure only the components a team registers. Sensitive values are bound on the server, so they never have to travel through the model, and the screen can stream in while the agent is still working.

The release is usable now. Open-source renderers cover React, Angular, and Lit on the web, Flutter on mobile, web, and desktop, and SwiftUI on iOS. Jetpack Compose is on version 0.9.1, with 1.0 still coming. Agent SDKs are available for Python, TypeScript, and Dart. Version 1.0 adds bidirectional function calls, so a flight or reservation picker can check availability on the spot, along with accessibility support and room for extra metadata. The web and Flutter renderers also work inside MCP apps, which means the same screen can show up in assistants such as Claude and Gemini.

A few teams are already past the demo stage. Atlassian is bringing A2UI into Jira so an agent assigned a work item can ask for a missing detail with an interactive card, and the team answers inside the work item. Alation builds feeds of metric cards and charts with it. Ask Claude for a feed about profitable products and the cards render in the conversation. The same feed can be opened inside Alation, and a chart can show the SQL and data behind the figure. ByteDance released an A2UI renderer for Lynx, its cross-platform framework, in June 2026, and is adapting that renderer from 0.9 to 1.0. Inside Google, Gemini Notebook uses the pattern too: ask for a slide deck and the reply is a card that asks whether you want presenter slides or a detailed deck, and which topics to focus on, before anything is generated.

For a studio, the protocol diagram is the least interesting part. The rule underneath it is the work. The agent does not get a second visual language. If the button, the chart, and the empty state are unclear, the agent will repeat them at the pace of a conversation. That is design-system work with a new client, one that composes screens instead of waiting for a file from design.

We have argued for a while that user experience and agentic experience have to be designed together. A2UI is one of the first public specs that assumes the point. The same request can render in a company's own app and inside a third-party assistant, with the components that product already trusts. People recognize the controls. They can see what will be sent before they confirm it.

The spec will not make those decisions for you. Someone still has to decide which components an agent may place, what a confirmation looks like, and what the screen does when the model picks the wrong thing. Accessibility is in the protocol. It still has to be in the components.

If you are briefing an agent this quarter, start with the system you already have. Name the components. Write down what they may not do. Then let the agent compose. The interface people meet should feel like your product, not like a chat transcript that learned to draw.
