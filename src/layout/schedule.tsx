export default function Schedule() {
  return (
    <main className="bg-black text-gray-100">
        <section id="schedule" className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-bl from-black via-green-950/10 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500"></div>
            <h2 className="text-4xl font-extrabold tracking-tight">SCHEDULE</h2>
          </div>
          <div className="bg-neutral-900/60 p-8 rounded-lg border border-green-900/30">
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">9:00</div>
                <div className="text-gray-300">設営開始</div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">10:00</div>
                <div>
                  <div className="text-gray-300">受付開始</div>
                  <div className="text-sm text-red-500 mt-1">※Switch持参枠の方は10:30までにお越しください</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">11:00</div>
                <div className="text-gray-300">予選開始（2先総当たり）</div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">予選後</div>
                <div className="text-gray-300">昼休憩</div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">14:30</div>
                <div className="text-gray-300">本戦トーナメント、Bクラストーナメント開始</div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="text-green-400 font-bold text-lg w-24">19:30</div>
                <div className="text-gray-300">フリーラスト、片付け開始</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-green-400 font-bold text-lg w-24">20:00</div>
                <div className="text-gray-300">完全撤収</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">※トーナメントの進行具合や当日の状況に応じて変更する場合があります。</p>
            <p className="mt-1 text-sm text-red-500">予選開始時間の30分前（10:30頃）までに受付を済ませてください。遅刻や呼び出しに応じない場合はDQ（欠場）となります。</p>
          </div>
        </div>
      </section>

    </main>
  )
}