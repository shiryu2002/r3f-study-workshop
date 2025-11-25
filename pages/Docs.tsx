import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Book, Layers } from "lucide-react";

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Navigation */}
      <div className="mb-12">
           <Link to="/fin" className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-sm font-medium">
             <ArrowLeft size={16} /> Back to Finish
           </Link>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Official References</h1>
      <p className="text-slate-600 mb-12">
        さらに深く学びたい方のための、公式ドキュメントリンク集です。<br />
        様々なサンプルページがあるのでお気軽に覗いてみてください！
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* R3F */}
        <a 
          href="https://r3f.docs.pmnd.rs/getting-started/introduction" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Layers size={32} />
            </div>
            <ExternalLink className="text-slate-300 group-hover:text-blue-500 transition-colors" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            React Three Fiber
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            ReactのレンダラーとしてThree.jsを扱うためのコアライブラリ。
            APIリファレンスや基本的な使い方はこちら。
          </p>
        </a>

        {/* Drei */}
        <a 
          href="https://drei.docs.pmnd.rs/getting-started/introduction" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Book size={32} />
            </div>
            <ExternalLink className="text-slate-300 group-hover:text-purple-500 transition-colors" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
            Drei
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            R3Fのための便利なヘルパーライブラリ集。
            OrbitControls, Environment, Text, Loaderなど、よく使う機能はここから探せます。
          </p>
        </a>
      </div>
    </div>
  );
}