import Check from '../assets/Check.svg';
import Slides from '../assets/Slides.svg';
import Phone from '../assets/Phone.svg';
import Calendar from '../assets/Calendar.svg';
import Network from '../assets/Network.svg';
import Gift from '../assets/Gift2.svg';
import Fans from '../assets/Fans.png';

export default function SectionDigital() {
  const features = [
    {
      title: 'Activation instantanée',
      desc: 'QR codes uniques sur chaque produit',
      icon: Phone,
    },
    {
      title: 'Collection digitale',
      desc: 'Cartes de joueurs, raretés, échanges',
      icon: Slides,
    },
    {
      title: 'Récompenses exclusives',
      desc: 'Tirages au sort, lots partenaires, expériences VIP',
      icon: Gift,
    },
    {
      title: 'Analytics avancés',
      desc: 'Dashboard temps réel, insights consommateurs',
      icon: Network,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-neutral-100 border-y border-black/10">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-40">
      <div className="w-full lg:max-w-[448px] h-[350px] sm:h-[320px] md:h-[400px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 order-2 lg:order-1">
        <img
          src={Fans}
          className="w-full h-full object-cover"
          alt="Fans"
        />
      </div>
        <div className="flex-1 max-w-[592px] w-full order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-brand-green-dark text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <img
            src={Check}
            viewBox="0 0 20 20"
            className="w-4 h-4"
            alt="QR code"
          />            
            Solution complète
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Le terrain de jeu digital de votre marque
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-7 mb-8 sm:mb-10">
            YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité
            d'engagement avec vos consommateurs.
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {features.map(({ title, desc, icon }) => (
              <li key={title} className="flex gap-3 sm:gap-4 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <CheckIcon icon={icon} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{title}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#demo"
            className="inline-flex items-center justify-center lg:justify-start gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-brand-red text-white font-medium text-sm sm:text-base shadow hover:opacity-95 w-full sm:w-auto"
          >
            Planifier une démo
                <img
              src={Calendar}
              viewBox="0 0 20 20"
              className="w-4 h-4"
              alt="QR code"
              /> 
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ icon }) {
  return (
    <img
      src={icon}
      className="w-4 h-4"
      alt="icon"
    />
  );
}

