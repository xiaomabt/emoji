import { useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import EmojiGrid from './components/EmojiGrid';
import EmojiModal from './components/EmojiModal';
import { useEmoji } from './hooks/useEmoji';

export default function App() {
  const {
    categories,
    filteredEmojis,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedCategoryData,
  } = useEmoji();

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleCloseModal = () => {
    setSelectedEmoji(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <CategoryNav 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchQuery && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-gray-600">搜索结果:</span>
            <span className="font-medium text-indigo-600">" {searchQuery} "</span>
            <span className="text-gray-400">({filteredEmojis.length} 个结果)</span>
            <button
              onClick={() => setSearchQuery('')}
              className="ml-2 px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
            >
              清除搜索
            </button>
          </div>
        )}

        {selectedCategoryData && !searchQuery && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-2xl">{selectedCategoryData.icon}</span>
              {selectedCategoryData.name}
            </h2>
            <p className="text-gray-500 mt-1">共 {filteredEmojis.length} 个Emoji</p>
          </div>
        )}

        <EmojiGrid emojis={filteredEmojis} onEmojiClick={handleEmojiClick} />
      </main>

      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>Emoji资源库 - 发现并下载您喜爱的Emoji图标</p>
        </div>
      </footer>

      {selectedEmoji && (
        <EmojiModal emoji={selectedEmoji} onClose={handleCloseModal} />
      )}
    </div>
  );
}
