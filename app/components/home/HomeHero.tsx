import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Copy */}
        <div className="space-y-8 animate-float">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium text-primary-400 bg-primary-900/30 rounded-full border border-primary-800/50">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              Status: Open to Work (2027)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-gradient">データサイエンス</span> × <br />
              Web開発 × 生成AI活用
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300">
              潜在的ニーズを
              <span className="font-bold text-white border-b-2 border-primary-500">
                実装
              </span>
              するエンジニア
            </p>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-lg">
            定性的な情報を定量化し、課題解決の「再現性」を生み出す。
            <br />
            自然言語処理の研究知見と、最新のAIエージェント技術を統合し、実用的なソリューションを構築します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#works"
              className="group relative px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary-900/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                制作・開発実績を見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="https://github.com/tomoya72457"
              target="_blank"
              className="px-8 py-3.5 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHubを見る
            </Link>
          </div>
        </div>

        {/* Right: Visual Composite */}
        <div className="relative hidden lg:block h-[500px]">
          <div className="relative w-full h-full perspective-1000">
            {/* Layer 1: VS Code Editor */}
            <div className="absolute top-10 left-10 w-full max-w-md bg-[#1e1e1e] rounded-lg shadow-2xl border border-slate-700 p-4 transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-500 z-10 animate-float">
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-slate-500 font-mono">pipeline.py</span>
              </div>
              <div className="font-mono text-xs md:text-sm leading-relaxed">
                <div>
                  <span className="token-keyword">import</span> pandas{" "}
                  <span className="token-keyword">as</span> pd
                </div>
                <div>
                  <span className="token-keyword">from</span> transformers{" "}
                  <span className="token-keyword">import</span> pipeline
                </div>
                <br />
                <div>
                  <span className="token-comment"># Initialize Sentiment Analysis</span>
                </div>
                <div>
                  nlp = pipeline(<span className="token-string">&quot;sentiment-analysis&quot;</span>)
                </div>
                <br />
                <div>
                  <span className="token-keyword">def</span>{" "}
                  <span className="token-function">analyze_needs</span>(data):
                </div>
                <div>&nbsp;&nbsp;insights = nlp(data)</div>
                <div>
                  &nbsp;&nbsp;<span className="token-keyword">return</span> insights
                </div>
                <br />
                {/* Completion Popup Mock */}
                <div className="bg-[#252526] border border-slate-600 p-2 rounded shadow-lg w-48 mt-1">
                  <div className="text-slate-300">optimize_workflow</div>
                  <div className="text-primary-400 bg-primary-900/30 px-1">
                    create_structure
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Data Graph (Floating) */}
            <div className="absolute top-0 right-0 w-64 h-48 glass-highlight rounded-xl p-4 transform translate-z-20 animate-float-delayed z-20 flex flex-col justify-center items-center">
              <div className="text-xs text-primary-300 font-mono mb-2 self-start">
                Engagement Score
              </div>
              <div className="flex items-end gap-2 h-24 w-full px-2">
                <div className="w-1/5 bg-primary-500/30 h-[40%] rounded-t"></div>
                <div className="w-1/5 bg-primary-500/50 h-[60%] rounded-t"></div>
                <div className="w-1/5 bg-primary-500/70 h-[45%] rounded-t"></div>
                <div className="w-1/5 bg-primary-500 h-[90%] rounded-t relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent-green text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                    +30%
                  </div>
                </div>
                <div className="w-1/5 bg-primary-400 h-[75%] rounded-t"></div>
              </div>
            </div>

            {/* Layer 3: n8n Node (Floating) */}
            <div className="absolute bottom-20 right-10 w-48 bg-white text-slate-900 rounded-lg shadow-xl p-3 transform translate-z-30 z-30 animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#ff6d5a] rounded flex items-center justify-center text-white text-xs font-bold">
                  n8n
                </div>
                <span className="text-xs font-bold">Webhook</span>
              </div>
              <div className="h-1 w-full bg-slate-200 rounded overflow-hidden">
                <div className="h-full bg-green-500 w-full animate-pulse"></div>
              </div>
              <div className="mt-2 text-[10px] text-slate-500 flex justify-between">
                <span>Status: Active</span>
                <span className="text-green-600">● 200 OK</span>
              </div>
            </div>

            {/* Connection Lines (CSS Lines) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{ transform: "rotateY(-10deg) rotateX(5deg)" }}
            >
              <line
                x1="40%"
                y1="40%"
                x2="70%"
                y2="20%"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="opacity-50"
              />
              <line
                x1="40%"
                y1="60%"
                x2="70%"
                y2="70%"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="opacity-50"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
