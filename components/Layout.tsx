import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layers, Box, GraduationCap, BookOpen, Upload, Sparkles, Flag, Library } from "lucide-react";
import { BackgroundScene } from "./BackgroundScene";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <GraduationCap size={18} /> },
    { path: "/instruction", label: "Learn", icon: <BookOpen size={18} /> },
    { path: "/sample1", label: "1. Basic", icon: <Box size={18} /> },
    { path: "/sample2", label: "2. Interactive", icon: <Layers size={18} /> },
    { path: "/extra", label: "Bonus: AI", icon: <Sparkles size={18} /> },
    { path: "/sample3", label: "3. Upload", icon: <Upload size={18} /> },
    { path: "/fin", label: "Fin", icon: <Flag size={18} /> },
    { path: "/docs", label: "Docs", icon: <Library size={18} /> },
  ];

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative overflow-hidden">
      {/* ページ全体のスクロールバーを非表示にするスタイル */}
      <style>{`
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }

        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <BackgroundScene />      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/50 supports-[backdrop-filter]:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-100 hover:text-blue-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Box size={20} />
            </div>
            <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">R3F Workshop</span>
          </Link>

          <nav className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap border ${
                    isActive
                      ? "bg-blue-600/20 text-blue-300 border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                      : "text-slate-400 border-transparent hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span className={item.path === '/extra' || item.path.includes('sample') ? "hidden sm:inline" : ""}>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 mt-auto bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          モダンフロントエンド勉強会 2025/11/25 東島
        </div>
      </footer>
    </div>
  );
};