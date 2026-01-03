import { X, TrendingDown, Clock, Zap, Star, Users, Target, BarChart3, Trophy, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  tags: string[];
  color: 'cyan' | 'violet';
  videoSrc: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !caseStudy) return null;

  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'from-cyan-500/5',
      text: 'text-cyan-400',
      tag: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
    },
    violet: {
      border: 'border-violet-400/30',
      bg: 'from-violet-400/5',
      text: 'text-violet-400',
      tag: 'bg-violet-400/10 border-violet-400/30 text-violet-400'
    }
  };

  const colors = colorClasses[caseStudy.color];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <span className={`inline-block px-3 py-1 text-sm font-bold ${colors.text} bg-neutral-900 border ${colors.border} rounded-full mb-4`}>
              {caseStudy.category}
            </span>
            <h2 className="text-4xl lg:text-4xl font-bold mb-4">{caseStudy.title}</h2>
            <p className="text-xl lg:text-xl text-neutral-400">{caseStudy.description}</p>
          </div>

          <div className={`rounded-xl overflow-hidden border ${colors.border} mb-8`}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
              src={caseStudy.videoSrc}
            />
          </div>

          <div className="space-y-8 mb-8">
            <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-xl p-6`}>
              <h3 className={`text-2xl font-bold mb-3 ${colors.text}`}>The Challenge</h3>
              <p className="text-neutral-300 leading-relaxed text-base">{caseStudy.challenge}</p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Our Solution</h3>
              <p className="text-neutral-300 leading-relaxed text-base">{caseStudy.solution}</p>
            </div>

            {caseStudy.images.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Product Gallery</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => {
                    const isVideo = image.endsWith('.mov') || image.endsWith('.mp4');

                    return (
                      <div key={index} className={`rounded-xl overflow-hidden border ${colors.border} bg-neutral-900`}>
                        {isVideo ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto min-h-[250px] object-cover"
                            src={image}
                          />
                        ) : (
                          <img
                            src={image}
                            alt={`${caseStudy.title} - Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-xl p-8`}>
              <h3 className={`text-3xl font-bold mb-6 ${colors.text}`}>Impact Metrics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => {
                  const icons = [TrendingDown, Clock, Zap, Star, Users, Target, BarChart3, Trophy, CheckCircle2];
                  const Icon = icons[index % icons.length];

                  const metricMatch = result.match(/^([0-9.]+[%xK+★]+)/);
                  const metric = metricMatch ? metricMatch[1] : '';
                  const description = result.substring(metric.length).trim();

                  return (
                    <div key={index} className="group relative bg-neutral-950/50 border border-neutral-800/50 rounded-xl p-5 hover:border-neutral-700 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-3xl font-black ${colors.text} mb-1 leading-none`}>
                            {metric}
                          </div>
                          <p className="text-sm text-neutral-400 leading-tight">{description}</p>
                        </div>
                      </div>
                      <div className="mt-4 h-1.5 bg-neutral-800/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${caseStudy.color === 'cyan' ? 'from-cyan-500 to-cyan-400' : 'from-violet-500 to-violet-400'} rounded-full`}
                          style={{
                            width: '100%',
                            animation: `slideIn 1s ease-out ${index * 0.1}s forwards`,
                            transform: 'translateX(-100%)'
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-neutral-500 mb-3 tracking-wide">TECHNOLOGIES & APPROACHES</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className={`px-3 py-1 border rounded-full text-sm ${colors.tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
