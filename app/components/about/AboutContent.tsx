import Image from "next/image";

export default function AboutContent() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary-500">01.</span> About
          </h2>
          <p className="text-slate-400 max-w-2xl">
            塾講師としての原体験から現在に至るまで、一貫して「定性情報の定量化」と「仕組み化」に取り組んでいます。
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Image / Card */}
          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-green rounded-lg blur opacity-25"></div>
              <div className="relative aspect-[3/4] bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
                <Image
                  src="/images/tomoya.jpg"
                  alt="Tomoya Ide"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="font-bold text-white">Tomoya Ide</div>
                  <div className="text-xs text-primary-400 font-mono">
                    Data Science Student
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8 space-y-12">
            <div className="glass-panel rounded-xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-8">学歴・経歴</h3>

              {/* Timeline */}
              <div className="relative space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-[4.5rem] top-2 bottom-2 w-0.5 bg-slate-700"></div>

                {/* Timeline Items */}
                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2023.03</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">山手学院高等学校　卒業</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2023.04</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">中央大学理工学部ビジネスデータサイエンス学科　入学</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2024.12</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">特定非営利活動法人 STEM Leaders　所属</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2025.07</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">株式会社グラフ　インターン入社</div>
                    <div className="text-slate-400 text-sm mt-1">ビジネスデータサイエンティスト</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2025.12</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">株式会社グラフ　退社</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2025.12</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">株式会社プロパゲート　入社</div>
                    <div className="text-slate-400 text-sm mt-1">AIエンジニア ・ データサイエンティスト</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2025.12</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">中央大学 自然言語処理研究室　配属</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2027.03</div>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="text-slate-200 font-medium">中央大学理工学部ビジネスデータサイエンス学科　卒業見込み</div>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-20 flex-shrink-0 text-right">
                    <div className="text-sm font-mono text-primary-400">2027.04</div>
                  </div>
                  <div className="relative flex-1">
                    <div className="text-slate-200 font-medium">中央大学理工学研究科ビジネスデータサイエンス専攻　入学予定</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-slate-400 text-sm md:text-base leading-loose">
              <p>
                個別指導塾では、生徒の「わかったつもり」という曖昧な状態を5段階指標で数値化し、学習の優先順位を明確にしました。
                この
                <strong className="text-white">「見えないものを構造化する」</strong>
                アプローチは、現在の自然言語処理(NLP)研究や、生成AIを用いた業務プロセスの設計にも通底しています。
                単にコードを書くだけでなく、その前段階にある「課題の本質的な定義」と、実装後の「定着」までをデザインします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
