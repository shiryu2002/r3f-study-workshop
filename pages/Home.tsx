import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

function HeroMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // マウス位置に応じた微妙な動き
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 2.5 + state.mouse.x * 0.5, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.mouse.y * 0.5, 0.1);
    }

    if (materialRef.current) {
      // 色をゆっくり変化させる (青〜紫〜シアンあたりを循環)
      const time = state.clock.getElapsedTime();
      const hue = 0.6 + Math.sin(time * 0.3) * 0.15; // 0.45(シアン寄り) ~ 0.75(紫寄り)
      materialRef.current.color.setHSL(hue, 0.7, 0.5);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh 
        ref={meshRef} 
        position={[2.5, 0, 0]} 
        scale={1.2}
      >
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#4338ca"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.5}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingShape({ position, color, scale = 1, speed = 1, children }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.015 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {children}
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.8} 
          transparent 
          opacity={0.8} 
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
      
      <HeroMesh />
      
      {/* 背景に浮かぶ装飾的なオブジェクト */}
      <FloatingShape position={[-4, 3, -5]} color="#3b82f6" scale={0.5} speed={1.5}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
      </FloatingShape>
      <FloatingShape position={[-3, -3, -2]} color="#8b5cf6" scale={0.8} speed={1}>
        <octahedronGeometry />
      </FloatingShape>
      <FloatingShape position={[4, -4, -4]} color="#06b6d4" scale={0.6} speed={0.8}>
        <boxGeometry />
      </FloatingShape>
      
      <Environment preset="city" />
    </>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 pointer-events-none">
        <div className="text-center space-y-6 pointer-events-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-4 animate-pulse">
            <Box size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            React Three Fiber <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Basic Workshop
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
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

        <div className="mt-12 text-center pointer-events-auto">
          <div className="inline-block text-slate-300 text-3xl font-medium shadow font-bold">
            <strong>Index</strong>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8 pointer-events-auto">
          <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-2 group duration-300">
            <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">01. What is R3F ?</div>
            <p className="text-slate-400">
              React-Three-Fiber (R3F) の基礎について学びます。
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all hover:-translate-y-2 group duration-300">
            <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">02. How To Display</div>
            <p className="text-slate-400">
              ReactのStateを使って3Dシーンを制御します。
              色、サイズ、回転速度などをUIから操作する方法を学びます。
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-2 group duration-300">
            <div className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">03. Your Model</div>
            <p className="text-slate-400">
              実際に手元の3Dモデルファイルをブラウザ上でロードして表示するビューワーを作成します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}