export default function About() {
  return (
    <main className="bg-black text-gray-100">
      {/* ABOUT Section */}
      <section id="about" className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500"></div>
            <h2 className="text-4xl font-extrabold tracking-tight">ABOUT</h2>
          </div>
          <div className="bg-neutral-900/60 p-8 rounded-lg border border-green-900/30">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">兵庫県スマブラ対戦会</h3>
            <p className="text-gray-300 leading-relaxed">大乱闘スマッシュブラザーズSPECIALを用いたフリー対戦会です。基本的には1on1の対戦がメインになりますが、お互いの同意さえあればどんなルールで遊んでも構いません。初参加者から熟練プレイヤーまで、幅広いレベルの方々が集まり、熱い対戦を繰り広げています。</p>
            <p className="mt-4 text-sm text-gray-400">※こちらは募集要項ページです。募集ページは別途ご確認ください。</p>
          </div>
        </div>
      </section>
    </main>
  )
}