import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-slate-500 mb-10 text-sm">まずはコードをご覧ください。</p>

        <Link
          href="https://github.com/tomoya72457"
          target="_blank"
          className="inline-block group"
        >
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 border border-slate-700 group-hover:border-white shadow-lg">
            <Github className="w-10 h-10 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="font-mono text-slate-400 group-hover:text-white transition-colors">
            github.com/tomoya72457
          </span>
        </Link>

        <div className="mt-20 pt-8 border-t border-slate-900 text-xs text-slate-600 font-mono flex justify-between">
          <span>© 2026 Tomoya Ide</span>
          <span>Last Updated: 2026.02.08</span>
        </div>
      </div>
    </footer>
  );
}
