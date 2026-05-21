<script setup lang="ts">
import { computed } from 'vue';
import { categories, type Emoji } from '../data/emojis';

const props = defineProps<{
  favorites: string[];
  darkMode: boolean;
}>();

const emit = defineEmits<{
  close: [];
  emojiClick: [emoji: Emoji];
}>();

const allEmojis = computed(() => {
  return categories.flatMap(c => c.emojis);
});

const favoriteEmojis = computed(() => {
  return allEmojis.value.filter(e => props.favorites.includes(e.id));
});

const handleEmojiClick = (emoji: Emoji) => {
  emit('emojiClick', emoji);
};
</script>

<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center p-4">
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="emit('close')"
    />
    
    <div :class="['relative rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden', darkMode ? 'bg-gray-800' : 'bg-white']">
      <div :class="['p-6 border-b', darkMode ? 'border-gray-700' : 'border-gray-200']">
        <div class="flex items-center justify-between">
          <h2 :class="['text-xl font-bold', darkMode ? 'text-white' : 'text-gray-800']">
            ❤️ 我的收藏
          </h2>
          <button
            @click="emit('close')"
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
              darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
            ]"
          >
            �?          </button>
        </div>
        <p :class="['text-sm mt-1', darkMode ? 'text-gray-400' : 'text-gray-500']">
          您收藏了 {{ favorites.length }} �?Emoji
        </p>
      </div>
      
      <div class="p-6 overflow-y-auto max-h-[60vh]">
        <div v-if="favoriteEmojis.length === 0" :class="['flex flex-col items-center justify-center py-12', darkMode ? 'text-gray-400' : 'text-gray-500']">
          <span class="text-6xl mb-4">💔</span>
          <p class="text-lg">还没有收藏任�?Emoji</p>
          <p class="text-sm mt-2">点击 Emoji 详情中的❤️按钮添加收藏</p>
        </div>
        
        <div v-else class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          <div
            v-for="emoji in favoriteEmojis"
            :key="emoji.id"
            @click="handleEmojiClick(emoji)"
            :class="[
              'flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all hover:scale-110',
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            ]"
          >
            <span class="text-3xl">{{ emoji.emoji }}</span>
            <span :class="['text-xs mt-1', darkMode ? 'text-gray-400' : 'text-gray-500']">{{ emoji.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
