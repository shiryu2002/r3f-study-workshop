import { Sparkles, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function AnimatedStars() {
  const starsRef = useRef<any>(null);
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });
  return <Stars ref={starsRef} radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
}

export const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
        <Sparkles 
          count={100} 
          scale={12} 
          size={4} 
          speed={0.4} 
          opacity={0.5} 
          color="#4f46e5" // Indigo
        />
        <Sparkles 
          count={50} 
          scale={10} 
          size={6} 
          speed={0.2} 
          opacity={0.3} 
          color="#06b6d4" // Cyan
        />
        <fog attach="fog" args={['#020617', 5, 20]} />
      </Canvas>
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
    </div>
  );
};
