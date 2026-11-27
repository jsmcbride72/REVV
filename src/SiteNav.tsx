import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const SECTION_LINKS = [
  { id: 'story', label: 'Story' },
  { id: 'approach', label: 'Approach' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'services', label: 'Services' },
];

interface SiteNavProps {
  onContact: () => void;
}

export default function SiteNav({ onContact }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = window.location.pathname === '/';

  const goToSection = (sectionId: string) => {
    setMenuOpen(false);
    if (!onHome) {
      window.location.assign(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const goHome = () => {
    setMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.assign('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={goHome}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Revv Studio home"
          >
            <img src="/logo3.png" alt="REVV Studio" className="h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {SECTION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a href="/blog/" className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <button
              onClick={onContact}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onContact}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-neutral-950 font-medium rounded-lg transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 rounded-lg border border-neutral-800 text-neutral-200"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-neutral-800 pt-4">
            {SECTION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="text-left px-2 py-3 text-base text-neutral-200 hover:text-cyan-400"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/blog/"
              className="px-2 py-3 text-base text-neutral-200 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
