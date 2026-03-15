export default function SectionJourney() {
  const steps = [
    { num: 1, title: 'Achat produit', desc: 'Le client achète votre produit en magasin', green: true },
    { num: 2, title: 'Scan QR Code', desc: "Il scanne le code sur l'emballage", green: true },
    { num: 3, title: 'Déblocage carte', desc: 'Une carte digitale est débloquée', green: true },
    { num: 4, title: 'Collection', desc: 'Il complète sa collection', green: false },
    { num: 5, title: 'Récompenses', desc: 'Participe aux tirages', green: false },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Un parcours client simple et engageant
          </h2>
          <p className="text-base sm:text-lg text-slate-600 px-2">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto sm:max-w-none">
          {steps.map(({ num, title, desc, green }) => (
            <div key={num} className="w-full sm:w-52 md:w-56 flex flex-col items-center text-center relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white border-2 shadow-sm flex items-center justify-center border-green-200">
                <StepIcon green={green} />
              </div>
              <span
                className={`absolute top-0 right-0 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white ${
                  green ? 'bg-brand-green' : 'bg-brand-red'
                }`}
              >
                {num}
              </span>
              <h3 className="mt-3 sm:mt-4 font-semibold text-slate-900 text-sm sm:text-base">{title}</h3>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-600 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepIcon({ green }) {
  const color = green ? '#16A34A' : '#DC2626';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M12 6v12M6 12h12" strokeLinecap="round" />
    </svg>
  );
}
