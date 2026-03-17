import Ballon from '../assets/Ballon.png';
import Pronostics from '../assets/Pronostics.png';
import Quiz from '../assets/Quiz.png';
import Tombola from '../assets/Tombola.png';

export default function SectionCatalogue() {
  const games = [
    {
      title: 'Album Digital 2025',
      desc: 'Collection de cartes avec échanges et défis.',
      badge: 'STAR',
      badgeGreen: true,
      link: 'Découvrir',
      image: Ballon,
    },
    {
      title: 'Quiz Football',
      desc: "Questions sur l'actualité et l'histoire du foot.",
      badge: 'BIENTÔT',
      badgeGreen: false,
      link: null,
      image: Quiz,
    },
    {
      title: 'Tombola digitale',
      desc: 'Tirages au sort avec lots sponsorisés.',
      badge: null,
      badgeGreen: false,
      link: null,
      image: Tombola,
    },
    {
      title: 'Pronostics',
      desc: 'Prédictions de matchs et classements.',
      badge: null,
      badgeGreen: false,
      link: null,
      image: Pronostics,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2 px-2">
            Catalogue de jeux
          </h2>
          <p className="text-base sm:text-lg text-slate-600 px-2">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {games.map(({ title, desc, badge, badgeGreen, link, image }) => (
            <div
              key={title}
              className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-green-50 to-red-50 relative">
              <img src={image} alt={title} className="w-full h-full object-cover" />
                {badge && (
                  <span
                    className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold rounded-bl-xl ${
                      badgeGreen
                        ? 'bg-gradient-to-r from-brand-green to-brand-green-dark text-white'
                        : 'bg-slate-600 text-white'
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">{desc}</p>
                {link && (
                  <a href="#games" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:underline">
                    {link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
