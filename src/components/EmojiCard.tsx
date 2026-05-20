export default function EmojiCard({ emoji, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100"
    >
      <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-105 transition-transform duration-200 select-none" style={{ fontFamily: 'Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>
        {emoji.emoji}
      </span>
      <span className="text-sm text-gray-600 font-medium truncate max-w-full px-2 text-center">
        {emoji.name}
      </span>
    </button>
  );
}
