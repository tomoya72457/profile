import { Cloud, Filter, ArrowRight, Cpu } from "lucide-react";
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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-green rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[3/4] bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
                <Image
                  src="https://placehold.co/400x533/1e293b/94a3b8?text=Portrait"
                  alt="Tomoya Ide"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
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

          {/* Process Diagram */}
          <div className="md:col-span-8 space-y-12">
            <div className="glass-panel rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-8 text-center md:text-left">
                Thinking Process
              </h3>

              {/* Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
                {/* Input */}
                <div className="text-center w-full">
                  <div className="h-24 w-24 mx-auto bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center mb-4 relative">
                    {/* Chaotic Dots */}
                    <div className="absolute w-2 h-2 bg-slate-400 rounded-full top-6 left-6"></div>
                    <div className="absolute w-2 h-2 bg-slate-500 rounded-full bottom-8 right-6"></div>
                    <div className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full top-8 right-8"></div>
                    <Cloud className="w-8 h-8 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-slate-200">Input</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    定性データ・曖昧な理解度
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <ArrowRight className="w-6 h-6 text-slate-600" />
                </div>

                {/* Process */}
                <div className="text-center w-full">
                  <div className="h-24 w-24 mx-auto bg-slate-800 rounded-full border border-primary-500/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Filter className="w-8 h-8 text-primary-400" />
                  </div>
                  <h4 className="font-bold text-primary-400">Process</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    数値化・BERT分析・構造化
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <ArrowRight className="w-6 h-6 text-slate-600" />
                </div>

                {/* Output */}
                <div className="text-center w-full">
                  <div className="h-24 w-24 mx-auto bg-slate-800 rounded-full border border-accent-green/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-accent-green rounded-sm"></div>
                      <div className="w-3 h-3 bg-accent-green rounded-sm"></div>
                      <div className="w-3 h-3 bg-accent-green rounded-sm"></div>
                      <div className="w-3 h-3 bg-accent-green rounded-sm"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-accent-green">Output</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    偏差値UP・再現性ある解決
                  </p>
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
