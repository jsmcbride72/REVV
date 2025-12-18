import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Heart, Lightbulb, ShieldCheck, Rocket, Quote, ChevronDown, Sparkles, Workflow, Network, Activity, Brain, Palette, BarChart3, CircuitBoard, Layers, Gauge, Zap, Bot, Shield, Search, MousePointer, AlertTriangle, Link2, Eye } from 'lucide-react';
import { useState } from 'react';
import ContactForm from './ContactForm';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const getAssetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

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
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight">REVV Studio</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('story')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Story
              </button>
              <button onClick={() => scrollToSection('approach')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Approach
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('how-we-work')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                How We Work
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Impact
              </button>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsContactFormOpen(true)}
              className="md:hidden px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={getAssetUrl("/jsmcbride_racing.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <div className="flex justify-center mb-6">
              <img src={getAssetUrl("/logo.png")} alt="Revv Studio" className="h-32 lg:h-40 w-auto" />
            </div>
            <p className="text-xl lg:text-2xl font-semibold text-cyan-400 tracking-wide uppercase mb-12">
              Welcome to the Revolution
            </p>
            <p className="text-4xl lg:text-6xl font-normal text-white leading-tight mb-12 drop-shadow-2xl">
              CHANGE IS HAPPENING FAST — NOT EVERY BUSINESS WANTS THE SAME TOOLS, OR THE SAME PACE.
            </p>
            <p className="text-2xl lg:text-4xl font-light text-neutral-200 leading-tight drop-shadow-xl">
              Revv Studio helps organizations improve how work gets done today, while thoughtfully preparing for what's next.
            </p>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('story')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer animate-bounce"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      <section id="story" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={getAssetUrl("/jsmcbride_cool_studio.mp4")}
                />
              </div>

              <div>
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8">
                  Founded by practitioners who've spent years navigating the gap between business strategy and technological implementation, Revv Studio emerged from a simple observation: most organizations don't need more tools — they need work that actually works for the people doing it.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  We've seen firsthand how AI hype can distract from fundamental operational issues, and how the best technology investments are the ones that amplify human capability rather than replace it. Our approach combines strategic consulting with hands-on implementation, ensuring that every change we introduce is grounded in real workflow improvement — not theoretical frameworks.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">40%</div>
                    <p className="text-xs text-neutral-400">Average reduction in process cycle time</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">65%</div>
                    <p className="text-xs text-neutral-400">Fewer handoff errors and rework loops</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">3-6mo</div>
                    <p className="text-xs text-neutral-400">Typical timeline to measurable outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">UX + AX: A Complete Approach</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Most firms specialize in one or the other. We excel at both — and understand how they intersect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">User Experience (UX)</h3>
                  <p className="text-sm text-cyan-400 font-semibold">Human-Centered Design</p>
                </div>
              </div>

              <div className="mb-8 rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl relative" style={{ aspectRatio: '16/12' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={getAssetUrl("/phones-spin.mov")}
                />
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                Traditional UX focuses on how people interact with products, services, and systems. We design interfaces, workflows, and experiences that are intuitive, efficient, and delightful to use.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-sm">Interface design and prototyping</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-sm">User research and usability testing</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-sm">Service design and journey mapping</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-sm">Design systems and component libraries</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-violet-400/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Agentic Experience (AX)</h3>
                  <p className="text-sm text-violet-400 font-semibold">The New Paradigm</p>
                </div>
              </div>

              <div className="mb-8 rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl relative" style={{ aspectRatio: '16/12' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={getAssetUrl("/jsmcbride_n8nf.mp4")}
                />
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                AX is the emerging discipline of designing experiences where AI agents can take autonomous action on behalf of users. This fundamentally changes UX — instead of users doing tasks, agents do tasks for users. We design for human-agent collaboration, trust, and control.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-sm">Agentic system design and orchestration</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-sm">Human-agent collaboration frameworks</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-sm">Trust, transparency, and control mechanisms</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  <span className="text-sm">Agent decision boundaries and escalation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl mb-4">
                <Link2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Why Both Matter
              </h3>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Traditional UX assumes humans are in control. Agentic Experience fundamentally shifts this — AI agents take actions autonomously on behalf of users.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-950/30 to-neutral-900/50 border border-amber-800/40 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-xl mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-amber-100">UX Without AX</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Interfaces designed for human control break when agents start taking autonomous action. Buttons, forms, and clicks don't translate to agentic workflows.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-cyan-950/30 via-violet-950/30 to-cyan-950/30 border-2 border-cyan-500/30 rounded-xl p-6 lg:scale-105 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-400 text-neutral-950 text-xs font-bold px-4 py-1 rounded-full">
                    The Bridge
                  </span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-violet-400/20 rounded-xl mb-4">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Revv Studio's Approach</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We design experiences where humans and agents collaborate effectively — with clear boundaries, transparent reasoning, and meaningful control for both.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-950/30 to-neutral-900/50 border border-amber-800/40 rounded-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-xl mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-amber-100">AX Without UX</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
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
                  <h5 className="font-semibold text-cyan-400 text-sm mb-1">Human-Centered Design</h5>
                  <p className="text-xs text-neutral-400 leading-relaxed">Interfaces and experiences optimized for human understanding and interaction</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-950/20 to-transparent border border-violet-800/30 rounded-xl p-5 flex items-start space-x-3">
                <div className="w-8 h-8 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h5 className="font-semibold text-violet-400 text-sm mb-1">Agent-Ready Systems</h5>
                  <p className="text-xs text-neutral-400 leading-relaxed">Workflows designed for autonomous AI agents to take action with proper oversight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Case Studies</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Real transformations from companies who partnered with us
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 min-w-max px-4">
                <div className="group relative w-96 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="relative h-48 overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      src={getAssetUrl("/driven-vid.mov")}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-cyan-100">TRANSFORMING FLEET MANAGEMENT THROUGH HUMAN-CENTERED DESIGN</h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Reduced manual processing time by 75% through intelligent automation and custom workflow orchestration for a Fortune 500 logistics company.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">n8n</span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">Process Design</span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">Integration</span>
                    </div>
                  </div>
                </div>

                <div className="group relative w-96 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-400/20">
                  <div className="relative h-48 overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      src={getAssetUrl("/Preview.mov")}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="w-5 h-5 text-violet-400" />
                      <h3 className="text-xl font-bold text-violet-100">TRANSFORMING CONTENT WITH AI-POWERED PERSONALIZATION</h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Built an intelligent support agent that handles 60% of customer inquiries autonomously while maintaining a 95% satisfaction rate for a SaaS company.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">AI Agents</span>
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">NLP</span>
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">UX Design</span>
                    </div>
                  </div>
                </div>

                <div className="group relative w-96 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="relative h-48 overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      src={getAssetUrl("/20240207_strideGG_UNIVPROF_VID_1.mp4")}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-cyan-100">DRIVING GROWTH THROUGH MEASURABLE KPI'S AND STRATEGIC EXECUTION</h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Redesigned analytics infrastructure from ground up, cutting report generation time from hours to minutes for a healthcare analytics firm.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">Data Engineering</span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">ETL</span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="group relative w-96 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-400/20">
                  <div className="relative h-48 bg-gradient-to-br from-violet-900/40 to-cyan-900/40 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Mobile app interface"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-violet-400" />
                      <h3 className="text-xl font-bold text-violet-100">Mobile Experience Redesign</h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      Complete UX overhaul increased user engagement by 140% and reduced support tickets by 55% for a fintech mobile platform.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">UX Research</span>
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">Design</span>
                      <span className="px-3 py-1 bg-violet-400/10 border border-violet-400/30 rounded-full text-xs text-violet-400">Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none"></div>
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-500 text-sm">Scroll to explore more case studies</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Two Ways We Help</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Not every company needs AI.<br />
              Every company needs work that works better for humans.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800/50 bg-neutral-950/50 shadow-2xl mb-16 h-32 lg:h-48 max-w-5xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={getAssetUrl("/jsmcbride_WF.mp4")}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 hover:border-cyan-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                        <Workflow className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        Digital Experience & Workflow Optimization
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm ml-15">
                      For teams focused on clarity, efficiency, and better experiences
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-950/50 border border-neutral-800/50 rounded-xl p-6 mb-8">
                  <p className="text-xs font-bold text-cyan-400 mb-5 tracking-wide">IMPACT METRICS</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Network className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs text-neutral-300">Process Cycle Time</span>
                        </div>
                        <span className="text-lg font-bold text-cyan-400">-40%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs text-neutral-300">Handoff Errors</span>
                        </div>
                        <span className="text-lg font-bold text-cyan-400">-65%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Workflow Mapping</h4>
                      <p className="text-xs text-neutral-500">Identify friction & handoff breakdowns</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">UX & Service Design</h4>
                      <p className="text-xs text-neutral-500">Better customer & team experiences</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Process Design</h4>
                      <p className="text-xs text-neutral-500">Clear systems people actually follow</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-cyan-500/30 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Tool Alignment</h4>
                      <p className="text-xs text-neutral-500">Software that supports workflows</p>
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
                      <p className="text-sm text-neutral-200 leading-relaxed">
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
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-violet-400/10 rounded-xl flex items-center justify-center">
                        <CircuitBoard className="w-6 h-6 text-violet-400" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        Agentic AI & Intelligent Systems
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm ml-15">
                      For teams ready to work alongside AI agents
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-950/50 border border-neutral-800/50 rounded-xl p-6 mb-8">
                  <p className="text-xs font-bold text-violet-400 mb-5 tracking-wide">AUTONOMY BALANCE</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 text-violet-400" />
                          <span className="text-xs text-neutral-300">Agent Autonomy</span>
                        </div>
                        <span className="text-lg font-bold text-violet-400">85%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-violet-400" />
                          <span className="text-xs text-neutral-300">Human Oversight</span>
                        </div>
                        <span className="text-lg font-bold text-violet-400">100%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold text-violet-400 mb-3 tracking-wide">CORE PRINCIPLES</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-xs">Agent Autonomy</h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-tight">Clear decision boundaries</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-xs">Explainability</h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-tight">Transparent reasoning</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-xs">Collaboration</h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-tight">Effective handoffs</p>
                    </div>

                    <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-3 hover:border-violet-400/30 transition-colors">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        <h4 className="font-semibold text-neutral-200 text-xs">Trust Framework</h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-tight">Control mechanisms</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">AI Opportunity Assessment</h4>
                      <p className="text-xs text-neutral-500">Value vs. risk analysis</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Agent Workflow Design</h4>
                      <p className="text-xs text-neutral-500">Autonomy vs. oversight definition</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Human-Agent Interface</h4>
                      <p className="text-xs text-neutral-500">Monitor, guide & override systems</p>
                    </div>
                  </div>

                  <div className="bg-neutral-950/30 border border-neutral-800/30 rounded-lg p-4 flex items-center space-x-4 hover:border-violet-400/30 transition-colors">
                    <div className="w-10 h-10 bg-violet-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-200 text-sm mb-0.5">Trust & Change Management</h4>
                      <p className="text-xs text-neutral-500">Confident adoption strategies</p>
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
                      <p className="text-sm text-neutral-200 leading-relaxed">
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

      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">What Makes Revv Studio Different</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Results that speak louder than words
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-cyan-950/40 to-neutral-950/40 border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/60 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:to-transparent rounded-3xl transition-all duration-700"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2 animate-pulse">
                    3x
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full animate-[grow_2s_ease-out_forwards]" style={{ width: '0%', animation: 'grow 2s ease-out forwards' }}></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-cyan-100">Faster Implementation</h3>
                <p className="text-neutral-400 text-sm">Strategy to execution in weeks, not quarters</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-emerald-950/40 to-neutral-950/40 border border-emerald-500/30 rounded-3xl p-8 hover:border-emerald-400/60 transition-all duration-700 lg:translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:to-transparent rounded-3xl transition-all duration-700"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-2 animate-pulse">
                    94%
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '0%', animation: 'grow 2s ease-out 0.3s forwards' }}></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-emerald-100">Client Satisfaction</h3>
                <p className="text-neutral-400 text-sm">Built on honesty over hype</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-violet-950/40 to-neutral-950/40 border border-violet-500/30 rounded-3xl p-8 hover:border-violet-400/60 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/0 group-hover:from-violet-500/20 group-hover:to-transparent rounded-3xl transition-all duration-700"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent mb-2 animate-pulse">
                    100%
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '0%', animation: 'grow 2s ease-out 0.6s forwards' }}></div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-violet-100">Human-Centered</h3>
                <p className="text-neutral-400 text-sm">Technology that adapts to people</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-100">No AI hype</h3>
                  <p className="text-neutral-400 text-sm">We recommend what you need — not what's trending</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-emerald-100">Quick wins first</h3>
                  <p className="text-neutral-400 text-sm">See progress in weeks while building for the long term</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-violet-100">People first</h3>
                  <p className="text-neutral-400 text-sm">Systems that work with humans, not against them</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 border border-neutral-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-100">Change made easy</h3>
                  <p className="text-neutral-400 text-sm">Transformation that sticks, not just recommendations</p>
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
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Strategy + Implementation
                  </h3>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    We don't just advise — we execute alongside your team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-900/30 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Client Impact</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Real results from organizations who chose clarity over complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "The workflow redesign cut our approval time in half and eliminated the confusion around ownership. People actually understand the process now."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">Director of Operations</p>
                <p className="text-xs text-neutral-500">Financial Services</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "They helped us identify where AI could genuinely save time without disrupting our team's strengths. The implementation was practical, not theoretical."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">VP of Product</p>
                <p className="text-xs text-neutral-500">Healthcare Technology</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "Finally, someone who didn't try to sell us technology we didn't need. They fixed our processes first, then layered in tools strategically."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">Chief Operating Officer</p>
                <p className="text-xs text-neutral-500">Manufacturing</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-violet-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "The UX improvements transformed how our internal teams use the platform. Adoption went from 40% to 95% in two months."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">Head of Digital Transformation</p>
                <p className="text-xs text-neutral-500">Enterprise Retail</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "Their automation recommendations saved our team 15 hours per week on reporting. More importantly, the reports are now actually useful."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">Analytics Manager</p>
                <p className="text-xs text-neutral-500">SaaS Platform</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 lg:p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-violet-400 mb-4 opacity-50" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "They brought clarity to a messy situation. We now have documented processes that people follow, and handoffs that actually work."
              </p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-semibold text-sm">SVP, Customer Success</p>
                <p className="text-xs text-neutral-500">B2B Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Common Questions</h2>
            <p className="text-xl text-neutral-400">
              What to expect when working with Revv Studio
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">How do you determine if AI is right for our situation?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  We start with your actual workflows and pain points, not technology. Through discovery sessions, we identify where work breaks down, what causes frustration, and where time is wasted. Only then do we assess whether AI or automation genuinely addresses those issues better than process improvements, training, or tool optimization. If AI isn't the answer, we'll tell you.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">What does a typical engagement look like?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  Most engagements follow a phased approach: discovery and assessment, design and planning, implementation, and measurement. We typically work in 6-12 week cycles with clear milestones and regular check-ins. Unlike traditional consulting, we don't disappear after delivering recommendations — we stay involved through implementation to ensure changes stick and deliver results.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">Do you work with companies of all sizes?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  We work with organizations from 50 to 5,000+ employees. Our approach scales based on your complexity, not just your size. A 200-person company with complex workflows may need more support than a 1,000-person company with clear processes. We're a good fit if you're experiencing workflow friction, unclear ownership, or considering technology investments and want an honest assessment.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">How quickly can we expect to see results?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  Quick wins often emerge within the first 4-6 weeks — clearer documentation, streamlined handoffs, or eliminated redundancies. Deeper transformation takes 3-6 months as new workflows become habits and technology integration stabilizes. We prioritize early momentum while building toward sustainable improvement, so you see progress throughout the engagement, not just at the end.
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">What makes you different from traditional consultants?</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                  We combine strategy with hands-on execution. Instead of delivering slide decks and recommendations, we roll up our sleeves and implement alongside your team. We focus on people-first solutions rather than forcing technology adoption. And we're honest about when AI or automation isn't the answer — even if it means a smaller engagement. Our measure of success is whether your team's work actually gets easier.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="font-bold">Revv Studio</span>
            </div>
            <p className="text-neutral-500 text-sm">
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
