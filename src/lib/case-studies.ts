import { DEFAULT_SHARE_IMAGE } from './site.ts';

export interface CaseStudyDecision {
  title: string;
  reasoning: string;
  tradeoff?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  context?: string;
  role?: string;
  challenge: string;
  solution: string;
  decisions?: CaseStudyDecision[];
  related?: { id: string; lead: string };
  changed?: string;
  results: string[];
  resultsHeading?: string;
  resultsContext?: string;
  resultsNote?: string;
  images: string[];
  imageAlts?: string[];
  wideImages?: string[];
  wideImageAlts?: string[];
  lessons?: { title: string; body: string }[];
  tags: string[];
  color: 'cyan' | 'violet' | 'emerald';
  videoSrc: string;
  heroSrc?: string;
  posterSrc?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fuel-card-platform',
    title: 'Driven: a fuel card app for the driver on the road, and the team in the office',
    category: 'Fintech & Mobile UX',
    description:
      'I led product strategy, design, and UX management on Driven, a Fleetcor product (Fleetcor is now Corpay), and turned it into a two-sided platform so drivers could find supported stations and track expenses on the road, and back-office teams could approve those expenses without a pile of support calls.',
    context:
      'Driven is a Fleetcor product — Fleetcor is now Corpay — a fuel card application for trucking and delivery fleets.',
    role: 'My role was product strategy, design, and UX management.',
    challenge:
      'Drivers could not reliably find supported fuel stations, so they called roadside support. Expense approval was slow and hard to see: drivers could not track what they had submitted, and administrators were reviewing expenses by hand across disconnected systems while also handling the support load. The gap between the people on the road and the people in the office was costing time, money, and driver satisfaction.',
    solution:
      'I designed a driver app and an admin dashboard as one platform. Drivers get a digital wallet for more than one fuel card, real-time location-based search for nearby supported stations with turn-by-turn navigation, and expense tracking. Administrators get real-time expense monitoring, an integrated chat, and a review workflow where agents can approve or flag transactions quickly. Every interaction had to work for someone moving or someone handling a high volume of requests.',
    decisions: [
      {
        title: 'Make it a two-sided product, not just a better driver app',
        reasoning:
          'The problem was not only on the driver’s phone. Administrators were stuck with support calls and manual review in disconnected tools. I designed a driver app and an admin dashboard as one platform: a digital wallet and expense tracking on one side, real-time expense monitoring and a review workflow on the other, where agents could approve or flag transactions quickly. Every interaction had to work for someone moving or someone handling a high volume of requests.',
      },
      {
        title: 'Put supported-station search and navigation in the driver app',
        reasoning:
          'If drivers cannot find a station that takes the card, they call support from the side of the road. The app needed real-time, location-based search for nearby supported stations, with turn-by-turn navigation, plus a wallet for managing more than one fuel card.',
      },
      {
        title: 'Move support into an in-app chat, next to the expense workflow',
        reasoning:
          'Phone support was the expensive symptom. I added an integrated chat so drivers could get help without a roadside call, and I put that chat beside a clearer expense-review flow so the same team could resolve issues and approve or flag transactions in one place.',
      },
    ],
    results: [
      '68% reduction in driver support calls',
      '5x faster expense approvals',
      '90% faster fuel station discovery',
      '85% of issues resolved via chat',
      '4.6★ app rating, with 95% adoption',
    ],
    images: ['/main-tile-mock.jpg', '/driven.mp4'],
    imageAlts: [
      'Driven by Fleetcor app on three phones, showing a fuel station map, Face ID login, and card balance',
    ],
    wideImages: ['/driven3.mp4'],
    tags: ['Fintech', 'Mobile UX', 'Fleet Management', 'Real-time Communication'],
    color: 'cyan',
    videoSrc: '/driven-driver-dashboard.mp4',
    heroSrc: '/driven-fleet-hero.mp4',
  },
  {
    id: 'newsring',
    title: 'NewsRing: collections that keep themselves current',
    category: 'AI Product Design',
    description:
      'I helped come up with the idea for NewsRing, named it, and did the branding, product strategy, and design. It is a FuzeBox product built for Lee Enterprises, a media company, organized around “Rings”: saved searches that keep filling with fresh content, refined through a conversation instead of a static board or a one-shot query.',
    context:
      'NewsRing is a FuzeBox product, built for Lee Enterprises, a media company. It is an intelligent content discovery platform for people who need to follow evolving interests — local news, global trends, and niche topics — and for professionals, such as interior designers, who want to curate and share collections that stay current without constant manual updates.\n\nLee Enterprises is also named in the FuzeBox website study as the source of a $30M EBITDA figure. That number is FuzeBox’s broader proof, not a NewsRing result.',
    role: 'I helped come up with the idea, named the product, and did the branding, product strategy, and design.',
    challenge:
      'Ordinary search is static, and it does not match how people actually discover and organize content. Interests move. Local news, broader trends, and narrower topics all change, and users have no good way to keep up with that without starting over. People who curate for work need living collections that stay current, not boards they have to update by hand. The brief was to combine visual curation, strong search, and an easy way to share.',
    solution:
      'A Ring is an intelligent, saved search that keeps updating with fresh content for whatever criteria the person set, and it can be shared as a living stream rather than a snapshot. Each Ring is powered by conversational AI that uses context and tightens results through ordinary dialogue, with prompts that help someone find a starting point. The product starts with local news discovery and then extends to a broader reach — hometown updates, professional interests, or creative inspiration — on the same Ring model.',
    decisions: [
      {
        title: 'Make the core object a Ring, not a saved link or a static board',
        reasoning:
          'A Ring is an intelligent, saved search that keeps updating with fresh content for whatever criteria the person set. That is how the product stays current without asking someone to rebuild a collection by hand. Content is meant to be shared as a living stream, not a snapshot.',
      },
      {
        title: 'Let people refine a Ring by talking to it',
        reasoning:
          'Each Ring is powered by conversational AI that uses context and tightens results through ordinary dialogue, with prompts that help someone find a starting point. The point was to make refinement feel like a conversation, not a new filter panel every time the interest shifts.',
      },
      {
        title: 'Start with local news, then widen the same model',
        reasoning:
          'The product starts with local news discovery and then extends to a broader reach: hometown updates, professional interests, or creative inspiration, all using the same Ring model.',
      },
    ],
    results: [
      '3x longer content engagement time',
      '65% reduction in search time with AI',
      '4x more shares than static bookmarks',
      '80% time savings in content curation',
      '95% accuracy for location-based updates',
    ],
    images: ['/Landing-Page.jpg', '/phones.jpg'],
    imageAlts: [
      'NewsRing landing page for an AI-powered local news companion, with two phones',
      'Grid of NewsRing phone screens showing rings, a library, and search',
    ],
    tags: ['Conversational AI', 'Content Discovery', 'UX Design', 'Real-time Data'],
    color: 'violet',
    videoSrc: '/newsring-product.mp4',
    heroSrc: '/nr-case.mp4',
  },
  {
    id: 'gaming-platform',
    title: 'StrideGG: one player profile, and a way to run the night’s tournament',
    category: 'Gaming Platform & Community',
    description:
      'I led product strategy, design, UX, and management on StrideGG so a player’s stats and presence could live in one profile, and so tournaments — including Rocket League championship tracking, which we teamed up with G2 Esports on — did not have to be run by hand.',
    context:
      'The product is StrideGG. We teamed up with G2 Esports on this project, specifically on championship-level Rocket League competition tracking. The work covers two jobs that were usually separate: a unified, shareable player profile, and a tournament system for recurring competition.',
    role: 'My role was product strategy, design, UX, and management.',
    challenge:
      'A player’s identity was split across the usual places: Discord, Steam, Xbox Live, PlayStation Network, and other platforms. That made it hard to show a complete profile, or to find teammates and opponents who actually fit. Tournament organizers were tracking competitions by hand. Those systems could not scale to nightly events, and they could not give the real-time visibility a professional esports partnership needs.',
    solution:
      'The profile imports stats from major gaming platforms, Discord presence, and streaming services into a single, shareable profile that updates in real time. Matchmaking uses that record to help players find teammates and opponents by skill and play style. The tournament side includes automated bracket generation, real-time scoring, and live leaderboards for nightly competitions. We teamed up with G2 Esports on a specialized Rocket League championship tracking system with match analytics, player performance metrics, and visualizations that work for spectators, not just organizers.',
    decisions: [
      {
        title: 'Build one profile that pulls from the places players already are',
        reasoning:
          'The profile imports stats from major gaming platforms, Discord presence, and streaming services into a single, shareable profile that updates in real time. The point was to stop asking a player to maintain a second identity just to be visible.',
      },
      {
        title: 'Use that same aggregated record to do matchmaking',
        reasoning:
          'Once the stats lived in one place, the matchmaking engine could use them to help players find teammates and opponents by skill and play style, instead of leaving that to guesswork across disconnected accounts.',
      },
      {
        title: 'Treat nightly tournaments as a product, and build a dedicated mode with G2 Esports',
        reasoning:
          'The tournament side includes automated bracket generation, real-time scoring, and live leaderboards for nightly competitions. We teamed up with G2 Esports on a specialized Rocket League championship tracking system with match analytics, player performance metrics, and visualizations that work for spectators, not just organizers.',
      },
    ],
    results: [
      '15+ platforms with unified stats',
      '92% player compatibility rating',
      '500+ concurrent players with zero downtime',
      '100% G2 Esports championship tracking',
      '50K+ active gamers in 6 months',
    ],
    resultsNote: 'Source: StrideGG Discord community and G2 Esports data.',
    images: ['/stridegg-player-profiles.jpg', '/stridegg-tournament-profile.jpg'],
    imageAlts: [
      'StrideGG player profiles on four phones in front of a desktop dashboard',
      'StrideGG tournament profile on a desktop monitor with two phones',
    ],
    wideImages: ['/GG-Profile.mp4'],
    tags: ['Gaming Platform', 'Real-time Data', 'Tournament Systems', 'Community Building'],
    color: 'cyan',
    videoSrc: '/20240207_strideGG_UNIVPROF_VID_1.mp4',
    heroSrc: '/stridegg-profile-builder.mp4',
  },
  {
    id: 'senior-pga-concession',
    title: 'EventPulse at the Senior PGA Championship, The Concession',
    category: 'Live Event Technology',
    description:
      'I led product strategy, design, UX, and management on EventPulse, a FuzeBox product, and put it in front of spectators at the 2025 Senior PGA Championship at The Concession — a week to find out whether an AI concierge could answer real course questions faster than a map or a generic event app.',
    context:
      'EventPulse is a FuzeBox product. This page is a live deployment of that product at the 2025 Senior PGA Championship, The Concession.',
    role: 'My role was product strategy, design, UX, and management on EventPulse, including this deployment.',
    challenge:
      'Championship golf is a hard wayfinding problem. Spectators move between 18 holes spread across hundreds of acres, and player groups keep changing position through the day. Paper maps, static signage, and basic event apps fall behind: the information is already stale by the time someone uses it, or it takes too much effort to find.',
    solution:
      'The concierge knew the championship, not just a venue map: player positions, tee times, facility locations, food options, and real-time course conditions. People asked in ordinary language — “Where is Bernhard Langer right now?” or “What’s the closest food stand to hole 7?” — and got an answer they could use while they were moving.',
    decisions: [
      {
        title: 'Prefer a fast, good-enough answer over a complete one',
        reasoning:
          'People at a live event are in a hurry. Users preferred a fast answer that covered about 80% of what they needed over a slower, more complete one. Speed beat completeness.',
        tradeoff: 'You leave some detail out so the person can keep moving.',
      },
      {
        title: 'Design the concierge for implied context, not just exact questions',
        reasoning:
          'The concierge had to know the championship, not just a venue map: player positions, tee times, facility locations, food options, and real-time course conditions. People asked in ordinary language — “Where is Bernhard Langer right now?” or “What’s the closest food stand to hole 7?” — and the most valued behavior was handling implicit questions like “Where should I go next?”, using time, location, and preferences. That was the top-rated feature.',
      },
      {
        title: 'Treat the first accurate answer as the start of trust, not a one-off success',
        reasoning:
          'Users who got an accurate answer on the first try were 3x more likely to come back with more questions during the day. That figure, like the 89% query satisfaction rate, came from live users testing the product and giving feedback. Accuracy was not only a quality bar. It was how people decided whether to keep using the product.',
      },
    ],
    results: [
      '2,016 active users during the four-day event in 2025',
      '89% query satisfaction rate, from live user testing and feedback',
      '4.2 second average response time',
    ],
    resultsNote:
      'The 89% query satisfaction rate, and the finding that users who got an accurate first answer were 3x more likely to return with more questions, came from live users testing the product and giving feedback.',
    images: ['/concession-devices.mp4', '/CONCESSION-EP-2.mp4'],
    tags: ['Live Events', 'PGA', 'Real-time Data', 'Tournament Technology'],
    color: 'emerald',
    videoSrc: '/concession-devices.mp4',
    heroSrc: '/reel1-2.mp4',
  },
  {
    id: 'fuzebox-ai',
    title: 'A website that can explain FuzeBox to the people who have to run it',
    category: 'AI Platform & Brand',
    description:
      'I led product strategy, design, UX, and management on the FuzeBox.ai site so an operating framework — not a generic enterprise AI pitch — would make sense to the operators who have to trust it.',
    context:
      'The client is FuzeBox AI, an AI-first venture with an operating framework, FuzeBoxOS, meant to turn scattered enterprise AI work into something you can run and measure. The framework includes a Transformation Index, productized Blueprints, and vertical apps such as EventPulse, VIP Play, and Loop TV. EventPulse is a FuzeBox product. NewsRing is a FuzeBox product built for Lee Enterprises, a media company.',
    role: 'My role was product strategy, design, UX, and management.',
    challenge:
      'FuzeBox needed a digital presence that could carry the framework behind it. Enterprise buyers were being sold AI tools that created activity without outcomes — “AI theater,” in the language the site had to take on. The site had to name three problems operators already feel: a Value Realization Gap between AI capability and P&L impact; a Coordination Tax that, in FuzeBox’s telling, absorbs 30–50% of enterprise effort in handoffs and decision latency; and a Tool-First Trap of pilots that never scale.\n\nThe design problem was translation. FuzeBoxOS is a dense operating system. The site had to make it clear and credible to operators, not only to technologists.',
    solution:
      'The information architecture follows how FuzeBox actually works: a Platform section for FuzeBoxOS and its productized Blueprints; a “Why FuzeBox” section that names the operational problem in plain language before it offers solutions by outcome; and proof pages anchored in FuzeBox’s deployments. The visual design is a dark, disciplined enterprise aesthetic: a custom logo and brand mark, structured pages across platform, delivery, ecosystem, and research, and the executive team visible. The site is supposed to sell the way FuzeBox operates, not a tool catalog.',
    decisions: [
      {
        title: 'Structure the site like the framework, not like a generic corporate marketing site',
        reasoning:
          'The information architecture follows how FuzeBox actually works: a Platform section for FuzeBoxOS and its productized Blueprints; a “Why FuzeBox” section that names the operational problem in plain language before it offers solutions by outcome; and proof pages anchored in real deployments. The site is supposed to sell the way FuzeBox operates, not a tool catalog.',
        tradeoff:
          'You ask a first-time visitor to learn a framework, instead of leading with a simpler product grid. That is the point, but it is a harder first read.',
      },
      {
        title: 'Lead with the problem in operator language, then show proof',
        reasoning:
          '“Why FuzeBox” states the problem before the solution. The proof pages carry the Lee Enterprises, Caesars, and Las Vegas Sands outcomes as FuzeBox’s record, so an operator can judge the claim in business terms rather than in AI vocabulary.',
      },
      {
        title: 'Keep the visual system dark, quiet, and consistent enough to feel like a serious enterprise product',
        reasoning:
          'The visual design is a dark, disciplined enterprise aesthetic: a custom logo and brand mark, and a structured architecture across platform, delivery, ecosystem, and research, with the executive team visible. The tone had to feel closer to an operating system than to a launch campaign.',
      },
    ],
    changed:
      'I shipped a site that explains the framework in operator language, carries FuzeBox’s proof without dressing it up as a design award, and gives the brand a consistent place to stand. That is the work. It is not the same thing as $30M in EBITDA.',
    resultsHeading: 'FuzeBox customer outcomes',
    resultsContext:
      'These figures are FuzeBox’s own customer outcomes, the proof the site carries. They are not results Revv delivered on this website engagement. NewsRing is a FuzeBox product built for Lee Enterprises; the $30M figure is FuzeBox’s broader proof, not a NewsRing result.',
    results: [
      '$30M in documented EBITDA impact at Lee Enterprises',
      '11 cloud migrations completed on time and on budget at Caesars Entertainment',
      '10x improvement in technology investment value at Las Vegas Sands',
      '$100B+ in cumulative enterprise market value impacted',
      '5+ portfolio companies represented across the ecosystem',
    ],
    images: [
      '/Blue-lit_conference_auditorium.webp',
      '/Cobalt-lit_stadium_event_hero.webp',
      '/FuzeBox_Website_Case_Study_Spread.webp',
    ],
    imageAlts: [
      'Event Pulse conferences and meetings scene in a blue-lit auditorium',
      'Event Pulse sports and live events scene over a lit stadium',
      'FuzeBox website pages for the platform and solutions by outcome',
    ],
    wideImages: ['/FuzeBox_AI_Device_Trio.jpg'],
    wideImageAlts: ['FuzeBox website on a desktop monitor, tablet, and phone'],
    tags: ['Enterprise AI', 'Brand & Web Design', 'B2B Marketing', 'Framework Storytelling'],
    color: 'cyan',
    videoSrc: '/FB-INTRO-SHORT.mp4',
    heroSrc: '/FB-INTRO-SHORT.mp4',
  },
  {
    id: 'eventpulse-platform',
    title: 'EventPulse: one concierge platform for live events of very different shapes',
    category: 'AI Product Design & Build',
    description:
      'I led product strategy, design, UX, and management on EventPulse, a FuzeBox product: one platform — a conversational concierge, 3D venue maps, and live wayfinding — that could be reused across very different events, instead of starting over for each one.',
    context:
      'EventPulse is a FuzeBox product, one of its vertical apps alongside VIP Play and Loop TV. This study is about that product, not a separate Revv-owned platform.\n\nThe live production events were the 2025 Senior PGA Championship at The Concession, the SEAT 2026 conference, and Atlanta’s 404 Day. The Las Vegas Strip experience (built on Mapbox GL), the F1 Grand Prix circuit maps, and the Super Bowl LX venue visualization are concepts or sales visualizations.',
    role: 'My role was product strategy, design, UX, and management on EventPulse.',
    challenge:
      'Live events share a simple problem: people are somewhere they do not know well, trying to find other people, places, and moments in real time. Paper maps, static signage, and generic event apps go stale as soon as conditions change. At scale that gets worse. A championship golf course spreads spectators across 18 holes and hundreds of acres. A citywide festival like Atlanta’s 404 Day scatters events across many venues. An industry conference like SEAT 2026 spans a convention center plus three night venues.\n\nThe thesis to prove was that a conversational AI concierge could give faster, more accurate answers than the usual apps, maps, and signs — and that attendees would actually prefer it — with one platform that could adapt to different event types, not a custom build for each one.',
    solution:
      'The attendee’s first move is a question, not a menu. Around that, 3D venue mapping shows terrain, structures, and routes; dynamic routing accounts for crowd density, current conditions, and preferences; live tracking follows players and performers; Moments & Highlights surfaces action as it happens; and smart notifications try to stay useful without becoming noise. For organizers, the same platform is also the operational backbone: real-time communication, content management, and event-wide visibility.\n\nLive production events were the 2025 Senior PGA Championship at The Concession, SEAT 2026 as the official attendee layer, and Atlanta’s 404 Day. Atlanta’s 404 Day has no published results yet. The Las Vegas Strip experience (built on Mapbox GL), the F1 Grand Prix circuit maps, and the Super Bowl LX venue visualization are concepts or sales visualizations, not live deployments.',
    related: {
      id: 'senior-pga-concession',
      lead: 'The Senior PGA deployment is told in full on its own page:',
    },
    decisions: [
      {
        title: 'Build one platform that can adapt, instead of a custom product per event',
        reasoning:
          'That was the brief. The same system had to make sense at a golf championship, a city festival, and a multi-venue conference.',
        tradeoff: 'You take on the harder platform problem so you do not start from zero at the next venue.',
      },
      {
        title: 'Make the attendee’s first move a question, not a menu',
        reasoning:
          'The AI concierge answers ordinary language — “Where is John Daly?” or “Where’s the nearest restroom?” — with no menus. The Senior PGA deployment, told in full on that study, showed why: people preferred a fast, contextual answer to digging through an app. The same pattern is the front door here.',
      },
      {
        title: 'Pair the concierge with a live, spatial model of the venue, and give organizers an operations layer',
        reasoning:
          '3D venue mapping shows terrain, structures, and routes, not just a flat plan. Dynamic routing accounts for crowd density, current conditions, and preferences. Live tracking follows players and performers with directions. Moments & Highlights surfaces action as it happens. Smart notifications try to stay useful without becoming noise. For organizers, the same platform is also the operational backbone: real-time communication, content management, and event-wide visibility.',
      },
    ],
    results: [
      '643 unique visitors at SEAT 2026',
      'Nearly 15,000 pageviews at SEAT 2026',
      '87,860 personalization surfaces served at SEAT 2026',
    ],
    resultsNote:
      'These figures are for SEAT 2026, a live production event, where EventPulse was the official attendee layer. Atlanta’s 404 Day was also a live production event; there are no published results for it yet. The Las Vegas Strip experience, the F1 Grand Prix circuit maps, and the Super Bowl LX venue visualization are concepts or sales visualizations, not live deployments.',
    images: ['/ep-seat-phones.jpg', '/ep-vegas.webp', '/ep-404-phones.jpg', '/ep-superbowl-map.jpg'],
    imageAlts: [
      'SEAT Conference attendee app screens, a live production event',
      'Las Vegas Strip concept / sales visualization, with a 3D map, venue offers, and a concierge chat',
      '404 Day Atlanta festival app screens, a live production event',
      "Super Bowl LX concept / sales visualization: 3D venue map at Levi's Stadium",
    ],
    wideImages: ['/ep-hero-high-impact.jpg'],
    wideImageAlts: ['Event Pulse phones for arrival, venue maps, sponsors, profiles, and event ROI'],
    tags: ['AI Concierge', '3D Mapping', 'Live Events', 'Real-time Wayfinding'],
    color: 'cyan',
    videoSrc: '/ep-explainer.mp4',
    heroSrc: '/ep-explainer.mp4',
    posterSrc: '/posters/ep-explainer.jpg',
  },
];

