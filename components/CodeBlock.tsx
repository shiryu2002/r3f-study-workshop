import React from 'react';
import { Terminal } from 'lucide-react';

interface CodeBlockProps {
  title: string;
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ title, code }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1e293b] shadow-xl border border-slate-700 my-8">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] border-b border-slate-700 text-slate-400 text-xs font-mono">
        <Terminal size={14} />
        {title}
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-blue-100 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};