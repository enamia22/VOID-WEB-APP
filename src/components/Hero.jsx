import Arch from '../assets/Arch.svg';
import QR from '../assets/QR.svg';
import Gift from '../assets/Gift.svg';
import Arrow from '../assets/Arrow.svg';
import Bulb from '../assets/Bulb.svg';

export default function Hero() {
  const stats = [
    { value: '500K+', label: 'Interactions/mois', color: 'text-brand-green-dark' },
    { value: '50+', label: 'Marques actives', color: 'text-brand-red-dark' },
    { value: 'x3.5', label: 'ROI moyen', color: 'text-brand-green-dark' },
  ];
  const trust = ['Maroc Telecom', 'Inwi', 'Orange', 'Carrefour'];

  return (
    <section className="relative flex flex-col items-center min-h-0 bg-white isolate">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 50%, #FEF2F2 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(226,232,240,0.3) 1.56%, transparent 1.56%),
            linear-gradient(180deg, rgba(226,232,240,0.3) 1.56%, transparent 1.56%)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-container px-4 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        <div className="flex flex-col items-start gap-6 sm:gap-8 w-full max-w-[608px] text-center lg:text-left">
          <div className="space-y-2 w-full"  style={{ background: 'White' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 relative">
              Transformez chaque{' '}
              <span className="relative inline-block">
                <span className="text-gradient-green relative z-10">produit</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-full flex justify-center lg:justify-start z-0 pointer-events-none">
                  <img
                    src={Arch}
                    className="mx-auto lg:mx-0 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-70-auto"
                    alt="arch"
                  />
                </span>
              </span>
              <br className="hidden sm:block" />
              <span className="sm:inline"> en expérience de jeu</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-[569px] w-full mx-auto lg:mx-0">
            YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification
            innovantes. <span className='font-bold text-slate-900'>Codes QR, cartes digitales, défis et récompenses.</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 w-full">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="flex flex-col gap-0.5 items-center lg:items-start">
                <span className={`text-2xl sm:text-3xl font-bold ${color}`}>{value}</span>
                <span className="text-xs sm:text-sm font-medium text-slate-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full pt-0 sm:pt-2">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-medium text-base sm:text-lg shadow hover:opacity-95 w-full sm:w-auto"
            >
              Voir la démo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-medium text-base sm:text-lg hover:bg-slate-50 w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              Comment ça marche
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-200 w-full space-y-3 sm:space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-sm font-medium text-slate-400">
              {trust.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full lg:max-w-[50%] lg:pl-8 order-first lg:order-last lg:-mt-4 xl:-mt-6">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}


function PhoneMockup() {
  return (
    <>
    
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[448px] lg:h-[796px]">
      <div className="rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] border-2 sm:border-2 lg:border-2 border-slate-900 shadow-2xl bg-slate-900 p-1.5 sm:p-2 h-full">
        <div className="rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-white overflow-hidden h-full flex flex-col">
          <div
            className="p-4 sm:p-5 lg:p-6 pb-3 lg:pb-4"
            style={{ background: 'linear-gradient(180deg, #16A34A 0%, #0B6B3A 100%)' }}
          >
            <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-white/90">Album Digital 2025</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-0.5 lg:mt-1">Ma Collection</h2>
            <div className="flex gap-2 sm:gap-4 mt-1.5 lg:mt-2">
              <div className="text-center">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">127</span>
                <p className="text-[10px] sm:text-xs text-white/75">Cartes</p>
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">76%</span>
                <p className="text-[10px] sm:text-xs text-white/75">Complet</p>
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">#12</span>
                <p className="text-[10px] sm:text-xs text-white/75">Rang</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2 p-3 sm:p-4 content-start">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-24 sm:h-28 md:h-32 lg:h-[170px] rounded-md sm:rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Tooltips: Figma offsets (right/top ≈ -16px) */}
      <div className="absolute -right-2 top-2 md:-right-3 md:top-3 lg:-right-4 lg:-top-4 z-10 w-[160px] sm:w-[190px] md:w-[210px] p-3 sm:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-lg hidden sm:block">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
            <QRIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">Scan QR Code</p>
            <p className="text-[10px] sm:text-xs text-slate-500">Débloquer une carte</p>
          </div>
        </div>
      </div>
      <div className="absolute -left-2 bottom-6 md:-left-3 md:bottom-6 lg:-left-20 lg:-bottom-5 z-10 w-[160px] sm:w-[190px] md:w-[218px] p-3 sm:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-lg hidden sm:block">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
            <GiftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">Récompense</p>
            <p className="text-[10px] sm:text-xs text-slate-500">Tirage hebdomadaire</p>
          </div>
        </div>
      </div>
          <div className="absolute flex bottom-0 left-0 right-0 items-center justify-around py-2 sm:py-3 px-4 sm:px-6 border-t border-slate-200 bg-white">
            {['Collection', 'Scanner', 'Échanges', 'Profil'].map((t) => (
              <div key={t} className="flex flex-col items-center gap-0.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-slate-300" />
                <span className="text-[8px] sm:text-[10px] text-slate-600">{t}</span>
              </div>
            ))}
          </div>
    </div>
    </>
  );
}

function ArrowRight() {
  return (
      <img
       src={Arrow}
       viewBox="0 0 20 20"
       className="w-4 h-4"
       alt="QR code"
     />
  );
}

function Play() {
  return (
      <img
       src={Bulb}
       viewBox="0 0 20 20"
       className="w-4 h-4"
       alt="QR code"
     />
  );
}

function QRIcon() {
  return (
      <img
       src={QR}
       viewBox="0 0 20 20"
       className="w-4 h-4"
       alt="QR code"
     />
  );
}

function GiftIcon() {
  return (
      <img
       src={Gift}
       viewBox="0 0 20 20"
       className="w-4 h-4"
       alt="QR code"
     />
  );
}
