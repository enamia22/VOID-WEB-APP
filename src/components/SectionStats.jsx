export default function SectionStats() {
  const stats = [
    { value: '500K+', label: 'Interactions mensuelles' },
    { value: '50+', label: 'Marques partenaires' },
    { value: '98%', label: 'Taux de satisfaction' },
    { value: '24/7', label: 'Support technique' },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-y border-slate-200">
      <div className="max-w-container mx-auto grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-brand-green mb-2 sm:mb-4">
              <ChartIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">{value}</span>
            <span className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.67">
      <path d="M4 28V16h6v12M14 28V8h6v20M24 28V12h6v16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
