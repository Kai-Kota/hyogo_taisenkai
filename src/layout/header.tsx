export default function Header() {
  return (
    <header className="relative bg-black text-white flex items-center h-20 px-6 border-b border-neutral-900">
      <div className="flex items-center gap-4">
        <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="logo" className="h-12 w-auto drop-shadow-2xl" />
        <div className="hidden md:block">
          <div className="text-lg font-extrabold tracking-tight text-white">兵庫対戦会</div>
          <div className="text-xs text-green-400">Smash Bros. SPECIAL</div>
        </div>
      </div>

      <nav className="ml-auto flex items-center gap-8 uppercase tracking-wider text-sm">
        <a href="#about" className="text-neutral-400 hover:text-green-400 transition">About</a>
        <a href="#rules" className="text-neutral-400 hover:text-green-400 transition">Rules</a>
        <a href="#schedule" className="text-neutral-400 hover:text-green-400 transition">Schedule</a>
        <a href="#access" className="text-green-400 hover:text-green-300 transition">Access</a>
      </nav>

      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="h-full w-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
      </div>
    </header>
  )
}