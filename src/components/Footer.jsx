import VectorLogo from "../assets/Vector.svg";
import Insta from "../assets/insta.svg";
import LinkedIn from "../assets/linked.svg";
import X from "../assets/X.svg";
import Facebook from "../assets/facebook.svg";
import Shield from "../assets/shield.svg";

export default function Footer() {
  const quickLinks = ["Nos offres", "Nos jeux", "Album 2025", "À propos"];
  const contactLinks = [
    "games@agency.africa",
    "Mentions légales",
    "Protection des données (CNDP)",
    "Conditions d’utilisation",
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-8 sm:mb-12">
          <div className="max-w-[608px] w-full">
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center">
                <img src={VectorLogo} alt="Logo" width={16} height={16} />
              </div>
              <span className="text-base sm:text-lg font-bold">
                {" "}
                <span className="text-red-600">You</span>
                <span className="text-gray-800 mx-0.5">can</span>
                <span className="text-brand-green-dark">win</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 leading-5 mb-3 sm:mb-4">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d'Agency.Africa.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[Facebook, LinkedIn, Insta, X].map((icon) => (
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300"
                >
                  <img src={icon} alt="Social Icon" width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Liens rapides
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
              Contact & Légal
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {contactLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 break-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-200 space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-slate-600">
              © 2025 Youcanwin. Tous droits réservés.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 flex flex-wrap items-center justify-center gap-1">
              Un service de{" "}
              <span className="font-semibold text-brand-green-dark">
                Agency.Africa
              </span>
              <span className="text-slate-500">—</span>
              <span className="font-medium text-slate-600">
                games.agency.africa
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-green-50 border border-green-200 text-xs sm:text-sm font-medium text-brand-green-dark">
              <ShieldIcon />
              Site conforme CNDP Maroc
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ShieldIcon() {
  return (
    <img src={Shield} viewBox="0 0 20 20" className="w-4 h-4" alt="QR code" />
  );
}
