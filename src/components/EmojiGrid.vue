<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Emoji } from '../data/emojis';
import EmojiCard from './EmojiCard.vue';

const props = defineProps<{
  emojis: Emoji[];
}>();

const emit = defineEmits<{
  emojiClick: [emoji: Emoji];
}>();

const ITEMS_PER_PAGE = 40;
const currentPage = ref(1);

watch(() => props.emojis.length, () => {
  currentPage.value = 1;
});

const totalPages = () => Math.ceil(props.emojis.length / ITEMS_PER_PAGE);
const startIndex = () => (currentPage.value - 1) * ITEMS_PER_PAGE;
const currentEmojis = () => props.emojis.slice(startIndex(), startIndex() + ITEMS_PER_PAGE);

const handlePageChange = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleEmojiClick = (emoji: Emoji) => {
  emit('emojiClick', emoji);
};

const getPageNumbers = () => {
  const pages: (number | string)[] = [];
  const total = totalPages();
  
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= currentPage.value - 1 && i <= currentPage.value + 1)) {
      pages.push(i);
    } else if (i === currentPage.value - 2 || i === currentPage.value + 2) {
      pages.push('...');
    }
  }
  
  return pages;
};
</script>

<template>
  <div>
    <div v-if="emojis.length === 0" class="flex flex-col items-center justify-center py-20 text-gray-500">
      <span class="text-6xl mb-4">{"🔍"}</span>
      <p class="text-lg font-medium">没有找到匹配的 Emoji</p>
      <p class="text-sm mt-2">请尝试使用其他关键词搜索</p>
    </div>
    
    <div v-else class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4">
      <EmojiCard
        v-for="emoji in currentEmojis()"
        :key="emoji.id"
        :emoji="emoji"
        @click="handleEmojiClick"
      />
    </div>

    <div v-if="totalPages() > 1" class="flex justify-center items-center gap-2 mt-8 pb-8">
      <button
        @click="handlePageChange(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        上一页
      </button>

      <div class="flex gap-1">
        <template v-for="(page, index) in getPageNumbers()" :key="`page-${index}`">
          <button
            v-if="typeof page === 'number'"
            @click="handlePageChange(page)"
            :class="[
              'min-w-[40px] h-10 rounded-lg transition-colors',
              currentPage === page
                ? 'text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
            :style="currentPage === page ? { backgroundColor: 'var(--skin-color, #6366f1)' } : {}"
          >
            {{ page }}
          </button>
          <span v-else class="px-2 py-2 text-gray-400">...</span>
        </template>
      </div>

      <button
        @click="handlePageChange(currentPage + 1)"
        :disabled="currentPage === totalPages()"
        class="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        下一页
      </button>
    </div>

    <div v-if="emojis.length > 0" class="text-center text-sm text-gray-500 mb-4">
      显示 {{ startIndex() + 1 }}-{{ Math.min(startIndex() + ITEMS_PER_PAGE, emojis.length) }}，共 {{ emojis.length }} 个 Emoji
    </div>
  </div>
</template>