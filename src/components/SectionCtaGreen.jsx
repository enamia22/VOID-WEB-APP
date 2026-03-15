export default function SectionCtaGreen() {
  const cards = [
    {
      title: 'Engagement immédiat',
      desc: 'Chaque produit devient une opportunité de jeu',
      icon: '⚡',
    },
    {
      title: 'Fidélisation naturelle',
      desc: 'Les clients reviennent pour compléter leur collection',
      icon: '🔄',
    },
    {
      title: 'Viralité organique',
      desc: 'Les fans partagent et échangent entre eux',
      icon: '📢',
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
      style={{ background: 'linear-gradient(90deg, #16A34A 0%, #0B6B3A 100%)' }}
    >
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="text-base sm:text-lg text-green-50 max-w-[686px] mx-auto mb-8 sm:mb-10 px-2">
          YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {cards.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="w-full rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4">
                {icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
              <p className="text-green-50 text-sm sm:text-base leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
