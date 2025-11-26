import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, PartyPopper, Rocket } from "lucide-react";

export default function Fin() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-500/20 text-yellow-400 rounded-full mb-4 animate-bounce shadow-[0_0_30px_rgba(234,179,8,0.3)]">
          <PartyPopper size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Workshop Complete!
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl text-slate-200 font-medium">
            お疲れ様でした！<br/>
            これでReact Three Fiberの基礎はマスターです。
          </p>
          <p className="text-slate-400 leading-relaxed">
            今回紹介したのはほんの一部なので、<br/>
            いろんなパラメータをいじって遊んでみてください！<br/>
            3D表現の世界は無限大です。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link 
            to="/sample3"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-700 text-slate-300 rounded-full font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Upload
          </Link>
          <Link 
            to="/docs"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
          >
            Official Docs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="pt-12 text-slate-500 flex flex-col items-center gap-2">
            <Rocket size={24} />
            <span className="text-sm">Happy Hacking with R3F!</span>
        </div>

      </div>
    </div>
  );
}