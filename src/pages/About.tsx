import { ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import {
  ABOUT_CTA,
  ABOUT_HEADING,
  ABOUT_HELP,
  ABOUT_HELP_HEADING,
  ABOUT_HOW,
  ABOUT_HOW_HEADING,
  ABOUT_INTRO,
  HEADSHOT_ALT,
  HEADSHOT_HEIGHT,
  HEADSHOT_SRC,
  HEADSHOT_WEBP,
  HEADSHOT_WIDTH,
} from '../lib/about';
import { trackContactClick, trackStartProjectClick } from '../lib/analytics';
import { aboutPage } from '../lib/public-pages';
import { CONTACT_EMAIL } from '../lib/site';

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const page = aboutPage();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        image={page.image}
        imageAlt={page.imageAlt}
        type={page.type}
        jsonLd={page.jsonLd}
      />
      <SiteNav onContact={() => setContactOpen(true)} />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-10">
            <picture className="shrink-0">
              <source srcSet={HEADSHOT_WEBP} type="image/webp" />
              <img
                src={HEADSHOT_SRC}
                alt={HEADSHOT_ALT}
                width={HEADSHOT_WIDTH}
                height={HEADSHOT_HEIGHT}
                decoding="async"
                fetchPriority="high"
                className="block w-[200px] h-[200px] max-w-[400px] sm:w-[240px] sm:h-[240px] rounded-2xl object-cover border border-neutral-800"
              />
            </picture>
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4">About</p>
              <h1 className="text-[clamp(1.875rem,5vw,3.25rem)] font-bold leading-tight">{ABOUT_HEADING}</h1>
            </div>
          </div>

          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            {ABOUT_INTRO.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-4">{ABOUT_HOW_HEADING}</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">{ABOUT_HOW}</p>

          <h2 className="text-2xl lg:text-3xl font-bold mt-12 mb-4">{ABOUT_HELP_HEADING}</h2>
          <ul className="space-y-3 text-lg text-neutral-300 leading-relaxed list-disc pl-5 marker:text-cyan-400">
            {ABOUT_HELP.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-12">
            <button
              type="button"
              onClick={() => {
                trackStartProjectClick('about');
                setContactOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold rounded-xl transition-colors"
            >
              {ABOUT_CTA}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </article>
      </main>

      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                <span className="font-bold">Revv Studio</span>
              </div>
              <p className="text-neutral-400 text-sm">Scott McBride · Jacksonville, FL</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="/#case-studies" className="text-neutral-400 hover:text-cyan-400">Case Studies</a>
              <a href="/about/" className="text-neutral-400 hover:text-cyan-400" aria-current="page">About</a>
              <a href="/blog/" className="text-neutral-400 hover:text-cyan-400">Blog</a>
              <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => trackContactClick('footer')} className="text-neutral-400 hover:text-cyan-400">Contact</a>
            </nav>
            <p className="text-neutral-400 text-sm text-center md:text-right">
              Building better systems for humans. Today and tomorrow.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
