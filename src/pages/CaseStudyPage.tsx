import { useState } from 'react';
import CaseStudyModal from '../CaseStudyModal';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import SiteNav from '../SiteNav';
import { getCaseStudy } from '../lib/case-studies';
import { pageForCaseStudy } from '../lib/public-pages';

interface CaseStudyPageProps {
  id: string;
}

export default function CaseStudyPage({ id }: CaseStudyPageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const study = getCaseStudy(id);

  if (!study) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Seo
          title="Case study not found | Revv Studio"
          description="That case study is not on this site."
          path={`/work/${id}/`}
          robots="noindex"
        />
        <SiteNav onContact={() => setContactOpen(true)} />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4">Case study not found</h1>
          <a href="/#case-studies" className="inline-flex text-cyan-400 hover:text-cyan-300">
            Back to case studies
          </a>
        </main>
        <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    );
  }

  const page = pageForCaseStudy(study);

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
      <CaseStudyModal caseStudy={study} />
    </div>
  );
}
