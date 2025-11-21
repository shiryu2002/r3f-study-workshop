import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg mb-4">
          <Box size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          React Three Fiber <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Crash Course
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          30分で学ぶ、モダンECサイトへの3Dモデル導入。<br/>
          静的な表示から、ユーザーが操作可能なインタラクティブな実装までをステップバイステップで体験します。
        </p>
        
        <div className="pt-8 flex justify-center gap-4">
          <Link 
            to="/instruction"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            Start Workshop
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-slate-800 mb-2">01. Basic Display</div>
          <p className="text-slate-500">
            既存の画像ギャラリーに加え、R3Fを使ったシンプルな3Dビューワーコンポーネントを実装します。
            Canvas, OrbitControls, Environmentの基礎を学びます。
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-slate-800 mb-2">02. Interactivity</div>
          <p className="text-slate-500">
            ReactのStateを使って3Dシーンを制御します。
            色、サイズ、回転速度などをUIから操作し、UXを向上させる方法を学びます。
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-slate-800 mb-2">03. Your Model</div>
          <p className="text-slate-500">
            GLTF形式について学び、実際に手元の3Dモデルファイルをブラウザ上でロードして表示するビューワーを作成します。
          </p>
        </div>
      </div>
    </div>
  );
}