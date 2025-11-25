import React from 'react';
import { Terminal } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  title: string;
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ title, code, language = "tsx" }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1e293b] shadow-xl border border-slate-700 my-8">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] border-b border-slate-700 text-slate-400 text-xs font-mono">
        <Terminal size={14} />
        {title}
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '1rem', background: 'transparent', fontSize: '1rem', lineHeight: '1.5' }}
          codeTagProps={{ style: { fontSize: '1rem' } }}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};