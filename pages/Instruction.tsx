import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Box, Layers, Cuboid, ChevronDown } from "lucide-react";

const SlideSection: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; className?: string; showArrow?: boolean }> = ({ title, children, icon, className, showArrow }) => (
  <div className={`min-h-[80vh] relative flex flex-col justify-center p-8 md:p-20 border-b border-gray-200 ${className}`}>
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          {icon}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
        {children}
      </div>
    </div>
    {showArrow && (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-slate-300" size={48} strokeWidth={1.5} />
      </div>
    )}
  </div>
);

export default function Instruction() {
  return (
    <div className="bg-white">
      {/* Intro Slide */}
      <SlideSection title="Three.js とは？" icon={<Cuboid size={32} />} showArrow>
        <p>
          <strong>Three.js</strong> は、ウェブブラウザ上で3Dグラフィックスを描画するためのJavaScriptライブラリです。<br/>
          WebGLという低レベルなAPIを、扱いやすいオブジェクト指向のAPIでラップしています。
        </p>
        <ul className="list-disc pl-6 space-y-2 bg-slate-50 p-6 rounded-xl border border-gray-100">
          <li>シーン (Scene): 3D空間全体</li>
          <li>カメラ (Camera): 視点</li>
          <li>レンダラー (Renderer): 描画エンジン</li>
          <li>メッシュ (Mesh): 形状(Geometry) + 素材(Material)</li>
        </ul>
      </SlideSection>

      {/* R3F Slide */}
      <SlideSection title="React Three Fiber (R3F) とは？" icon={<Layers size={32} />} showArrow>
        <p>
          <strong>React Three Fiber</strong> は、Three.jsのためのReactレンダラーです。<br/>
          Reactのコンポーネントベースの記述方法で、Three.jsのシーンを宣言的に構築できます。
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-900 text-blue-100 p-6 rounded-xl font-mono text-sm">
            <div className="mb-2 text-slate-400">// Vanilla Three.js</div>
            const mesh = new THREE.Mesh();<br/>
            scene.add(mesh);
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-xl font-mono text-sm">
            <div className="mb-2 text-blue-200">// React Three Fiber</div>
            &lt;mesh /&gt;
          </div>
        </div>
        <p className="mt-4">
          Canvasコンポーネントの中に配置するだけで、自動的にシーンに追加され、
          Reactの状態管理（State/Props）を使って3Dオブジェクトを動かすことができます。
        </p>
      </SlideSection>

      {/* Why R3F Slide */}
      <SlideSection title="なぜ R3F を使うのか" icon={<Box size={32} />}>
        <p>
          ECサイトなどのWebアプリケーションと統合する場合、R3Fは圧倒的に有利です。
        </p>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mt-1">Declarative</div>
            <p>UIと同じように3Dシーンを記述できるため、コードの見通しが良い。</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold mt-1">Ecosystem</div>
            <p><strong>@react-three/drei</strong> というヘルパーライブラリが充実しており、
            カメラ操作(OrbitControls)や環境光(Environment)、ローディング表示(Loader)などが一行で実装できます。</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mt-1">Interactive</div>
            <p>Reactの <code>useState</code> や <code>onClick</code> イベントがそのまま3Dオブジェクトに使えます。</p>
          </div>
        </div>

        <div className="pt-10">
          <Link 
            to="/sample1"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
          >
            デモを開始する <ArrowRight />
          </Link>
        </div>
      </SlideSection>
    </div>
  );
}