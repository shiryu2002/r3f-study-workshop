import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Sparkles, ExternalLink, Copy, Check } from "lucide-react";

export default function Extra() {
  const [copied, setCopied] = React.useState(false);

  const prompt = "架空のぬいぐるみを描いてほしい。実写 背景は透明 ぬいぐるみ以外の要素は不要(例:付属の小物など)";

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
           <Link to="/sample2" className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-sm font-medium">
             <ArrowLeft size={16} /> Back to Sample 2
           </Link>
           <div className="flex items-center gap-4">
             <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase hidden sm:block">Bonus Stage</h2>
             <Link to="/sample3" className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
               Next: Display Your Model <ArrowRight size={16} />
             </Link>
           </div>
        </div>

        <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-2">
                <Sparkles size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Generative AI 3D Workflow
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                手元に3Dモデルがない場合でも、生成AIを使えば数分でオリジナルのモデルを作成できます。<br/>
                Googleの画像生成モデルと、最新の3D生成AIを組み合わせてみましょう。
            </p>
        </div>

        <div className="space-y-12">
            {/* Step 1 */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                    <h2 className="text-2xl font-bold text-slate-900">Generate Image with Gemini</h2>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                    まずは3Dモデルの元となる画像を生成します。
                    <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1 mx-1">
                        Google AI Studio <ExternalLink size={14} />
                    </a>
                    を開き、右側のModel選択で <strong>Nano Banana (proではない)</strong> を選択してください。<br/>
                    プロンプト入力欄に以下のテキストを入力して実行します。
                </p>

                <div className="relative bg-slate-900 rounded-xl p-6 border border-slate-700 group">
                    <code className="text-purple-200 font-mono text-sm block pr-10">
                        {prompt}
                    </code>
                    <button 
                        onClick={handleCopy}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                </div>
                <div className="mt-4 text-sm text-slate-500">
                    ※ 生成された画像を保存してください。背景が透明でない場合は、背景削除ツールなどで透過させると精度が上がります。
                </div>
            </section>

            {/* Step 2 */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                    <h2 className="text-2xl font-bold text-slate-900">Convert to 3D with Trellis</h2>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                    次に、画像を3Dモデルに変換します。
                    <a href="https://trellis3d.co/ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1 mx-1">
                        Trellis3D <ExternalLink size={14} />
                    </a>
                    へアクセスしてください。
                </p>

                <ol className="space-y-4 text-slate-700 list-disc list-inside pl-2">
                    <li>Trellisのサイトで、先ほど保存した画像をアップロードします。</li>
                    <li>生成ボタンを押し、処理が完了するのを待ちます（通常1〜2分程度）。</li>
                    <li>プレビューが表示されたら、<strong>Download</strong> ボタンから <strong>.glb</strong> 形式を選択してダウンロードしてください。</li>
                </ol>
            </section>

            {/* Step 3 */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-lg text-white text-center">
                <h2 className="text-2xl font-bold mb-4">モデルは準備できましたか?</h2>
                <p className="mb-8 text-blue-100">
                    ダウンロードしたGLBファイルを使って、Webブラウザ上で表示してみましょう。
                </p>
                <Link 
                    to="/sample3" 
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
                >
                    Go to Display <ArrowRight />
                </Link>
            </section>
        </div>

      </div>
    </div>
  );
}