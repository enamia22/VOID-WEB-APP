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

      <div className="relative z-10 w-full max-w-container px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-start gap-6 sm:gap-8 w-full max-w-[608px] text-center lg:text-left">
          <div className="space-y-2 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
              Transformez chaque{' '}
              <span className="text-gradient-green">produit</span>
              <br className="hidden sm:block" />
              <span className="sm:inline"> en expérience de jeu</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-[569px] w-full mx-auto lg:mx-0">
            YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification
            innovantes. Codes QR, cartes digitales, défis et récompenses.
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
              Demander une démo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-medium text-base sm:text-lg hover:bg-slate-50 w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              Voir la démo
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

        <div className="flex-1 flex justify-center w-full lg:max-w-[50%] lg:pl-8 order-first lg:order-last">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Play({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M5 4l10 6-10 6V4z" stroke="currentColor" strokeWidth="1.67" fill="none" />
    </svg>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[448px]">
      <div className="rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] border-4 sm:border-6 lg:border-8 border-slate-900 shadow-2xl bg-slate-900 p-1.5 sm:p-2">
        <div className="rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-white overflow-hidden min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex flex-col">
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
          <div className="flex-1 grid grid-cols-3 gap-1.5 sm:gap-2 p-3 sm:p-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-[136/171] rounded-md sm:rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
              />
            ))}
          </div>
          <div className="flex items-center justify-around py-2 sm:py-3 px-4 sm:px-6 border-t border-slate-200 bg-white">
            {['Collection', 'Scanner', 'Échanges', 'Profil'].map((t) => (
              <div key={t} className="flex flex-col items-center gap-0.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-slate-300" />
                <span className="text-[8px] sm:text-[10px] text-slate-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tooltips: hide on small screens, show from md */}
      <div className="absolute -right-2 top-2 md:right-0 md:-right-4 md:top-4 z-10 w-[160px] sm:w-[190px] md:w-[210px] p-3 sm:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-lg hidden sm:block">
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
      <div className="absolute -left-2 bottom-12 sm:bottom-14 md:-left-4 md:bottom-16 z-10 w-[160px] sm:w-[190px] md:w-[218px] p-3 sm:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-lg hidden sm:block">
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
    </div>
  );
}

function QRIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67">
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="12" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="12" width="6" height="6" rx="1" />
      <rect x="12" y="12" width="6" height="6" rx="1" />
      <path d="M5 5h2v2H5zM13 5h2v2h-2zM5 13h2v2H5zM14 14h1v1h-1z" fill="currentColor" />
    </svg>
  );
}

function GiftIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67">
      <path d="M10 6v12M10 6H7a2 2 0 010-4h3M10 6h3a2 2 0 100-4h-3M4 10h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
    </svg>
  );
}
