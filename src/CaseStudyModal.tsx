import { X } from 'lucide-react';
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
            <span className={`inline-block px-3 py-1 text-xs font-bold ${colors.text} bg-neutral-900 border ${colors.border} rounded-full mb-4`}>
              {caseStudy.category}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{caseStudy.title}</h2>
            <p className="text-xl text-neutral-400">{caseStudy.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {caseStudy.images.map((image, index) => {
              const isVideo = image.endsWith('.mov') || image.endsWith('.mp4');

              return (
                <div key={index} className={`rounded-xl overflow-hidden border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent`}>
                  {isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-64 object-cover"
                      src={image}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-8 mb-8">
            <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-xl p-6`}>
              <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>The Challenge</h3>
              <p className="text-neutral-300 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <p className="text-neutral-300 leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-xl p-6`}>
              <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>Results</h3>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                    <p className="text-neutral-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-neutral-500 mb-3 tracking-wide">TECHNOLOGIES & APPROACHES</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className={`px-3 py-1 border rounded-full text-xs ${colors.tag}`}>
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