const STILL_IMAGE = /\.(png|jpe?g|webp|gif)$/i;

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

export function caseStudyPath(id: string): string {
  return `/work/${id}/`;
}

export function caseStudyNarrative(study: CaseStudy): string {
  const decisionText = (study.decisions ?? [])
    .map((decision) => {
      const lines = [decision.title, decision.reasoning];
      if (decision.tradeoff) lines.push(decision.tradeoff);
      return lines.join('\n');
    })
    .join('\n\n');
  const related = study.related ? `${study.related.lead} ${caseStudyPath(study.related.id)}` : '';

  return [
    study.context,
    study.role,
    study.challenge,
    study.solution,
    related,
    decisionText,
    study.changed,
    study.resultsHeading,
    study.resultsContext,
    study.results.join('\n'),
    study.resultsNote,
  ]
    .filter((part): part is string => Boolean(part && part.trim()))
    .join('\n\n');
}

export function posterForVideo(src: string, posterSrc?: string): string {
  if (posterSrc) return posterSrc;
  const file = src.split('/').pop() ?? 'video';
  const base = file.replace(/\.(mp4|mov|webm)$/i, '');
  return `/posters/${base}.jpg`;
}

export function caseStudyShareImage(study: CaseStudy): string {
  const still = [...(study.wideImages ?? []), ...study.images].find((src) => STILL_IMAGE.test(src));
  return still ?? DEFAULT_SHARE_IMAGE;
}
