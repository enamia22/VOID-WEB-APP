import Arrow from '../assets/Arrow4.svg';
import Group from "../assets/Group.svg";
import Star from "../assets/Star.svg";
import Help from "../assets/Help.svg";

export default function SectionStats() {
  const stats = [
    { value: '500K+', label: 'Interactions mensuelles', icon: Arrow },
    { value: '50+', label: 'Marques partenaires', icon: Group },
    { value: '98%', label: 'Taux de satisfaction', icon: Star },
    { value: '24/7', label: 'Support technique', icon: Help },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-y border-slate-200">
      <div className="max-w-container mx-auto grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-40">
        {stats.map(({ value, label, icon }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-brand-green mb-2 sm:mb-4">
              <Icon icon={icon}className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">{value}</span>
            <span className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Icon({ icon }) {
  return <img src={icon} alt="icon" />;
}
