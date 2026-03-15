import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Solution', href: '#solution' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Tarifs', href: '#tarifs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md px-4 sm:px-6 lg:px-20">
      <div className="max-w-container mx-auto min-h-[72px] flex flex-row justify-between items-center py-4 gap-4">
        <a href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark shadow flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-base sm:text-xl font-bold text-gradient-red">Youcanwin</span>
          <span className="hidden sm:inline px-2 py-0.5 text-[10px] font-semibold leading-tight text-brand-green-dark bg-green-100 rounded-full">
            GAMES
          </span>
        </a>

        <nav className="hidden lg:flex flex-row items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:pl-4">
          <a
            href="#contact"
            className="hidden sm:inline px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Contact
          </a>
          <a
            href="#demo"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark text-white text-sm font-medium shadow hover:opacity-95"
          >
            <span className="hidden md:inline">Demander une démo</span>
            <span className="md:hidden">Démo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 aria-expanded={menuOpen}"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`w-5 h-0.5 bg-slate-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-slate-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-slate-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 pt-2 border-t border-slate-100 bg-white/98">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="border-t border-slate-100 mt-2 pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#demo"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 mx-4 mt-2 py-3 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark text-white text-sm font-medium"
              >
                Demander une démo
                <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
