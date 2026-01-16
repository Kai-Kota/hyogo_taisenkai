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
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-6">
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
              </div>
              <div className="bg-neutral-900/60 rounded-lg border border-green-900/30 overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.591341318905!2d135.34828277538742!3d34.74069387290552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f24226e90055%3A0x50138ecd25b008cf!2z6KW_5a6u5biC56uLIOiLpeerueWFrOawkemkqA!5e0!3m2!1sja!2sjp!4v1768539556116!5m2!1sja!2sjp" 
                  className="w-full md:w-120 h-70 md:h-96" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-neutral-900/60 p-8 rounded-lg border border-green-900/30">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">お問い合わせ</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">対戦会 Xアカウント</div>
                  <a href="https://x.com/hyogo_ssbu" className="text-green-400 font-medium underline" target="_blank">@hyogo_ssbu</a>
                </div>
                <div>
                  <div className="text-sm text-gray-400" tar>主催 Xアカウント</div>
                  <a href="https://x.com/kyonssbu0318" className="text-green-400 font-medium underline" target="_blank">@kyonssbu0318</a>
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