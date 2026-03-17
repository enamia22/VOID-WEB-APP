import Email from '../assets/Mail.svg';
import Calendar from '../assets/Calendar2.svg';

export default function SectionCtaRed() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ background: 'linear-gradient(90deg, #DC2626 0%, #B01219 100%)' }}
    >
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-base sm:text-lg text-red-100 mb-6 sm:mb-8 px-2">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-brand-red-dark font-medium text-sm sm:text-base shadow-lg hover:bg-red-50 w-full sm:w-auto"
          >
            <Icon icon={Calendar} />
            Planifier une démo gratuite
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 border-2 border-white/30 text-white font-medium text-sm sm:text-base backdrop-blur-sm hover:bg-white/20 w-full sm:w-auto"
          >
          <Icon icon={Email} />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

function Icon({ icon }) {
  return <img src={icon} alt="icon" className="w-5 h-5"/>;
}
