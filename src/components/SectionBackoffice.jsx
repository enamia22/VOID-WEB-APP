export default function SectionBackoffice() {
  const cards = [
    { title: 'Générateur QR Codes', desc: 'Créez et téléchargez vos QR codes uniques en masse' },
    { title: 'CRM Participants', desc: 'Collectez et gérez vos participants avec segmentation avancée' },
    { title: 'Configuration jeux', desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels' },
    { title: 'Analytics temps réel', desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI' },
    { title: 'Gestion des lots', desc: 'Définissez vos récompenses et gérez les tirages au sort' },
    { title: 'Notifications', desc: 'Envoyez des push, emails et SMS à vos participants' },
    { title: 'Export données', desc: 'Téléchargez vos données en CSV, Excel ou via API' },
    { title: 'Multi-campagnes', desc: 'Gérez plusieurs campagnes simultanément' },
  ];
  const features = [
    { label: 'Utilisateurs', sub: 'De 1K à illimité' },
    { label: 'QR Codes', sub: 'Volume adapté' },
    { label: 'Couverture', sub: 'Local à mondial' },
    { label: 'Albums', sub: 'Standard ou custom' },
    { label: 'Infrastructure', sub: 'Cloud ou On-Premise' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-slate-50 border border-black/10">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-green-100 text-brand-green-dark text-xs sm:text-sm font-medium">
            <CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Backoffice tout-en-un
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center px-2">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-center max-w-[628px] px-2">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {cards.map(({ title, desc }) => (
            <div
              key={title}
              className="p-4 sm:p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center mb-3 sm:mb-4">
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">{title}</h3>
              <p className="text-xs sm:text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-brand-green text-white font-medium text-sm sm:text-base w-full sm:w-auto"
          >
            Accéder au backoffice
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-200">
          {features.map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center mb-2 sm:mb-3">
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
              </div>
              <span className="font-semibold text-slate-900 text-sm sm:text-base">{label}</span>
              <span className="text-[10px] sm:text-xs text-slate-600">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
