export default function SectionPricing() {
  const plans = [
    {
      name: 'Starter',
      tag: 'Campagne locale',
      desc: "Idéal pour tester sur un marché",
      price: "Tarification sur mesure selon vos volumes",
      features: [
        "Jusqu'à 1 000 utilisateurs",
        "Jusqu'à 10K QR codes",
        "1 pays / région",
        "Album standard (équipe nationale)",
        "Hébergement Cloud sécurisé",
        "Backoffice simplifié",
        "Support par email",
        "1 marque",
      ],
      cta: "Nous contacter",
      outline: true,
      popular: false,
      color: "green",
    },
    {
      name: 'Scale',
      tag: 'Expansion nationale',
      desc: "Pour des campagnes d'envergure",
      price: "Tarification sur mesure selon vos volumes",
      features: [
        "Jusqu'à 50 000 utilisateurs",
        "QR codes illimités",
        "Multi-pays (jusqu'à 5)",
        "Album complet (toutes les équipes)",
        "Cloud ou On-Premise",
        "Backoffice avancé avec analytics",
        "Support prioritaire 24/7",
        "Jusqu'à 3 marques",
        "API REST disponible",
      ],
      cta: "Choisir Scale",
      outline: false,
      popular: true,
      color: "red",
    },
    {
      name: 'Enterprise',
      tag: 'Solution globale',
      desc: "Pour les groupes internationaux",
      price: "Tarification sur mesure selon vos volumes",
      features: [
        "Utilisateurs illimités",
        "QR codes illimités",
        "Déploiement mondial",
        "Albums personnalisés par région",
        "Infrastructure dédiée (On-Premise)",
        "Multi-marques illimité",
        "Développements sur-mesure",
        "Account manager dédié",
        "SLA garanti 99.9%",
        "Formation et onboarding complet",
      ],
      cta: "Nous contacter",
      outline: true,
      popular: false,
      color: "green",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-slate-50 border border-black/10">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2 px-2">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 px-2">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-5xl xl:max-w-none mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative w-full rounded-2xl border p-5 sm:p-6 md:p-8 flex flex-col ${
                plan.popular
                  ? 'border-red-200 shadow-lg z-10 bg-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(90deg, #DC2626 0%, #B01219 100%)' }}
                >
                  POPULAIRE
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.color === 'red' ? 'bg-red-50' : 'bg-green-50'
                }`}
              >
                <CheckIcon className={`w-6 h-6 ${plan.color === 'red' ? 'text-brand-red' : 'text-brand-green'}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className={`text-xs sm:text-sm font-medium ${plan.color === 'red' ? 'text-brand-green' : 'text-brand-green'}`}>
                {plan.tag}
              </p>
              <p className="text-slate-600 mt-1 sm:mt-2 mb-3 sm:mb-4 text-sm sm:text-base">{plan.desc}</p>
              <div className="py-3 sm:py-4 border-y border-slate-100">
                <p className="text-xs sm:text-sm text-slate-500">{plan.price}</p>
              </div>
              <ul className="flex-1 py-3 sm:py-4 space-y-2 sm:space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <CheckIcon
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.color === 'red' ? 'text-brand-red' : 'text-brand-green'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-4 py-2.5 sm:py-3 rounded-lg text-center font-medium text-sm sm:text-base ${
                  plan.outline
                    ? 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                    : 'bg-brand-red text-white hover:opacity-95'
                }`}
              >
                {plan.cta}
              </a>
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
