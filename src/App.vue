<script setup lang="ts">import { ref, computed, provide } from 'vue';
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue';
import CategoryNav from './components/CategoryNav.vue';
import EmojiGrid from './components/EmojiGrid.vue';
import EmojiModal from './components/EmojiModal.vue';
import { categories, searchEmojis, type Emoji } from './data/emojis';
const searchQuery = ref('');
const selectedCategory = ref<string | null>(null);
const selectedEmoji = ref<Emoji | null>(null);
const skinColor = ref('indigo-purple');
const skinColors = [
 { id: 'indigo-purple', name: '靛紫', gradient: 'from-indigo-500 to-purple-500' },
 { id: 'pink-rose', name: '粉玫', gradient: 'from-pink-500 to-rose-500' },
 { id: 'cyan-blue', name: '青蓝', gradient: 'from-cyan-500 to-blue-500' },
 { id: 'emerald-teal', name: '翠绿', gradient: 'from-emerald-500 to-teal-500' },
 { id: 'orange-red', name: '橙红', gradient: 'from-orange-500 to-red-500' },
 { id: 'amber-yellow', name: '琥珀', gradient: 'from-amber-500 to-yellow-500' },
];
provide('skinColor', skinColor);
provide('skinColors', skinColors);

const colorMap: Record<string, { primary: string; secondary: string }> = {
 'indigo-purple': { primary: '#6366f1', secondary: '#8b5cf6' },
 'pink-rose': { primary: '#ec4899', secondary: '#f43f5e' },
 'cyan-blue': { primary: '#06b6d4', secondary: '#3b82f6' },
 'emerald-teal': { primary: '#10b981', secondary: '#14b8a6' },
 'orange-red': { primary: '#f97316', secondary: '#ef4444' },
 'amber-yellow': { primary: '#f59e0b', secondary: '#eab308' },
};

const skinColorHex = computed(() => {
 return colorMap[skinColor.value]?.primary || '#6366f1';
});

const skinColorSecondaryHex = computed(() => {
 return colorMap[skinColor.value]?.secondary || '#8b5cf6';
});

const filteredEmojis = computed(() => {
 const emojis = selectedCategory.value
 ? categories.find(c => c.id === selectedCategory.value)?.emojis || []
 : searchEmojis(searchQuery.value);
 return emojis;
});
const handleCategoryChange = (categoryId: string | null) => {
 selectedCategory.value = categoryId;
};
const handleSearch = (query: string) => {
 searchQuery.value = query;
 selectedCategory.value = null;
};
const handleEmojiClick = (emoji: Emoji) => {
 selectedEmoji.value = emoji;
};
const handleCloseModal = () => {
 selectedEmoji.value = null;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50" :style="{ '--skin-color': skinColorHex, '--skin-color-secondary': skinColorSecondaryHex }">
    <Header />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SearchBar @search="handleSearch" />
      
      <CategoryNav 
        :categories="categories" 
        :selected-category="selectedCategory"
        @select="handleCategoryChange" 
      />
      
      <div class="mt-6">
        <EmojiGrid 
          :emojis="filteredEmojis" 
          @emoji-click="handleEmojiClick" 
        />
      </div>
    </main>
    
    <EmojiModal 
      v-if="selectedEmoji" 
      :emoji="selectedEmoji" 
      @close="handleCloseModal" 
    />
  </div>
</template>