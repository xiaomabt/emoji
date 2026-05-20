import { Search, Sparkles } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Emoji资源库</h1>
              <p className="text-white/80 text-sm">发现并下载您喜爱的Emoji</p>
            </div>
          </div>
          
          <div className="w-full sm:w-96">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <SearchBar 
                value={searchQuery} 
                onChange={onSearchChange} 
                placeholder="搜索Emoji..."
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
