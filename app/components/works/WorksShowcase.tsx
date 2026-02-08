import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorksShowcase() {
  return (
    <section id="works" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary-500">03.</span> Works
          </h2>
          <p className="text-slate-400">Logic & Implementation</p>
        </div>

        <div className="space-y-24">
          {/* Case 1: Community App */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-accent-green font-mono text-sm">
                  Long-term Internship
                </span>
                <span className="h-px flex-1 bg-slate-700"></span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                初心者向けの学習コンテンツ
                <br />
                「RAGチュートリアル」を作成
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                社内ナレッジの標準化を目的とした、Google ColabベースのRAG学習コンテンツを作成しました。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Python
                </span>
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  LLM
                </span>
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Markdown
                </span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <Image
                  src="/images/process_standardization_concept.png"
                  alt="Process Comparison"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Case 2: n8n Pipeline */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <Image
                  src="/images/n8n_automation_workflow.png"
                  alt="n8n Workflow"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay Mobile Mockup */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-96 md:-bottom-32 md:w-64 md:h-[32rem] bg-black rounded-lg border-2 border-slate-600 shadow-xl overflow-hidden">
                  <Image
                    src="/images/phone.PNG"
                    alt="Quiz UI"
                    width={150}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-accent-green font-mono text-sm">
                  App Development
                </span>
                <span className="h-px flex-1 bg-slate-700"></span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                Cypher Community:
                <br />
                作問プロセスの標準化
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                <strong className="text-slate-200">Custom GPTs</strong>
                によるニュース自動収集と、
                <strong className="text-slate-200">NotebookLM</strong>
                を用いたクイズ化フローを構築。リサーチ工数を削減しつつ、コンテンツの鮮度維持を実現しました。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Custom GPTs
                </span>
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Prompt Engineering
                </span>
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  UX Design
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://cypher.inc/App"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="https://cypher.inc/ProfileDetail?id=68cc7b1e25f2d34f1101e909"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Profile <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="https://apps.apple.com/jp/app/cypher/id6748674526"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View App <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case 3: Education Method */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800">
                  <div className="text-6xl font-bold text-accent-green mb-2">+30</div>
                  <div className="text-xl text-slate-300 mb-6">Deviation Score</div>
                  {/* Fake Line Chart */}
                  <svg
                    viewBox="0 0 100 40"
                    className="w-3/4 stroke-primary-500 fill-none stroke-2"
                  >
                    <polyline points="0,35 20,32 40,25 60,20 80,10 100,5" />
                    <circle cx="0" cy="35" r="2" className="fill-primary-500" />
                    <circle cx="20" cy="32" r="2" className="fill-primary-500" />
                    <circle cx="40" cy="25" r="2" className="fill-primary-500" />
                    <circle cx="60" cy="20" r="2" className="fill-primary-500" />
                    <circle cx="80" cy="10" r="2" className="fill-primary-500" />
                    <circle
                      cx="100"
                      cy="5"
                      r="2"
                      className="fill-accent-green stroke-white stroke-1"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-accent-green font-mono text-sm">
                  Educational Logic
                </span>
                <span className="h-px flex-1 bg-slate-700"></span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                定性評価の構造化による
                <br />
                偏差値30UPメソッド
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                「1:自力正解 〜
                5:捨て問」の5段階指標を導入し、生徒の理解度をデータ化。復習の優先度をアルゴリズム的に決定することで、短期間での劇的な成果を実現しました。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Optimization
                </span>
                <span className="px-2 py-1 bg-slate-800 text-primary-300 text-xs font-mono rounded border border-slate-700">
                  Data Driven
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
