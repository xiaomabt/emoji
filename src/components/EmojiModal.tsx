import { useState } from "react";
import { X, Download, Copy, Check } from "lucide-react";
import { downloadEmoji } from "../utils/download";

const SIZE_OPTIONS = [64, 128, 256, 512];

export default function EmojiModal({ emoji, onClose }) {
  const [format, setFormat] = useState("png");
  const [size, setSize] = useState(128);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emoji.emoji);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadEmoji(emoji.emoji, emoji.name, { format, size });
    } catch (error) {
      console.error("下载失败:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-modal">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <span className="text-7xl">{emoji.emoji}</span>
            <h2 className="text-2xl font-bold mt-4">{emoji.name}</h2>
            <p className="text-white/80 mt-1">{emoji.unicode}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleCopy}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  复制
                </>
              )}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">输出格式</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setFormat("png")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    format === "png"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  PNG
                </button>
                <button
                  onClick={() => setFormat("svg")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    format === "svg"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  SVG
                </button>
              </div>
            </div>

            {format === "png" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">图片尺寸</label>
                <div className="grid grid-cols-4 gap-2">
                  {SIZE_OPTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3 px-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                        size === s
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {s}x{s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-4 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className={`w-5 h-5 ${downloading ? "animate-bounce" : ""}`} />
              {downloading ? "下载中..." : "下载"}
            </button>
          </div>

          {emoji.tags.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">标签</label>
              <div className="flex flex-wrap gap-2">
                {emoji.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}