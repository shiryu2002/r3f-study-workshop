import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layers, Box, GraduationCap, BookOpen, Upload, Sparkles, Flag, Library } from "lucide-react";

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
    { path: "/docs", label: "Refs", icon: <Library size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-800 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Box size={20} />
            </div>
            <span className="hidden sm:inline">R3F Workshop</span>
          </Link>

          <nav className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
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
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          React Three Fiber Study Session • 30 Minutes Course
        </div>
      </footer>
    </div>
  );
};