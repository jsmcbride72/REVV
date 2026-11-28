import { Users, Target, Heart, ShieldCheck, Rocket, Quote, ChevronDown, Sparkles, Workflow, Activity, Brain, Palette, BarChart3, CircuitBoard, Layers, Gauge, Zap, Bot, Search, MousePointer, AlertTriangle, Link2, Eye, ArrowRight, MoveDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import MediaVideo from './MediaVideo';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import Seo from './Seo';
import SiteNav from './SiteNav';
import { caseStudies, caseStudyPath, getCaseStudy, posterForVideo } from './lib/case-studies';
import { homePage } from './lib/public-pages';
import { CONTACT_EMAIL, HERO_SUMMARY, HERO_TITLE } from './lib/site';


const home = homePage();

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const HERO_SLIDE_COUNT = 5;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const HERO_VIDEOS = [
    '/SPOTLIGHT2.mp4',
    '/newsring-devices.mp4',
    '/driven-fleet-hero.mp4',
    '/stridegg-devices.mp4',
    '/concession-devices.mp4',
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAnimKey(k => k + 1);
    if (timerRef.current) clearInterval(timerRef.current);
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDE_COUNT);
      setAnimKey(k => k + 1);
    }, 10000);
  };

  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const timer = window.setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 64 });
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDE_COUNT);
      setAnimKey(k => k + 1);
    }, 10000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo
        title={home.title}
        description={home.description}
        path={home.path}
        image={home.image}
        imageAlt={home.imageAlt}
        type={home.type}
        jsonLd={home.jsonLd}
      />
      <SiteNav onContact={() => setIsContactFormOpen(true)} />

      <main>
      <section className="w-full max-w-full overflow-hidden" style={{ display: 'grid', minHeight: '100vh', position: 'relative' }}>
        {/* Video — same grid cell as content, stretches to match content height */}
        <MediaVideo
          key={currentSlide}
          priority
          src={HERO_VIDEOS[currentSlide]}
          poster={posterForVideo(HERO_VIDEOS[currentSlide])}
          style={{ gridArea: '1/1', width: '100%', height: '100%', minWidth: 0, maxWidth: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Dark gradient overlay — only under the text for readability */}
        <div style={{ gridArea: '1/1', zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.6) 100%)' }} />
        {/* Content shell — determines grid cell height */}
        <div className="min-w-0 w-full max-w-full overflow-hidden" style={{ gridArea: '1/1', zIndex: 2, display: 'flex', flexDirection: 'column' }}>

        {/* Content track — slides with background */}
        <div
          className="relative flex flex-1 transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ width: `${HERO_SLIDE_COUNT * 100}%`, transform: `translateX(-${(currentSlide / HERO_SLIDE_COUNT) * 100}%)`, zIndex: 2 }}
        >
          {/* Slide 1 content */}
          <div className="flex min-w-0 items-center justify-center pt-28 sm:pt-32 lg:pt-40 pb-24 px-5 sm:px-6 lg:px-8" style={{ width: `${100 / HERO_SLIDE_COUNT}%` }}>
            <div className="text-center w-full min-w-0 px-2" key={`s0-${animKey}`}>
              <p className="text-base sm:text-lg lg:text-2xl font-semibold text-cyan-400 tracking-wide uppercase mb-6 sm:mb-8 opacity-0 animate-[slideInBlur_0.8s_ease-out_1.5s_forwards] break-words">
                Welcome to the Revolution
              </p>
              <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] font-bold text-white leading-tight mb-6 sm:mb-8 drop-shadow-2xl opacity-0 animate-[slideInBlur_0.9s_ease-out_1.7s_forwards] max-w-full text-balance break-words">
                {HERO_TITLE}
              </h1>
              <p className="text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-neutral-200 leading-tight drop-shadow-xl opacity-0 animate-[slideInBlur_0.8s_ease-out_1.9s_forwards] max-w-full text-balance break-words">
                {HERO_SUMMARY}
              </p>
              <div className="mt-8 opacity-0 animate-[slideInBlur_0.8s_ease-out_2.1s_forwards]">
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(true)}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-xl shadow-cyan-500/30"
                >
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 content */}
          <div className="flex min-w-0 items-center pt-28 sm:pt-32 lg:pt-40 pb-24 pl-5 sm:pl-12 lg:pl-28 pr-5 sm:pr-6 lg:pr-8" style={{ width: `${100 / HERO_SLIDE_COUNT}%` }}>
            <div className="text-left max-w-2xl w-full min-w-0" key={`s1-${animKey}`}>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-violet-400 tracking-widest uppercase mb-3 sm:mb-4 opacity-0 animate-[slideInLeft_0.7s_ease-out_1.5s_forwards]">
                NewsRing — Case Study
              </p>
              <h2 className="text-[clamp(1.25rem,2.2vw+0.7rem,2.25rem)] font-bold text-white leading-snug mb-6 sm:mb-8 drop-shadow-2xl opacity-0 animate-[slideInLeft_0.9s_ease-out_1.7s_forwards] max-w-full break-words">
                {getCaseStudy('newsring')?.title}
              </h2>
              <div className="opacity-0 animate-[slideInLeft_0.7s_ease-out_1.9s_forwards]">
                <a
                  href={caseStudyPath('newsring')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-xl shadow-violet-500/30"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 content */}
          <div className="flex min-w-0 items-center pt-28 sm:pt-32 lg:pt-40 pb-24 pl-5 sm:pl-12 lg:pl-28 pr-5 sm:pr-6 lg:pr-8" style={{ width: `${100 / HERO_SLIDE_COUNT}%` }}>
            <div className="text-left max-w-2xl w-full min-w-0" key={`s2-${animKey}`}>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-cyan-400 tracking-widest uppercase mb-3 sm:mb-4 opacity-0 animate-[slideInLeft_0.7s_ease-out_1.5s_forwards]">
                Driven — Case Study
              </p>
              <h2 className="text-[clamp(1.25rem,2.2vw+0.7rem,2.25rem)] font-bold text-white leading-snug mb-6 sm:mb-8 drop-shadow-2xl opacity-0 animate-[slideInLeft_0.9s_ease-out_1.7s_forwards] max-w-full break-words">
                {getCaseStudy('fuel-card-platform')?.title}
              </h2>
              <div className="opacity-0 animate-[slideInLeft_0.7s_ease-out_1.9s_forwards]">
                <a
                  href={caseStudyPath('fuel-card-platform')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-xl shadow-cyan-500/30"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Slide 4 content */}
          <div className="flex min-w-0 items-center pt-28 sm:pt-32 lg:pt-40 pb-24 pl-5 sm:pl-12 lg:pl-28 pr-5 sm:pr-6 lg:pr-8" style={{ width: `${100 / HERO_SLIDE_COUNT}%` }}>
            <div className="text-left max-w-2xl w-full min-w-0" key={`s3-${animKey}`}>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-cyan-400 tracking-widest uppercase mb-3 sm:mb-4 opacity-0 animate-[slideInLeft_0.7s_ease-out_1.5s_forwards]">
                StrideGG — Case Study
              </p>
              <h2 className="text-[clamp(1.25rem,2.2vw+0.7rem,2.25rem)] font-bold text-white leading-snug mb-6 sm:mb-8 drop-shadow-2xl opacity-0 animate-[slideInLeft_0.9s_ease-out_1.7s_forwards] max-w-full break-words">
                {getCaseStudy('gaming-platform')?.title}
              </h2>
              <div className="opacity-0 animate-[slideInLeft_0.7s_ease-out_1.9s_forwards]">
                <a
                  href={caseStudyPath('gaming-platform')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-xl shadow-cyan-500/30"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Slide 5 content */}
          <div className="flex min-w-0 items-center pt-28 sm:pt-32 lg:pt-40 pb-24 pl-5 sm:pl-12 lg:pl-28 pr-5 sm:pr-6 lg:pr-8" style={{ width: `${100 / HERO_SLIDE_COUNT}%` }}>
            <div className="text-left max-w-2xl w-full min-w-0" key={`s4-${animKey}`}>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-emerald-400 tracking-widest uppercase mb-3 sm:mb-4 opacity-0 animate-[slideInLeft_0.7s_ease-out_1.5s_forwards]">
                Senior PGA — Case Study
              </p>
              <h2 className="text-[clamp(1.25rem,2.2vw+0.7rem,2.25rem)] font-bold text-white leading-snug mb-6 sm:mb-8 drop-shadow-2xl opacity-0 animate-[slideInLeft_0.9s_ease-out_1.7s_forwards] max-w-full break-words">
                {getCaseStudy('senior-pga-concession')?.title}
              </h2>
              <div className="opacity-0 animate-[slideInLeft_0.7s_ease-out_1.9s_forwards]">
                <a
                  href={caseStudyPath('senior-pga-concession')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-xl shadow-emerald-500/30"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav: prev arrow + dots + next arrow */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3" style={{ zIndex: 3 }}>
          <button
            onClick={() => goToSlide((currentSlide - 1 + HERO_SLIDE_COUNT) % HERO_SLIDE_COUNT)}
            className="p-2 rounded-full bg-neutral-900/60 border border-neutral-700/50 text-neutral-300 hover:text-white hover:bg-neutral-800/80 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: HERO_SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="group inline-flex h-6 w-6 items-center justify-center"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentSlide ? 'true' : undefined}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? `${i === 1 ? 'bg-violet-400' : i === 4 ? 'bg-emerald-400' : 'bg-cyan-400'} w-6 h-2`
                    : 'bg-neutral-600 group-hover:bg-neutral-400 w-2 h-2'
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => goToSlide((currentSlide + 1) % HERO_SLIDE_COUNT)}
            className="p-2 rounded-full bg-neutral-900/60 border border-neutral-700/50 text-neutral-300 hover:text-white hover:bg-neutral-800/80 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('story')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer group"
          aria-label="Scroll to explore"
        >
          <div className="relative">
            <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2 group-hover:border-cyan-300 transition-colors">
              <div className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce group-hover:bg-cyan-300"></div>
            </div>
            <MoveDown className="w-5 h-5 absolute -bottom-6 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '150ms' }} />
          </div>
        </button>
        </div>{/* end content shell */}
      </section>

      <section id="story" className="py-12 lg:py-20 bg-gradient-to-b from-neutral-950 to-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Story</h2>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl aspect-square">
                <MediaVideo
                  src="/jsmcbride_cool_studio.mp4"
                  poster={posterForVideo('/jsmcbride_cool_studio.mp4')}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-6">
                  Founded by practitioners who've spent years navigating the gap between business strategy and technological implementation, Revv Studio emerged from a simple observation: most organizations don't need more tools — they need work that actually works for the people doing it.
                </p>
                <p className="text-base lg:text-xl text-neutral-400 leading-relaxed mb-6">
                  We've seen firsthand how AI hype can distract from fundamental operational issues, and how the best technology investments are the ones that amplify human capability rather than replace it. Our approach combines strategic consulting with hands-on implementation, ensuring that every change we introduce is grounded in real workflow improvement — not theoretical frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-12 lg:py-20 bg-gradient-to-b from-neutral-950 to-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">UX + AX: A Complete Approach</h2>
            <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
              Most firms specialize in one or the other. We excel at both — and understand how they intersect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold">User Experience (UX)</h3>
                  <p className="text-xs lg:text-sm text-cyan-400 font-semibold">Human-Centered Design</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl relative" style={{ aspectRatio: '16/12' }}>
                <MediaVideo
                  src="/jsmcbride_n8nf.mp4"
                  poster={posterForVideo('/jsmcbride_n8nf.mp4')}
                  className="w-full h-full object-cover scale-150"
                />
              </div>

              <p className="text-neutral-300 leading-relaxed mb-4 text-base lg:text-lg">
                Traditional UX focuses on how people interact with products, services, and systems. We design interfaces, workflows, and experiences that are intuitive, efficient, and delightful to use.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-base">Interface design and prototyping</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-base">User research and usability testing</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-base">Service design and journey mapping</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-base">Design systems and component libraries</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-violet-400/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold">Agentic Experience (AX)</h3>
                  <p className="text-xs lg:text-sm text-violet-400 font-semibold">The New Paradigm</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl relative" style={{ aspectRatio: '16/12' }}>
                <MediaVideo
                  src="/jsmcbride_WF.mp4"
                  poster={posterForVideo('/jsmcbride_WF.mp4')}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-neutral-300 leading-relaxed mb-4 text-base lg:text-lg">
                AX is the emerging discipline of designing experiences where AI agents can take autonomous action on behalf of users. This fundamentally changes UX — instead of users doing tasks, agents do tasks for users. We design for human-agent collaboration, trust, and control.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-base">Agentic system design and orchestration</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-base">Human-agent collaboration frameworks</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-base">Trust, transparency, and control mechanisms</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-base">Agent decision boundaries and escalation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl mb-3">
                <Link2 className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Why Both Matter
              </h3>
              <p className="text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
                Traditional UX assumes humans are in control. Agentic Experience fundamentally shifts this — AI agents take actions autonomously on behalf of users.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-amber-950/30 to-neutral-900/50 border border-amber-800/40 rounded-xl p-5">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-500/10 rounded-xl mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 text-amber-100">UX Without AX</h4>
                <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                  Interfaces designed for human control break when agents start taking autonomous action. Buttons, forms, and clicks don't translate to agentic workflows.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-cyan-950/30 via-violet-950/30 to-cyan-950/30 border-2 border-cyan-500/30 rounded-xl p-5 lg:scale-105 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-400 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full">
                    The Bridge
                  </span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-violet-400/20 rounded-xl mb-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Revv Studio's Approach</h4>
                <p className="text-neutral-300 text-sm lg:text-base leading-relaxed">
                  We design experiences where humans and agents collaborate effectively — with clear boundaries, transparent reasoning, and meaningful control for both.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-950/30 to-neutral-900/50 border border-amber-800/40 rounded-xl p-5">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-500/10 rounded-xl mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 text-amber-100">AX Without UX</h4>
                <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                  Powerful agents that people don't trust or understand. Without UX expertise, autonomous systems lack the transparency and control users need to feel confident.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-800/30 rounded-xl p-5 flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MousePointer className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-cyan-400 text-base mb-1">Human-Centered Design</h5>
                  <p className="text-sm text-neutral-400 leading-relaxed">Interfaces and experiences optimized for human understanding and interaction</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-950/20 to-transparent border border-violet-800/30 rounded-xl p-5 flex items-start space-x-3">
                <div className="w-8 h-8 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-violet-400 text-base mb-1">Agent-Ready Systems</h5>
                  <p className="text-sm text-neutral-400 leading-relaxed">Workflows designed for autonomous AI agents to take action with proper oversight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-12 lg:py-20 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
              Real transformations from companies who partnered with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {caseStudies.map((study, index) => {
                  const icons = [Zap, Bot, BarChart3, Sparkles, Brain, Activity];
                  const Icon = icons[index] ?? Sparkles;
                  const isVideo = study.videoSrc.endsWith('.mov') || study.videoSrc.endsWith('.mp4');

                  return (
                    <a
                      key={study.id}
                      href={caseStudyPath(study.id)}
                      className={`group relative min-w-0 w-full h-full bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-${study.color}-${study.color === 'cyan' ? '500' : '400'}/50 transition-all duration-500 hover:shadow-2xl hover:shadow-${study.color}-${study.color === 'cyan' ? '500' : '400'}/20 flex flex-col`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        {isVideo ? (
                          <MediaVideo
                            src={study.videoSrc}
                            poster={posterForVideo(study.videoSrc, study.posterSrc)}
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        ) : (
                          <>
                            <img
                              src={study.videoSrc}
                              alt={study.title}
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                          </>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className={`w-5 h-5 text-${study.color}-400`} />
                          <h3 className={`min-w-0 text-lg sm:text-xl font-bold text-${study.color}-100 uppercase break-words`}>{study.title}</h3>
                        </div>
                        <p className="text-neutral-400 text-base leading-relaxed mb-4">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 bg-${study.color}-${study.color === 'cyan' ? '500' : '400'}/10 border border-${study.color}-${study.color === 'cyan' ? '500' : '400'}/30 rounded-full text-xs text-${study.color}-400`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-${study.color}-${study.color === 'cyan' ? '500' : '400'}/10 hover:bg-${study.color}-${study.color === 'cyan' ? '500' : '400'}/20 border border-${study.color}-${study.color === 'cyan' ? '500' : '400'}/30 rounded-lg text-${study.color}-400 font-semibold text-sm transition-all duration-300 mt-auto`}
                        >
                          View Full Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  );
                })}
          </div>
        </div>
      </section>

      <section id="services" className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Two Ways We Help</h2>
            <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
              Not every company needs AI.<br />
              Every company needs work that works better for humans.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl mb-16 h-32 lg:h-48 max-w-5xl mx-auto">
            <MediaVideo
              src="/jsmcbride_WF.mp4"
              poster={posterForVideo('/jsmcbride_WF.mp4')}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 hover:border-cyan-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="min-w-0 flex-1 text-xl lg:text-3xl font-bold text-balance">
                        Digital Experience & Workflow Optimization
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm lg:text-base ml-13">
                      For teams focused on clarity, efficiency, and better experiences
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Workflow Mapping</h4>
                      <p className="text-sm text-neutral-400">Identify friction & handoff breakdowns</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">UX & Service Design</h4>
                      <p className="text-sm text-neutral-400">Better customer & team experiences</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Process Design</h4>
                      <p className="text-sm text-neutral-400">Clear systems people actually follow</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Tool Alignment</h4>
                      <p className="text-sm text-neutral-400">Software that supports workflows</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-800/30 rounded-xl p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-400 mb-2 tracking-wide">OUTCOME</p>
                      <p className="text-base text-neutral-200 leading-relaxed">
                        Work becomes easier to understand, execute, and scale — without forcing new technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 hover:border-violet-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-10 h-10 bg-violet-400/10 rounded-xl flex items-center justify-center">
                        <CircuitBoard className="w-5 h-5 text-violet-400" />
                      </div>
                      <h3 className="min-w-0 flex-1 text-xl lg:text-3xl font-bold text-balance">
                        Agentic AI & Intelligent Systems
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm lg:text-base ml-13">
                      For teams ready to work alongside AI agents
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold text-violet-400 mb-3 tracking-wide">CORE PRINCIPLES</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-sm">Agent Autonomy</h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-tight">Clear decision boundaries</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-sm">Explainability</h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-tight">Transparent reasoning</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-sm">Collaboration</h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-tight">Effective handoffs</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-sm">Trust Framework</h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-tight">Control mechanisms</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">AI Opportunity Assessment</h4>
                      <p className="text-sm text-neutral-400">Value vs. risk analysis</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Agent Workflow Design</h4>
                      <p className="text-sm text-neutral-400">Autonomy vs. oversight definition</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Human-Agent Interface</h4>
                      <p className="text-sm text-neutral-400">Monitor, guide & override systems</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-base mb-0.5">Trust & Change Management</h4>
                      <p className="text-sm text-neutral-400">Confident adoption strategies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-violet-950/20 to-transparent border border-violet-800/30 rounded-xl p-5">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-violet-400 mb-2 tracking-wide">OUTCOME</p>
                      <p className="text-base text-neutral-200 leading-relaxed">
                        AI agents that extend human capability, take action autonomously within clear boundaries, and create trust through transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold">What Makes Revv Studio Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-100">No AI hype</h3>
                  <p className="text-neutral-400 text-base">We recommend what you need — not what's trending</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-emerald-100">Quick wins first</h3>
                  <p className="text-neutral-400 text-base">See progress in weeks while building for the long term</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-violet-100">People first</h3>
                  <p className="text-neutral-400 text-base">Systems that work with humans, not against them</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-100">Change made easy</h3>
                  <p className="text-neutral-400 text-base">Transformation that sticks, not just recommendations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-cyan-950/30 via-violet-950/30 to-cyan-950/30 border-2 border-cyan-500/30 rounded-2xl p-8 lg:p-10 shadow-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-violet-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-violet-400/20 rounded-2xl flex-shrink-0 group-hover:rotate-12 transition-transform duration-500">
                  <Layers className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Strategy + Implementation
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-xl">
                    We don't just advise — we execute alongside your team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-12 lg:py-20 bg-gradient-to-b from-neutral-900/30 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Client Impact</h2>
            <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
              Real results from organizations who chose clarity over complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "The workflow redesign cut our approval time in half and eliminated the confusion around ownership. People actually understand the process now."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">Director of Operations</p>
                <p className="text-sm text-neutral-400">Financial Services</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "They helped us identify where AI could genuinely save time without disrupting our team's strengths. The implementation was practical, not theoretical."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">VP of Product</p>
                <p className="text-sm text-neutral-400">Healthcare Technology</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "Finally, someone who didn't try to sell us technology we didn't need. They fixed our processes first, then layered in tools strategically."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">Chief Operating Officer</p>
                <p className="text-sm text-neutral-400">Manufacturing</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-violet-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "The UX improvements transformed how our internal teams use the platform. Adoption went from 40% to 95% in two months."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">Head of Digital Transformation</p>
                <p className="text-sm text-neutral-400">Enterprise Retail</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "Their automation recommendations saved our team 15 hours per week on reporting. More importantly, the reports are now actually useful."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">Analytics Manager</p>
                <p className="text-sm text-neutral-400">SaaS Platform</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-violet-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                "They brought clarity to a messy situation. We now have documented processes that people follow, and handoffs that actually work."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-base">SVP, Customer Success</p>
                <p className="text-sm text-neutral-400">B2B Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg lg:text-xl text-neutral-400">
              What to expect when working with Revv Studio
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <h3 className="text-lg lg:text-xl font-semibold">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="min-w-0 text-balance">How do you determine if AI is right for our situation?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              </h3>
              {openFaq === 0 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
                  We start with your actual workflows and pain points, not technology. Through discovery sessions, we identify where work breaks down, what causes frustration, and where time is wasted. Only then do we assess whether AI or automation genuinely addresses those issues better than process improvements, training, or tool optimization. If AI isn't the answer, we'll tell you.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <h3 className="text-lg lg:text-xl font-semibold">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="min-w-0 text-balance">What does a typical engagement look like?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              </h3>
              {openFaq === 1 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
                  Most engagements follow a phased approach: discovery and assessment, design and planning, implementation, and measurement. We typically work in 6-12 week cycles with clear milestones and regular check-ins. Unlike traditional consulting, we don't disappear after delivering recommendations — we stay involved through implementation to ensure changes stick and deliver results.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <h3 className="text-lg lg:text-xl font-semibold">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="min-w-0 text-balance">Do you work with companies of all sizes?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              </h3>
              {openFaq === 2 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
                  We work with organizations from 50 to 5,000+ employees. Our approach scales based on your complexity, not just your size. A 200-person company with complex workflows may need more support than a 1,000-person company with clear processes. We're a good fit if you're experiencing workflow friction, unclear ownership, or considering technology investments and want an honest assessment.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <h3 className="text-lg lg:text-xl font-semibold">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="min-w-0 text-balance">How quickly can we expect to see results?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              </h3>
              {openFaq === 3 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
                  Quick wins often emerge within the first 4-6 weeks — clearer documentation, streamlined handoffs, or eliminated redundancies. Deeper transformation takes 3-6 months as new workflows become habits and technology integration stabilizes. We prioritize early momentum while building toward sustainable improvement, so you see progress throughout the engagement, not just at the end.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <h3 className="text-lg lg:text-xl font-semibold">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="min-w-0 text-balance">What makes you different from traditional consultants?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              </h3>
              {openFaq === 4 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-base">
                  We combine strategy with hands-on execution. Instead of delivering slide decks and recommendations, we roll up our sleeves and implement alongside your team. We focus on people-first solutions rather than forcing technology adoption. And we're honest about when AI or automation isn't the answer — even if it means a smaller engagement. Our measure of success is whether your team's work actually gets easier.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="font-bold">Revv Studio</span>
              </div>
              <p className="text-neutral-400 text-sm">Scott McBride · Jacksonville, FL</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="/#case-studies" className="text-neutral-400 hover:text-cyan-400">Case Studies</a>
              <a href="/blog/" className="text-neutral-400 hover:text-cyan-400">Blog</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-neutral-400 hover:text-cyan-400">Contact</a>
            </nav>
            <p className="text-neutral-400 text-sm text-center md:text-right">
              Building better systems for humans. Today and tomorrow.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}

export default App;
