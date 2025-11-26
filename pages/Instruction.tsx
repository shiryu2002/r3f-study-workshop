import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Box, Layers, Cuboid, ChevronDown } from "lucide-react";

interface SlideSectionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  onNextClick?: () => void;
}

const SlideSection = React.forwardRef<HTMLDivElement, SlideSectionProps>(
  ({ title, children, icon, className, onNextClick }, ref) => (
    <div 
      ref={ref} 
      className={`min-h-[80vh] relative flex flex-col justify-center p-8 md:p-20 border-b border-slate-800/50 ${className}`}
    >
      <div className="max-w-4xl mx-auto w-full bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl border border-blue-500/20">
            {icon}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100">{title}</h2>
        </div>
        <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
      {onNextClick && (
        <button 
          onClick={onNextClick}
          className="absolute bottom-8 left-0 right-0 mx-auto w-12 h-12 flex items-center justify-center animate-bounce text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Next section"
        >
          <ChevronDown size={48} strokeWidth={1.5} />
        </button>
      )}
    </div>
  )
);

export default function Instruction() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      {/* Three.js Slide */}
      <SlideSection 
        ref={section1Ref}
        title="Three.js とは？" 
        icon={<Cuboid size={32} />} 
        onNextClick={() => scrollToSection(section2Ref)}
      >
        <p>
          <strong>Three.js</strong> は、ウェブブラウザ上で3Dグラフィックスを描画するためのJavaScriptライブラリです。<br/>
          WebGLという低レベルなAPIを、扱いやすいオブジェクト指向のAPIでラップしています。
        </p>
        <ul className="list-disc pl-6 space-y-2 bg-slate-900/40 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
          <li>シーン (Scene): 3D空間全体</li>
          <li>カメラ (Camera): 視点</li>
          <li>レンダラー (Renderer): 描画エンジン</li>
          <li>メッシュ (Mesh): 形状(Geometry) + 素材(Material)</li>
        </ul>
      </SlideSection>

      {/* R3F Slide */}
      <SlideSection 
        ref={section2Ref}
        title="React Three Fiber (R3F) とは？" 
        icon={<Layers size={32} />} 
        onNextClick={() => scrollToSection(section3Ref)}
      >
        <p>
          <strong>React Three Fiber</strong> は、Three.jsのためのReactレンダラーです。<br/>
          Reactのコンポーネントベースの記述方法で、Three.jsのシーンを宣言的に構築できます。
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-950 text-blue-100 p-6 rounded-xl font-mono text-sm border border-slate-800">
            <div className="mb-2 text-slate-500">// Vanilla Three.js</div>
            const mesh = new THREE.Mesh();<br/>
            scene.add(mesh);
          </div>
          <div className="bg-blue-900/20 text-blue-100 p-6 rounded-xl font-mono text-sm border border-blue-500/30">
            <div className="mb-2 text-blue-400">// React Three Fiber</div>
            &lt;mesh /&gt;
          </div>
        </div>
        <p className="mt-4">
          Canvasコンポーネントの中に配置するだけで、自動的にシーンに追加され、
          Reactの状態管理（State/Props）を使って3Dオブジェクトを動かすことができます。
        </p>
      </SlideSection>

      {/* Why R3F Slide */}
      <SlideSection 
        ref={section3Ref}
        title="なぜ R3F を使うのか" 
        icon={<Box size={32} />}
      >
        <p>
          ECサイトなどのWebアプリケーションと統合する場合、R3Fは圧倒的に有利です。
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-bold mt-1 border border-green-500/30">Declarative</div>
            <p>UIと同じように3Dシーンを記述できるため、コードの見通しが良い。</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm font-bold mt-1 border border-purple-500/30">Ecosystem</div>
            <p><strong>@react-three/drei</strong> というヘルパーライブラリが充実しており、
            カメラ操作(OrbitControls)や環境光(Environment)、ローディング表示(Loader)などが一行で実装できます。</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-900/30 text-orange-400 px-3 py-1 rounded-full text-sm font-bold mt-1 border border-orange-500/30">Interactive</div>
            <p>Reactの <code>useState</code> や <code>onClick</code> イベントがそのまま3Dオブジェクトに使えます。</p>
          </div>
        </div>

        <div className="pt-10">
          <Link 
            to="/sample1"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:scale-105"
          >
            デモを開始する <ArrowRight />
          </Link>
        </div>
      </SlideSection>
    </div>
  );
}