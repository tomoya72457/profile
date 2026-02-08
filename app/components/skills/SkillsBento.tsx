import { Sparkles, Code2, Layout, Microscope, GitBranch } from "lucide-react";

export default function SkillsBento() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary-500">02.</span> Skills
          </h2>
          <p className="text-slate-400">Technical Stack & Tools</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">
          {/* Gen AI (Featured Highlight) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 glass-highlight rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-50"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-accent-amber w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">
                    Generative AI & Automation
                  </h3>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  私の最大の強みは、AIを「使う」だけでなく、ワークフローに組み込み「自動化」する設計力です。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-colors">
                  <div className="font-bold text-white text-sm mb-1">
                    OpenAI Custom GPTs
                  </div>
                  <div className="text-[10px] text-primary-300 font-mono">
                    Interview Prep, Quiz Gen
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-colors">
                  <div className="font-bold text-white text-sm mb-1">NotebookLM</div>
                  <div className="text-[10px] text-primary-300 font-mono">
                    Curriculum Design
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-colors">
                  <div className="font-bold text-white text-sm mb-1">n8n</div>
                  <div className="text-[10px] text-primary-300 font-mono">
                    News Pipeline Automation
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-white/10 hover:border-primary-500/50 transition-colors">
                  <div className="font-bold text-white text-sm mb-1">Cursor / Dify</div>
                  <div className="text-[10px] text-primary-300 font-mono">
                    Development Efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Python */}
          <div className="md:col-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <Code2 className="w-8 h-8 text-slate-500" />
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">Python</h3>
              <p className="text-xs text-slate-500 font-mono">Data Analysis / NLP</p>
            </div>
          </div>

          {/* React/TS */}
          <div className="md:col-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <Layout className="w-8 h-8 text-slate-500" />
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">React / TS</h3>
              <p className="text-xs text-slate-500 font-mono">Frontend Development</p>
            </div>
          </div>

          {/* Research */}
          <div className="md:col-span-2 glass-panel rounded-2xl p-6 flex flex-col justify-center gap-4 hover:bg-slate-800 transition-colors">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-accent-green" />
              Research & Theory
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                BERT
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                Natural Language Processing
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                RAG System
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                Statistics
              </span>
            </div>
          </div>

          {/* Git/Tools */}
          <div className="md:col-span-2 lg:col-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-800 transition-colors">
            <GitBranch className="w-8 h-8 text-slate-500" />
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">Git / GitHub</h3>
              <p className="text-xs text-slate-500 font-mono">Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
