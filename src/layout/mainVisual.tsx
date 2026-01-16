export default function MainVisual() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden bg-black">
      <img 
        src={`${import.meta.env.BASE_URL}assets/mainvisual_.jpg`}
        alt="mainvisual"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-green-950/30 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-16 bg-green-500"></div>
            <div>
              <div className="text-sm text-green-400 tracking-widest uppercase">Hyogo Tournament</div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight">
                兵庫県スマブラ対戦会
              </h1>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-2xl ml-5">
            熱い対戦が繰り広げられる兵庫県最大級のスマブラ大会。初心者から上級者まで、すべてのプレイヤーを歓迎します。
          </p>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full text-black" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0,0 C300,100 500,80 600,60 C700,40 900,80 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
      </svg>
    </section>
  )
}