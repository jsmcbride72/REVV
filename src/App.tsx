import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Heart, Lightbulb, ShieldCheck, Rocket, Quote, ChevronDown, Sparkles, Workflow, Network, Activity, Brain, Palette, BarChart3, CircuitBoard, Layers, Gauge, Zap } from 'lucide-react';
import { useState } from 'react';
import ContactForm from './ContactForm';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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
              <img
                src="/revv-logo-new.png"
                alt="REVV Studio"
                className="h-10"
              />
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
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('values')} className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                Values
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
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-cyan-400 tracking-wide uppercase mb-4">
              Welcome to the Revolution
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient glow-cyan">Revv Studio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed mb-12">
              Change is happening fast — not every business wants the same tools, or the same pace. Revv Studio helps organizations improve how work gets done today, while thoughtfully preparing for what's next.
            </p>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              We work with teams who want clearer workflows, better experiences, and systems that support people — whether that means smarter processes, better digital design, or carefully applied AI and automation.
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8">
              Founded by practitioners who've spent years navigating the gap between business strategy and technological implementation, Revv Studio emerged from a simple observation: most organizations don't need more tools — they need work that actually works for the people doing it.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              We've seen firsthand how AI hype can distract from fundamental operational issues, and how the best technology investments are the ones that amplify human capability rather than replace it. Our approach combines strategic consulting with hands-on implementation, ensuring that every change we introduce is grounded in real workflow improvement — not theoretical frameworks.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">40%</div>
                <p className="text-sm text-neutral-400">Average reduction in process cycle time</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">65%</div>
                <p className="text-sm text-neutral-400">Fewer handoff errors and rework loops</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">3-6mo</div>
                <p className="text-sm text-neutral-400">Typical timeline to measurable outcomes</p>
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
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <p className="text-neutral-300 mb-6 leading-relaxed">
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
                <div className="md:w-72 w-full rounded-xl overflow-hidden border border-neutral-800/50 flex-shrink-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/driven-vid.mov"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Agentic Experience (AX)</h3>
                  <p className="text-sm text-emerald-400 font-semibold">The New Paradigm</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                AX is the emerging discipline of designing experiences where AI agents can take autonomous action on behalf of users. This fundamentally changes UX — instead of users doing tasks, agents do tasks for users. We design for human-agent collaboration, trust, and control.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-sm">Agentic system design and orchestration</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-sm">Human-agent collaboration frameworks</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-sm">Trust, transparency, and control mechanisms</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-sm">Agent decision boundaries and escalation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-cyan-950/20 to-emerald-950/20 border border-neutral-800 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center">
              Why Both Matter
            </h3>
            <p className="text-neutral-300 text-center leading-relaxed mb-4">
              Traditional UX assumes humans are in control, making decisions and clicking buttons. Agentic Experience fundamentally shifts this — AI agents take actions autonomously, making decisions and executing tasks on behalf of users.
            </p>
            <p className="text-neutral-300 text-center leading-relaxed">
              Great UX without AX thinking creates interfaces that break when agents start taking action. AX without UX expertise builds powerful agents that people don't trust or understand. Revv Studio bridges both worlds — designing experiences where humans and agents collaborate effectively, with clear boundaries, transparent reasoning, and meaningful control.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Two Ways We Help</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Not every company needs AI.<br />
              Every company needs work that works better for humans.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 hover:border-cyan-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Digital Experience & Workflow Optimization
                </h3>
                <p className="text-neutral-400 mb-6 text-lg">
                  For teams focused on clarity, efficiency, and better experiences — with or without AI.
                </p>
                <p className="text-neutral-300 mb-6">
                  We help organizations simplify how work flows through their business by improving processes, tools, and user experience.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">Workflow mapping & optimization</h4>
                      <p className="text-sm text-neutral-400">Identifying friction, duplication, and handoff breakdowns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">Process design & documentation</h4>
                      <p className="text-sm text-neutral-400">Creating clear, usable systems people actually follow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">UX & service design</h4>
                      <p className="text-sm text-neutral-400">Improving how customers and internal teams interact with products and tools</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">Tool alignment</h4>
                      <p className="text-sm text-neutral-400">Making sure the software you already use supports your workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">Operational clarity</h4>
                      <p className="text-sm text-neutral-400">Reducing confusion, rework, and decision fatigue</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">OUTCOME</p>
                  <p className="text-neutral-300">
                    Work becomes easier to understand, easier to execute, and easier to scale — without forcing new technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <CircuitBoard className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Agentic AI & Intelligent Systems
                </h3>
                <p className="text-neutral-400 mb-6 text-lg">
                  For teams ready to work alongside AI agents — not just use AI tools.
                </p>
                <p className="text-neutral-300 mb-6">
                  When agentic AI is appropriate, we design systems where agents can take autonomous action while maintaining human oversight, trust, and control. This isn't about automation — it's about collaboration with intelligent agents.
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-emerald-400 mb-3">OUR APPROACH TO AGENTIC AI FOCUSES ON</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-300">Agent autonomy with clear decision boundaries — defining what agents can do independently</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-300">Transparent reasoning and explainability — people understand why agents made decisions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-300">Human-agent collaboration patterns — designing effective handoffs and escalation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-300">Trust frameworks and control mechanisms — ensuring agents work for people, not despite them</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-emerald-400 mb-3">WE HELP WITH</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-300">Agentic AI opportunity assessment — where agents add value vs. where they create risk</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-300">Agent workflow design — defining what agents handle autonomously vs. with oversight</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-300">Human-agent interface design — how people monitor, guide, and override agents</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-300">Trust building and change management — helping teams adopt agentic systems confidently</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                  <p className="text-sm font-semibold text-emerald-400 mb-2">OUTCOME</p>
                  <p className="text-neutral-300">
                    AI agents that extend human capability, take action autonomously within clear boundaries, and create trust through transparency — not anxiety through unpredictability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Flexible plans for <span className="italic">every</span> business
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Our goal is to give you the skills you need when you need them in a model that is budget friendly, easy to manage, and flexible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2">Starter 50</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$5,000</span>
                <span className="text-neutral-400"> /month</span>
              </div>
              <p className="text-cyan-400 font-semibold text-sm mb-4">50 HOURS</p>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Essential services with a cost effective plan that's great for startups and small teams.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">AI Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Visual Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UI Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                  <span className="text-neutral-600">Strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                  <span className="text-neutral-600">Bi-Weekly Check-In</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                  <span className="text-neutral-600">Weekly Check-in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                  <span className="text-neutral-600">Account Manager</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border-2 border-cyan-500/50 rounded-2xl p-8 transform lg:scale-105 shadow-2xl shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-cyan-500 text-neutral-950 text-sm font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Growth 100</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$9,000</span>
                <span className="text-neutral-400"> /month</span>
              </div>
              <p className="text-cyan-400 font-semibold text-sm mb-4">100 HOURS</p>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Scale with expanded support, deeper capabilities, and strategic guidance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">AI Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Visual Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UI Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Bi-Weekly Check-In</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Weekly Check-in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                  <span className="text-neutral-600">Account Manager</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2">Flex 160</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$14,000</span>
                <span className="text-neutral-400"> /month</span>
              </div>
              <p className="text-cyan-400 font-semibold text-sm mb-4">160 HOURS</p>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Full flexibility with on-demand services tailored to your evolving needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">AI Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Visual Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">UI Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Bi-Weekly Check-In</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Weekly Check-in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-200">Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-20 lg:py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              The principles that guide every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">People Over Process</h3>
              <p className="text-neutral-400 text-sm">
                We design systems that work for humans, not the other way around. Technology should adapt to people, not force them into rigid workflows.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Practical Over Perfect</h3>
              <p className="text-neutral-400 text-sm">
                We prioritize solutions that work today over theoretical ideals. Real progress comes from incremental improvements, not waiting for perfect conditions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Honest Assessment</h3>
              <p className="text-neutral-400 text-sm">
                We tell you what you need, not what's trendy. If AI isn't the answer, we'll say so. If your processes need fixing first, we'll start there.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Outcome Focused</h3>
              <p className="text-neutral-400 text-sm">
                We measure success by results people can feel: less frustration, clearer decisions, faster execution, and systems that actually get used.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-cyan-400 font-semibold">
              Human-Centered. Practical. Measurable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-cyan-400/20">01</div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Understand the People First</h3>
              <p className="text-neutral-400">
                We start by learning how work actually happens — who's involved, where friction lives, and what success looks like for the humans doing the work.
              </p>
            </div>

            <div className="group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-cyan-400/20">02</div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Improve Before Adding</h3>
              <p className="text-neutral-400">
                We simplify workflows and experiences first. Technology is layered in only when it genuinely improves clarity, speed, or quality.
              </p>
            </div>

            <div className="group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-cyan-400/20">03</div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Implement With Care</h3>
              <p className="text-neutral-400">
                Whether it's process changes, UX improvements, or AI-assisted workflows, we design solutions that fit your reality — not a theoretical future state.
              </p>
            </div>

            <div className="group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-cyan-400/20">04</div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Measure What Matters</h3>
              <p className="text-neutral-400 mb-4">
                We focus on outcomes people feel:
              </p>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  <span>time saved</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  <span>fewer errors and rework loops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  <span>faster handoffs and decisions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  <span>clearer ownership and accountability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  <span>better experiences for customers and teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">What Makes Revv Studio Different</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">We don't push AI where it doesn't belong</h3>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <Heart className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">We design for people, not just systems</h3>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <Gauge className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">We balance quick wins with long-term clarity</h3>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <Layers className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">We combine strategy, experience, and implementation</h3>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <Rocket className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">We make change feel manageable — not disruptive</h3>
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
              <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />
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
              <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />
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

      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-cyan-400 tracking-wide uppercase mb-4">
            Welcome to the Revolution
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            The future of work isn't about replacing humans —<br />
            it's about supporting them better.
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Revv Studio helps you choose the right path, move at the right pace, and build systems that work for the people who use them.
          </p>
          <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
            <span>Start Your Revolution</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
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
