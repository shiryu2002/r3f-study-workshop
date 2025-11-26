import { ArrowLeft, ArrowRight, PartyPopper, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";

export default function Fin() {
  const sampleCode =`
<div className="fixed inset-0 -z-10 bg-slate-950">
  {/* React Three Fiber */}
  <Canvas camera={{ position: [0, 0, 1] }}>
    <AnimatedStars />
    <Sparkles count={100} scale={12} size={4}
     speed={0.4} opacity={0.5} color="#4f46e5"/> //青い星
    <Sparkles count={50} scale={10} size={6} 
    speed={0.2} opacity={0.3} color="#06b6d4"/> //白めの星
    <fog attach="fog" args={['#020617', 5, 20]} />
  </Canvas>
  {/* グラデーションオーバーレイ */}
  <div className="absolute inset-0 
  bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950
  pointer-events-none" />
</div>`;
  return (
    <div className="w-full mt-10 min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
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
            今回紹介したのはほんの一部に過ぎません。<br/>
            公式ドキュメントもぜひご覧ください。 <br/>
            さらに高度なテクニックやコンポーネントが多数揃っています！ <br/>
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
            {/* Code Section (Bottom) */}
            <div className="w-full py-12 px-4 md:px-8">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">おまけ</h3>
                <p className="text-slate-400 mb-8">この背景は以下のコードのみで実装できます！</p>
                <CodeBlock title="BackgroundScene.tsx" code={sampleCode} />
              </div>
            </div>
      </div>

    </div>
  );
}