---
title: Disclosure is an interface problem
date: 2026-11-26
slug: disclosure-is-an-interface-problem
excerpt: The New York Times told photographers to skip Photoshop 2027 because its AI is hard to see. The fix is not less AI. It is AI people can tell they are using.
tags: Responsible AI, Provenance, Creative tools
cover: /blog/disclosure-is-an-interface-problem.jpg
sources:
- The New York Times warns photographers not to update Photoshop over AI features, The Verge | https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features
- New York Times Prohibits Photographers From Using Photoshop 2027, PetaPixel | https://petapixel.com/2026/11/24/new-york-times-prohibits-photographers-from-using-photoshop-2027/
---

This week The New York Times asked its freelance photographers and contributors not to use the newest version of Photoshop. In an email reported by The Verge on November 24, two of the paper's photography leaders, Meaghan Looram and Josh Haner, wrote that features in the 2027 update use AI "in ways that may not be apparent to users," and that using them "can result in metadata identifying photographs as AI-generated." The rule covers Photoshop 2027, release 28.0.0 and later updates, on Times assignments. A Times spokesperson confirmed it to The Verge.

It reads like a story about a newsroom and a software vendor. It is really a story about interface design.

![A photo editing toolbar where some icons carry a small spark mark and others don't](/blog/disclosure-toolbar.jpg "When some tools are AI and some aren't, the toolbar has to say which is which.")

## What actually happened

Adobe has been adding AI to Photoshop for years. Generative Remove and Generative Expand are not new. The November release goes further. The Verge lists a new "AI Assisted Editor" view that puts Photoshop's AI features in one toolbar, an assistant that walks you through edits step by step, prompt-based transformation and editing, new AI upscaling, and a tool that recomposes an image for different canvas sizes. PetaPixel notes that the release also uses generative AI for tasks like relighting and restyling photos.

Separately, Adobe began rolling out C2PA support across its apps in August. That metadata records whether an image was generated or edited with AI features. The Times has long supported that provenance work. The problem is how the two pieces meet. As The Verge puts it, it is not always clear which tools in Adobe's apps are AI-powered, and even older options like automated selection may now count as part of the AI suite. A photographer can make what feels like a routine adjustment and end up with a file that says otherwise.

PetaPixel's reading is the one that matters for us. The Times' worry is less about AI being present than about how unclear the editing features are. Its standards allow only minimal color adjustment. Nothing can be added, removed, blurred, or moved. When people can't tell which tool crosses that line, the only safe rule is to avoid the whole release.

> When people can't see where the AI is, the only safe setting is off.

## The lesson for product teams

Most of the products we work on are not photo editors, but almost all of them are going through the same change. AI features are being folded into existing tools, often behind familiar icons and menus, because that is the low-friction way to ship them. Low friction is usually what we want. Here it backfired. The friction people needed was the moment of knowing.

Three things we would take into any design review this quarter:

**Mark the AI at the point of use, not in the release notes.** If a control calls a generative model, the control should say so: an icon, a label, a tooltip, something consistent. Do not make the user remember which brush changed under the hood last month.

**Show the consequence before it happens.** If an action will write provenance metadata, change an export, or flag a file, tell people in the moment, the way a good confirmation step does. A tag a user can't see or predict is a surprise, and surprises cost trust.

**Give professionals a mode that matches their rules.** Newsrooms, legal teams, medical imaging, regulated finance: many users work under standards that are stricter than the product's defaults. A clear "no generative features" mode, or a history panel that separates AI edits from manual ones, is cheaper than losing a whole customer segment to a blanket ban.

![A history panel with manual edits and AI-assisted edits shown in two distinct styles](/blog/disclosure-history.jpg "An edit history that separates manual from generative work makes the rules auditable.")

## Provenance needs a front end

C2PA and similar standards are good infrastructure. But infrastructure without an interface just moves the problem downstream, to an editor or a reader who finds out after the fact. This episode shows what happens when the metadata knows something the person using the tool doesn't.

The goal is not to scare people off AI features. The goal is for the person holding the tool to know what it does as well as the file does. That is design work, and it belongs in the same sprint as the feature.

![A simple label reading "AI-assisted" next to a confirm button](/blog/disclosure-label.jpg "Disclosure works best as a small, consistent label at the moment of action.")

If your team is folding AI into an existing product this year, try a quick audit: list every control that now calls a model, and ask whether a careful professional could tell from the interface alone. If the answer is no, you have found your next design problem before your customers write the policy for you.
