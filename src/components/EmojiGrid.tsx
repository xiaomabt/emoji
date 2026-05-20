import { useState, useEffect } from "react";
import EmojiCard from "./EmojiCard";

const ITEMS_PER_PAGE = 40;

export default function EmojiGrid({ emojis, onEmojiClick }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [emojis.length]);

  if (emojis.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <span className="text-6xl mb-4">{"🔍"}</span>
        <p className="text-lg font-medium">没有找到匹配的 Emoji</p>
        <p className="text-sm mt-2">请尝试使用其他关键词搜索</p>
      </div>
    );
  }

  const totalPages = Math.ceil(emojis.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEmojis = emojis.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4">
        {currentEmojis.map((emoji) => (
          <EmojiCard key={emoji.id} emoji={emoji} onClick={() => onEmojiClick(emoji)} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 pb-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            上一页
          </button>

          <div className="flex gap-1">
            {getPageNumbers().map((page, index) => (
              typeof page === "number" ? (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[40px] h-10 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={`ellipsis-${index}`} className="px-2 py-2 text-gray-400">
                  ...
                </span>
              )
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            下一页
          </button>
        </div>
      )}

      <div className="text-center text-sm text-gray-500 mb-4">
        显示 {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, emojis.length)}，共 {emojis.length} 个 Emoji
      </div>
    </div>
  );
}