import { DEFAULT_SHARE_IMAGE } from './site.ts';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  resultsHeading?: string;
  resultsContext?: string;
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
    title: 'Revolutionizing Fleet Fuel Management for the Mobile Workforce',
    category: 'Fintech & Mobile UX',
    description: 'Transformed a fuel card application into a comprehensive fleet management platform, reducing driver support requests by 68% and accelerating expense approvals by 5x.',
    challenge: 'A fintech company providing fuel cards to trucking and delivery fleets faced serious adoption issues. Drivers struggled to find supported fuel stations, leading to frequent roadside support calls. The expense approval process was slow and opaque, with drivers unable to track their submissions. Administrators were overwhelmed with support requests while manually reviewing expenses across disconnected systems. The disconnect between drivers and back-office teams was costing time, money, and driver satisfaction.',
    solution: 'We designed a dual-sided platform that serves both drivers and administrators. The driver app features a digital wallet for managing multiple fuel cards, real-time location-based search for nearby supported stations with turn-by-turn navigation, and transparent expense tracking. The admin dashboard provides real-time expense monitoring, an integrated chat system for instant driver support, and a streamlined expense review workflow where agents can quickly approve or flag transactions. Every interaction was designed for users on the move or managing high volumes.',
    results: [
      '68% Driver support call reduction',
      '5x Expense approval speed improvement',
      '90% Faster fuel station discovery',
      '85% Issues resolved via chat',
      '4.6★ App rating with 95% adoption'
    ],
    images: [
      '/main-tile-mock.jpg',
      '/driven.mp4',
    ],
    imageAlts: [
      'Driven by Fleetcor app on three phones, showing a fuel station map, Face ID login, and card balance',
    ],
    wideImages: ['/driven3.mp4'],
    tags: ['Fintech', 'Mobile UX', 'Fleet Management', 'Real-time Communication'],
    color: 'cyan',
    videoSrc: '/driven-driver-dashboard.mp4',
    heroSrc: '/driven-fleet-hero.mp4'
  },
  {
    id: 'newsring',
    title: 'NewsRing: Redefining Content Discovery Through Conversational AI',
    category: 'AI Product Design',
    description: 'Created an intelligent content discovery platform that transforms how people search, curate, and share information through conversational AI and dynamic "Rings."',
    challenge: 'Traditional search experiences are static and disconnected from how people actually discover and organize content. Users struggle to keep track of evolving interests across local news, global trends, and niche topics. Content creators and professionals like interior designers need ways to curate and share living collections that stay current without constant manual updates. The market needed a solution that combines the visual curation of Pinterest, the search power of Google, and the shareability of Instagram.',
    solution: 'We built NewsRing around the concept of "Rings" - intelligent, saved searches that continuously update with fresh content tailored to any criteria. Starting with local news discovery and expanding to global reach, each Ring is powered by conversational AI that understands context and refines results through natural dialogue. Users can create Rings for their hometown updates, professional interests, or creative inspiration, with AI prompts guiding discovery. Content stays current automatically, transforming static boards into living, shareable knowledge streams that evolve with user needs.',
    results: [
      '3x Longer content engagement time',
      '65% Search time reduction with AI',
      '4x More shares than static bookmarks',
      '80% Time savings in content curation',
      '95% Accuracy for location-based updates'
    ],
    images: [
      '/Landing-Page.jpg',
      '/phones.jpg'
    ],
    imageAlts: [
      'NewsRing landing page for an AI-powered local news companion, with two phones',
      'Grid of NewsRing phone screens showing rings, a library, and search',
    ],
    tags: ['Conversational AI', 'Content Discovery', 'UX Design', 'Real-time Data'],
    color: 'violet',
    videoSrc: '/newsring-product.mp4',
    heroSrc: '/nr-case.mp4'
  },
  {
    id: 'gaming-platform',
    title: 'Unifying the Gaming Community Through Centralized Stats and Competitive Play',
    category: 'Gaming Platform & Community',
    description: 'We built a unified gaming platform that dynamically aggregates player stats from multiple sources and hosts sophisticated tournament systems, partnering with G2 Esports for championship-level Rocket League competition tracking.',
    challenge: 'Gamers face a fragmented identity across the gaming ecosystem - their stats, achievements, and presence are scattered across Discord servers, Steam, Xbox Live, PlayStation Network, and countless other platforms. This fragmentation makes it nearly impossible for players to showcase their complete gaming profile or find suitable teammates and opponents. Tournament organizers struggled with manual tracking systems that couldn\'t scale to nightly competitions or provide the real-time visibility needed for professional esports partnerships.',
    solution: 'We designed and built a comprehensive platform that solves both discovery and competition challenges. The unified profile system dynamically imports stats from all major gaming platforms, Discord presence, and streaming services into a single, shareable profile that updates in real-time. Our matchmaking engine analyzes aggregated stats to help gamers find teammates and opponents that match their skill level and play style. The tournament platform features automated bracket generation, real-time scoring, and live leaderboards for nightly competitions. For our G2 Esports partnership, we developed a specialized Rocket League championship tracking system with detailed match analytics, player performance metrics, and spectator-friendly visualizations.',
    results: [
      '15+ Platforms with unified stats',
      '92% Player compatibility rating',
      '500+ Concurrent players with zero downtime',
      '100% G2 Esports championship tracking',
      '50K+ Active gamers in 6 months'
    ],
    images: [
      '/stridegg-player-profiles.jpg',
      '/stridegg-tournament-profile.jpg'
    ],
    imageAlts: [
      'StrideGG player profiles on four phones in front of a desktop dashboard',
      'StrideGG tournament profile on a desktop monitor with two phones',
    ],
    wideImages: [
      '/GG-Profile.mp4'
    ],
    tags: ['Gaming Platform', 'Real-time Data', 'Tournament Systems', 'Community Building'],
    color: 'cyan',
    videoSrc: '/20240207_strideGG_UNIVPROF_VID_1.mp4',
    heroSrc: '/stridegg-profile-builder.mp4'
  },
  {
    id: 'senior-pga-concession',
    title: 'Proven Live — First Deployed at the Senior PGA, The Concession',
    category: 'Live Event Technology',
    description: 'Battle-tested at one of golf\'s most prestigious venues. Our platform went live at the Senior PGA Championship at The Concession, proving the technology under real tournament conditions.',
    challenge: 'Championship golf presents unique wayfinding challenges. Spectators move between 18 holes spread across hundreds of acres, with player groups constantly shifting positions throughout the day.\n\nTraditional solutions — paper maps, static signage, basic event apps — fail because the information is either outdated by the time it\'s consumed or requires too much effort to find.',
    solution: 'EventPulse deployed an AI concierge that understood the full context of the championship — player positions, tee times, facility locations, food options, and real-time course conditions.\n\nAttendees simply asked questions naturally like, "Where is Bernhard Langer right now?" or "What\'s the closest food stand to hole 7?" They received instant, accurate answers.',
    results: [
      '2016 Active users during 4-day event',
      '89% Query satisfaction rate',
      '4.2s Average response time'
    ],
    images: [
      '/concession-devices.mp4',
      '/CONCESSION-EP-2.mp4'
    ],
    lessons: [
      {
        title: 'Speed beats completeness',
        body: 'Users preferred a fast 80% answer over a slow, comprehensive one. In live event contexts, time pressure means conciseness wins.'
      },
      {
        title: 'Context is everything',
        body: 'The AI\'s ability to understand implicit context ("Where should I go next?" considers time, location, preferences) was the top-rated feature.'
      },
      {
        title: 'Trust builds through accuracy',
        body: 'Users who received accurate answers on first interaction were 3x more likely to return for subsequent questions throughout the day.'
      }
    ],
    tags: ['Live Events', 'PGA', 'Real-time Data', 'Tournament Technology'],
    color: 'emerald',
    videoSrc: '/concession-devices.mp4',
    heroSrc: '/reel1-2.mp4'
  },
  {
    id: 'fuzebox-ai',
    title: 'FuzeBox AI: Turning Enterprise AI Ambition into Measurable P&L Impact',
    category: 'AI Platform & Brand',
    description: 'Designed and built the digital presence for FuzeBox AI — an AI-first venture whose framework turns fragmented enterprise AI efforts into orchestrated, measurable execution.',
    challenge: 'FuzeBox AI needed a digital presence that could do justice to the framework behind it. Enterprise buyers were being sold AI tools that create "AI theater" — activity without outcomes. The site had to explain three problems every enterprise feels: the Value Realization Gap between AI capability and P&L impact, the Coordination Tax that absorbs 30-50% of enterprise effort in handoffs and decision latency, and the Tool-First Trap of pilots that never scale.\n\nThe challenge was translating a sophisticated operating framework — FuzeBoxOS, with its Transformation Index, productized Blueprints, and vertical apps like EventPulse, VIP Play, and Loop TV — into a clear, credible story that operators, not just technologists, would trust.',
    solution: 'We designed and built the FuzeBox.ai website as an orchestration story told through design. The architecture mirrors the framework itself: a Platform section explaining the FuzeBoxOS framework and its productized Blueprints, a "Why FuzeBox" section that names the problem in plain operational terms before offering solutions by outcome, and proof pages anchored in FuzeBox\'s customer deployments — $30M in documented EBITDA impact at Lee Enterprises, 11 on-time cloud migrations at Caesars Entertainment, and a 10x improvement in technology investment value at Las Vegas Sands.\n\nThe visual design uses a dark, disciplined enterprise aesthetic: a custom logo and brand mark, structured page architecture across platform, delivery, ecosystem, and research sections, and a leadership presence featuring the executive team. The result is a site that sells the way FuzeBox operates — outcome-first, proof-backed, and built for enterprises tired of AI pilots that never reach the balance sheet.',
    resultsHeading: 'FuzeBox customer outcomes',
    resultsContext: 'These figures are FuzeBox product and customer outcomes, the context for the marketing site Revv designed. They are not results Revv delivered.',
    results: [
      '$30M Documented EBITDA from FuzeBox deployments at Lee Enterprises',
      '11 On-time, on-budget cloud migrations FuzeBox completed at Caesars',
      '10x Technology investment value FuzeBox reports at Las Vegas Sands',
      '$100B+ Cumulative enterprise market value FuzeBox attributes to its work',
      '5+ Portfolio companies in the FuzeBox ecosystem the site presents'
    ],
    images: [
      '/Blue-lit_conference_auditorium.webp',
      '/Cobalt-lit_stadium_event_hero.webp',
      '/FuzeBox_Website_Case_Study_Spread.webp'
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
    heroSrc: '/FB-INTRO-SHORT.mp4'
  },
  {
    id: 'eventpulse-platform',
    title: 'EventPulse: An AI Concierge Platform for Live Events at Any Scale',
    category: 'AI Product Design & Build',
    description: 'Designed and built EventPulse — a six-module event intelligence platform with a conversational AI concierge, 3D venue mapping, and real-time wayfinding, deployed everywhere from championship golf to citywide festivals.',
    challenge: 'Live events share one fundamental problem: attendees are somewhere they don\'t know well, trying to find people, places, and moments in real time. Paper maps, static signage, and generic event apps go stale the moment conditions change — and at scale, the problem compounds. A championship golf course spreads spectators across 18 holes and hundreds of acres. A citywide festival like Atlanta\'s 404 Day scatters dozens of events across multiple venues. An industry conference like SEAT 2026 spans a convention center plus three night venues.\n\nThe challenge was to prove a bigger thesis: that a conversational AI concierge could deliver faster, more accurate answers than traditional event apps, maps, and signage — and that attendees would actually prefer it. And to do it with one platform that adapts to any live event category, not a custom build per event.',
    solution: 'We designed and built EventPulse as six purpose-built modules working together. The AI Concierge answers natural-language questions — "Where is John Daly?" or "Where\'s the nearest restroom?" — with no menus. 3D Venue Mapping goes beyond flat maps with full-depth visualization of terrain, structures, and routes. Dynamic Routing adapts to crowd density, real-time conditions, and individual preferences, while Live Tracking follows players and performers with AI-guided directions. Moments & Highlights surfaces can\'t-miss action automatically, and Smart Notifications deliver contextual alerts without overload.\n\nThe platform proved itself across radically different event types: a 3D Las Vegas Strip experience built on Mapbox GL, interactive F1 Grand Prix circuit maps, and a full venue visualization for Super Bowl LX. In production it powered the Senior PGA Championship at The Concession, served as the official attendee layer for SEAT 2026 — 643 unique visitors, nearly 15,000 pageviews, and 87,860 personalization surfaces served — and unified Atlanta\'s 404 Day into a single intelligent citywide experience. For organizers, it doubles as the operational backbone: real-time communication, content management, and event-wide visibility, opening new engagement and revenue streams.',
    results: [
      '2016 Active users during 4-day championship event',
      '89% Query satisfaction rate',
      '4.2s Average AI response time',
      '87,860 Personalization surfaces served at SEAT 2026',
      '6 Event types from golf to citywide festivals'
    ],
    images: [
      '/ep-seat-phones.jpg',
      '/ep-vegas.webp',
      '/ep-404-phones.jpg',
      '/ep-superbowl-map.jpg'
    ],
    imageAlts: [
      'SEAT Conference attendee app screens',
      'Las Vegas event app screens with a 3D map, venue offers, and a concierge chat',
      '404 Day Atlanta festival app screens',
      "Super Bowl LX 3D venue map at Levi's Stadium"
    ],
    wideImages: ['/ep-hero-high-impact.jpg'],
    wideImageAlts: ['Event Pulse phones for arrival, venue maps, sponsors, profiles, and event ROI'],
    tags: ['AI Concierge', '3D Mapping', 'Live Events', 'Real-time Wayfinding'],
    color: 'cyan',
    videoSrc: '/ep-explainer.mp4',
    heroSrc: '/ep-explainer.mp4',
    posterSrc: '/posters/ep-explainer.jpg'
  }
];

const STILL_IMAGE = /\.(png|jpe?g|webp|gif)$/i;

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

export function caseStudyPath(id: string): string {
  return `/work/${id}/`;
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
