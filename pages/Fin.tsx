import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, PartyPopper, Rocket } from "lucide-react";

export default function Fin() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full mb-4 animate-bounce">
          <PartyPopper size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Workshop Complete!
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl text-slate-700 font-medium">
            お疲れ様でした！<br/>
            これでReact Three Fiberの基礎はマスターです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            今回紹介したのはほんの一部なので、<br/>
            いろんなパラメータをいじって遊んでみてください！<br/>
            3D表現の世界は無限大です。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link 
            to="/sample3"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-600 rounded-full font-semibold hover:border-slate-900 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Upload
          </Link>
          <Link 
            to="/docs"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            Official Docs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="pt-12 text-slate-400 flex flex-col items-center gap-2">
            <Rocket size={24} />
            <span className="text-sm">Happy Hacking with R3F!</span>
        </div>

      </div>
    </div>
  );
}