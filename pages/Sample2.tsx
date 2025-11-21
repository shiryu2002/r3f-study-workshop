import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { ArrowLeft, ArrowRight, Settings2, RotateCw, ZoomIn, Palette } from "lucide-react";
import { Loader, Model } from "../components/SceneComponents";
import { CodeBlock } from "../components/CodeBlock";

export default function Sample2() {
  const [scale, setScale] = useState(1.2);
  const [rotationSpeed, setRotationSpeed] = useState(0.5);
  const [color, setColor] = useState("#4f46e5"); // Indigo-600
  const [envIntensity, setEnvIntensity] = useState(1);

  const colorOptions = [
    { name: "Indigo", value: "#4f46e5" },
    { name: "Rose", value: "#e11d48" },
    { name: "Emerald", value: "#059669" },
    { name: "Amber", value: "#d97706" },
    { name: "Slate", value: "#475569" },
  ];

  const sampleCode = `
// ReactのStateを3DコンポーネントのPropsとして渡すだけで、
// インタラクティブな3D表現が可能になります。

const [scale, setScale] = useState(1.2);
const [color, setColor] = useState("#4f46e5");

// ...

<Canvas>
  <Suspense fallback={<Loader />}>
    {/* Stateの値を渡す */}
    <Model 
      scale={scale} 
      color={color} 
      rotationSpeed={rotationSpeed} 
    />
    <Environment preset="city" />
  </Suspense>
</Canvas>
`;

  return (
    <div className="w-full pt-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
           <Link to="/sample1" className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-sm font-medium">
             <ArrowLeft size={16} /> Back to Sample 1
           </Link>
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase hidden sm:block">Step 2: Interactive Configurator</h2>
              <Link to="/extra" className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
                Next: Bonus AI Tools <ArrowRight size={16} />
              </Link>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Canvas Area (Large) */}
          <div className="lg:col-span-8 h-[500px] lg:h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden relative border border-gray-200">
            <div className="absolute top-6 left-6 z-10">
               <h3 className="text-2xl font-bold text-slate-900">Customization</h3>
               <p className="text-slate-500 text-sm">Interact with the model in real-time</p>
            </div>

            <Canvas camera={{ position: [0, 1, 5], fov: 40 }} shadows>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              
              <Suspense fallback={<Loader />}>
                <Model 
                  url="/sample.glb" 
                  scale={scale} 
                  color={color} 
                  rotationSpeed={rotationSpeed} 
                />
                <Environment preset="city" environmentIntensity={envIntensity} />
                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color={color} />
              </Suspense>
              
              <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} />
            </Canvas>

            <div className="absolute bottom-4 right-6 text-xs text-slate-400 pointer-events-none">
              Drag to rotate • Scroll to zoom
            </div>
          </div>

          {/* Controls Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Settings2 className="text-slate-900" size={20} />
                <h4 className="font-bold text-lg text-slate-900">Configurator</h4>
              </div>

              <div className="space-y-8">
                
                {/* Color Picker */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Palette size={16} />
                    Material Color
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setColor(opt.value)}
                        className={`w-10 h-10 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                          color === opt.value ? "ring-2 ring-offset-2 ring-slate-900 scale-110" : ""
                        }`}
                        style={{ backgroundColor: opt.value }}
                        title={opt.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Scale Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <ZoomIn size={16} /> Scale
                    </div>
                    <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{scale.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                </div>

                {/* Rotation Speed Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <RotateCw size={16} /> Auto Rotation
                    </div>
                    <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{rotationSpeed.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5.0"
                    step="0.1"
                    value={rotationSpeed}
                    onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                </div>

                 {/* Environment Intensity */}
                 <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <span className="text-lg leading-none">☀</span> Lighting
                    </div>
                    <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{envIntensity.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.0"
                    step="0.1"
                    value={envIntensity}
                    onChange={(e) => setEnvIntensity(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

       {/* Code Section (Bottom) */}
       <div className="w-full bg-slate-900 py-12 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Interactivity Logic</h3>
            <p className="text-slate-400 mb-8">Canvasの外にあるHTML要素(input)の状態を、Canvas内の3Dモデルへ伝播させています。</p>
            <CodeBlock title="Sample2.tsx (Excerpt)" code={sampleCode} />
        </div>
      </div>
    </div>
  );
}