export default function Access() {
  return (
    <main className="bg-black text-gray-100">
      <section id="access" className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-950/20 via-black to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500"></div>
            <h2 className="text-4xl font-extrabold tracking-tight">ACCESS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/60 p-8 rounded-lg border border-green-900/30">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">会場</h3>
              <p className="text-gray-300 text-lg">若竹生活公民館 3階 講堂</p>
              <p className="text-gray-400 mt-2">〒662-0978<br/>兵庫県西宮市西福町15番12号</p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-green-400 mb-2">アクセス</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• JR西宮駅から徒歩5分</li>
                  <li>• 阪急西宮北口から徒歩15分</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-green-400 mb-2">来場時間</h4>
                <p className="text-gray-300 text-sm">予選開始時間の30分前（10:30頃）までに受付を済ませてください。遅刻や呼び出しに応じない場合はDQ（欠場）となります。</p>
              </div>
            </div>

            <div className="bg-neutral-900/60 p-8 rounded-lg border border-green-900/30">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">お問い合わせ</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">対戦会 Twitter</div>
                  <div className="text-green-400 font-medium">@hyogo_ssbu</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">主催 Twitter</div>
                  <div className="text-green-400 font-medium">@kynssbu0318_sp</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">配信チャンネル</div>
                  <a href="https://youtube.com/channel/UCkARopXyHR1K3_oHWkY-z2Q" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">YouTube</a>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-900/20 rounded border border-green-800/30">
                <h4 className="font-semibold text-green-400 mb-2">キャンセルについて</h4>
                <p className="text-gray-300 text-sm">キャンセルは運営アカウントのDMにてご連絡ください。参加者様自身からのキャンセル操作はできませんので、必ず運営に一報ください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}