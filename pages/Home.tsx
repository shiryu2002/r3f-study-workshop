import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-4 animate-pulse">
          <Box size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          React Three Fiber <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
            Crash Course
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          30分で学ぶ、Reactへの3Dモデル導入。<br/>
          静的な表示から、ユーザーが操作可能なインタラクティブな実装までを<br/>ステップバイステップで体験します。
        </p>
        
        <div className="pt-8 flex justify-center gap-4">
          <Link 
            to="/instruction"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:scale-105"
          >
            Start Workshop
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="inline-block text-slate-300 text-3xl font-medium shadow font-bold">
          <strong>Index</strong>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all hover:-translate-y-1 group">
          <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">01. What is R3F ?</div>
          <p className="text-slate-400">
            React-Three-Fiber (R3F) の基礎について学びます。
          </p>
        </div>
        <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all hover:-translate-y-1 group">
          <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">02. How To Display</div>
          <p className="text-slate-400">
            ReactのStateを使って3Dシーンを制御します。
            色、サイズ、回転速度などをUIから操作する方法を学びます。
          </p>
        </div>
        <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
          <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">03. Your Model</div>
          <p className="text-slate-400">
            実際に手元の3Dモデルファイルをブラウザ上でロードして表示するビューワーを作成します。
          </p>
        </div>
      </div>
    </div>
  );
}