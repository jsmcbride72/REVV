import { ChevronLeft, TrendingDown, Clock, Zap, Star, Users, Target, BarChart3, Trophy, CheckCircle2 } from 'lucide-react';
import type { CaseStudy } from './lib/case-studies';

function GalleryVideo({ src, className, label }: { src: string; className: string; label: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      aria-label={label}
      className={className}
      src={src}
    />
  );
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyModal({ caseStudy }: CaseStudyModalProps) {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'from-cyan-500/8',
      text: 'text-cyan-400',
      tag: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      bar: 'from-cyan-500 to-cyan-400',
      badge: 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300',
    },
    violet: {
      border: 'border-violet-400/30',
      bg: 'from-violet-400/8',
      text: 'text-violet-400',
      tag: 'bg-violet-400/10 border-violet-400/30 text-violet-400',
      bar: 'from-violet-500 to-violet-400',
      badge: 'bg-violet-500/15 border-violet-500/40 text-violet-300',
    },
    emerald: {
      border: 'border-emerald-500/30',
      bg: 'from-emerald-500/8',
      text: 'text-emerald-400',
      tag: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      bar: 'from-emerald-500 to-emerald-400',
      badge: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
    },
  };

  const colors = colorClasses[caseStudy.color];
  const heroVideo = caseStudy.heroSrc ?? caseStudy.videoSrc;

  return (
    <main className="fixed inset-0 z-50 bg-neutral-950 overflow-y-auto">

      {/* ── Hero spotlight ── */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={caseStudy.posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
        />

        {/* Gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent" />

        {/* Back button */}
        <a
          href="/#case-studies"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 bg-neutral-950/60 backdrop-blur-md border border-white/10 rounded-xl text-white text-sm font-semibold hover:bg-neutral-950/80 hover:border-white/20 transition-all duration-200 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </a>

        {/* Title block pinned to bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 lg:px-16 pb-12">
          <span className={`inline-block max-w-full px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full mb-5 break-words ${colors.badge}`}>
            {caseStudy.category}
          </span>
          <h1 className="text-[clamp(1.75rem,6vw,3.75rem)] font-black text-white leading-tight max-w-4xl drop-shadow-2xl break-words">
            {caseStudy.title}
          </h1>
        </div>
      </div>

      {/* ── Body content ── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-16 space-y-12">

        {/* Description */}
        <p className="text-[clamp(1.125rem,2.4vw,1.5rem)] text-neutral-300 leading-relaxed font-light max-w-3xl break-words">
          {caseStudy.description}
        </p>

        {/* Challenge */}
        <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-2xl p-8`}>
          <h2 className={`text-2xl font-bold mb-4 ${colors.text}`}>The Challenge</h2>
          <div className="space-y-4">
            {caseStudy.challenge.split('\n\n').map((para, i) => (
              <p key={i} className="text-neutral-300 leading-relaxed text-base">{para}</p>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Solution</h2>
          <div className="space-y-4">
            {caseStudy.solution.split('\n\n').map((para, i) => (
              <p key={i} className="text-neutral-300 leading-relaxed text-base">{para}</p>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        {caseStudy.lessons && caseStudy.lessons.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Lessons Learned</h2>
            <div className="space-y-4">
              {caseStudy.lessons.map((lesson, index) => (
                <div key={index} className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-2xl p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border ${colors.border} flex items-center justify-center`}>
                      <span className={`text-sm font-black ${colors.text}`}>{index + 1}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 ${colors.text}`}>{lesson.title}</h3>
                      <p className="text-neutral-300 leading-relaxed text-base">{lesson.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {(caseStudy.images.length > 0 || (caseStudy.wideImages && caseStudy.wideImages.length > 0)) && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Product Gallery</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {(caseStudy.wideImages ?? []).map((image, index) => {
                const isVideo = image.endsWith('.mov') || image.endsWith('.mp4');
                return (
                  <div key={`wide-${index}`} className={`lg:col-span-2 rounded-2xl overflow-hidden border ${colors.border} bg-neutral-900`}>
                    {isVideo ? (
                      <GalleryVideo
                        src={image}
                        label={caseStudy.title}
                        className="w-full h-auto min-h-[320px] object-cover"
                      />
                    ) : (
                      <img
                        src={image}
                        alt={caseStudy.wideImageAlts?.[index] || `${caseStudy.title} — wide ${index + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
              {caseStudy.images.map((image, index) => {
                const isVideo = image.endsWith('.mov') || image.endsWith('.mp4');
                return (
                  <div key={index} className={`h-full rounded-2xl overflow-hidden border ${colors.border} bg-neutral-900`}>
                    {isVideo ? (
                      <GalleryVideo
                        src={image}
                        label={caseStudy.title}
                        className="w-full h-auto min-h-[260px] object-cover"
                      />
                    ) : (
                      <img
                        src={image}
                        alt={caseStudy.imageAlts?.[index] || `${caseStudy.title} — ${index + 1}`}
                        className={image.endsWith('ep-superbowl-map.jpg')
                          ? 'block h-full w-full object-cover'
                          : image.endsWith('.jpg') || image.endsWith('.jpeg')
                            ? 'block w-full h-auto object-contain'
                            : 'w-full h-[320px] object-cover object-center'}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Impact metrics */}
        <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-2xl p-8`}>
          <h2 className={`text-3xl font-bold mb-8 ${colors.text}`}>Impact Metrics</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => {
              const icons = [TrendingDown, Clock, Zap, Star, Users, Target, BarChart3, Trophy, CheckCircle2];
              const Icon = icons[index % icons.length];
              const metricMatch = result.match(/^(\$?\d[\d.,]*[BMK]?[%x+★s]*)/);
              const metric = metricMatch ? metricMatch[1] : '';
              const description = result.substring(metric.length).trim();

              return (
                <div key={index} className="group bg-neutral-950/50 border border-neutral-800/50 rounded-xl p-5 hover:border-neutral-700 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-3xl font-black ${colors.text} mb-1 leading-none`}>{metric}</div>
                      <p className="text-sm text-neutral-400 leading-tight">{description}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 bg-neutral-800/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
                      style={{ width: '100%', animation: `slideIn 1s ease-out ${index * 0.1}s forwards`, transform: 'translateX(-100%)' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="pb-8">
          <h2 className="text-xs font-bold text-neutral-500 mb-4 tracking-widest uppercase">Technologies & Approaches</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <span key={index} className={`px-3 py-1.5 border rounded-full text-sm ${colors.tag}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Related" className="flex flex-wrap gap-x-6 gap-y-2 text-sm pb-4">
          <a href="/" className="text-cyan-400 hover:text-cyan-300">Revv Studio</a>
          <a href="/blog/" className="text-cyan-400 hover:text-cyan-300">Blog</a>
        </nav>
      </div>
    </main>
  );
}
