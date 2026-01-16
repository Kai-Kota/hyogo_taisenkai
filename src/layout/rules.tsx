export default function Rules() {
  return (
    <main className="bg-black text-gray-100">
        <section id="rules" className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-green-950/10 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500"></div>
            <h2 className="text-4xl font-extrabold tracking-tight">RULES</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-neutral-900/60 p-6 rounded-lg border border-green-900/30">
              <h3 className="text-xl font-semibold text-green-400 mb-3">対戦ルール</h3>
              <img 
                  src={`${import.meta.env.BASE_URL}assets/rules.webp`} 
                  alt=""
                  className="object-contain w-full md:w-2/3 mx-auto"
                />
              <ul className="pt-6 space-y-2 text-gray-300">
                <li>• 予選：8人×8プール別の2先総当たり</li>
                <li>• 本戦：1位・2位抜けが勝者側、3位・4位抜けが敗者側</li>
                <li>• 本戦は3先（BO5）、ダブルエリミネーションでの進行</li>
                <li>• Bクラストーナメント（シングルエリミネーション）も実施</li>
              </ul>
            </div>
            <div className="bg-neutral-900/60 p-6 rounded-lg border border-green-900/30">
              <h3 className="text-xl font-semibold text-green-400 mb-3">使用コントローラー</h3>
              <p className="text-gray-300">Nintendo Switchに対応しているコントローラーであればどれでも使用可能です。各自使用するコントローラーをお持ち込みください。</p>
              <p className="mt-3 text-sm text-gray-400">※proコントローラー使用者は接続用Type-Cコードを必ずご持参ください。対戦後は受付の同期台で同期を切断してください。</p>
            </div>
            <div className="bg-neutral-900/60 p-6 rounded-lg border border-green-900/30">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Switch持参枠</h3>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <img src={`${import.meta.env.BASE_URL}assets/jisan1.webp`} alt="" className="object-contain w-full md:w-1/2"/>
                <img src={`${import.meta.env.BASE_URL}assets/jisan2.webp`} alt="" className="object-contain w-full md:w-1/2"/>
              </div>
              <p className="text-gray-300">⚠️Nintendo Switch本体、ドックセット（ドック、AC、HDMI、純正GC接続タップ）をご持参ください。最新バージョン・全ファイター解放済みであることを確認してください。Switch2は不可。</p>
            </div>
            <div className="bg-neutral-900/60 p-6 rounded-lg border border-green-900/30">
              <h3 className="text-xl font-semibold text-green-400 mb-3">その他注意事項</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 貴重品は各自で管理してください</li>
                <li>• ゴミは分別して捨ててください</li>
                <li>• 名札ケースは帰宅時に返却してください</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}