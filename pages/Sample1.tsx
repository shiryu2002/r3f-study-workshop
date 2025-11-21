import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { ArrowRight, ShoppingCart, Star, ShieldCheck, ArrowLeft } from "lucide-react";
import { Loader, Model } from "../components/SceneComponents";
import { CodeBlock } from "../components/CodeBlock";

export default function Sample1() {
  const thumbs = [
    "https://picsum.photos/id/30/400/400",
    "https://picsum.photos/id/40/400/400",
    "https://picsum.photos/id/50/400/400",
  ];

  const [mainImage, setMainImage] = useState(thumbs[0]);
  const [viewMode, setViewMode] = useState<'image' | '3d'>('image');

  const sampleCode = `
// 1. Canvas: 3Dを描画する領域
// 2. Suspense: モデル読み込み中のローディング表示
// 3. OrbitControls: カメラ操作（回転・ズーム）

<Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
  <ambientLight intensity={0.7} />
  
  <Suspense fallback={<Loader />}>
    <Model url="/sample.glb" />
    <Environment preset="city" />
  </Suspense>
  
  <OrbitControls enablePan={false} />
</Canvas>
`;

  return (
    <div className="w-full pt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-12">
        {/* Navigation Helper */}
        <div className="flex justify-between items-center mb-8">
           <Link to="/instruction" className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-sm font-medium">
             <ArrowLeft size={16} /> Back to Docs
           </Link>
           <div className="flex items-center gap-4">
             <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase hidden sm:block">Step 1: Basic Viewer</h2>
             <Link to="/sample2" className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
               Next: Interactive Controls <ArrowRight size={16} />
             </Link>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* 左カラム: ビジュアルエリア */}
          <div className="space-y-6">
            <div className="relative w-full aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* View Mode Toggler */}
              <div className="absolute top-4 right-4 z-10 flex bg-gray-100/80 backdrop-blur rounded-lg p-1">
                <button 
                  onClick={() => setViewMode('image')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    viewMode === 'image' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Photo
                </button>
                <button 
                   onClick={() => setViewMode('3d')}
                   className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    viewMode === '3d' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  3D View
                </button>
              </div>

              {viewMode === 'image' ? (
                <img 
                  src={mainImage} 
                  alt="product" 
                  className="w-full h-full object-cover transition-opacity duration-300" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100">
                  <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ambientLight intensity={0.7} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <Suspense fallback={<Loader />}>
                      <Model url="/sample.glb" />
                      <Environment preset="city" />
                      <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                    </Suspense>
                    <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} />
                  </Canvas>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {thumbs.map((src, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMainImage(src);
                    setViewMode('image');
                  }}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    mainImage === src && viewMode === 'image' ? "border-blue-600 ring-2 ring-blue-100" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} className="w-full h-full object-cover" alt={`thumb-${i}`} />
                </button>
              ))}
              <button
                onClick={() => setViewMode('3d')}
                className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 bg-gray-100 flex items-center justify-center transition-all ${
                  viewMode === '3d' ? "border-blue-600 ring-2 ring-blue-100" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <span className="text-xs font-bold text-slate-600">3D Model</span>
              </button>
            </div>
          </div>

          {/* 右カラム: 商品詳細 */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">New Arrival</span>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  <Star size={14} fill="currentColor" />
                  <span className="font-bold text-slate-700">4.8</span>
                  <span className="text-slate-400 font-normal">(128 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2">Modern Abstract Object</h1>
              <p className="text-3xl font-light text-slate-900">¥12,800</p>
            </div>

            <div className="prose text-slate-500 leading-relaxed">
              <p>
                モダンなインテリアに最適な抽象的な3Dオブジェクト。
                高品質な素材を使用し、どのような空間にも調和するデザインです。
                リビングルームやオフィスのアクセントとして最適です。
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> 1年間の品質保証</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> 30日間返品無料</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <p className="text-center text-slate-400 text-xs mt-3">Free shipping on all orders over ¥20,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Section (Bottom) */}
      <div className="w-full bg-slate-900 py-12 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Implementation Key Points</h3>
          <p className="text-slate-400 mb-8">基本的なCanvasのセットアップと、Suspenseを使ったローディング制御がポイントです。</p>
          <CodeBlock title="Sample1.tsx (Excerpt)" code={sampleCode} />
        </div>
      </div>
    </div>
  );
}