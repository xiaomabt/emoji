<script setup lang="ts">
import { inject, type Ref } from 'vue';
import type { Category } from '../data/emojis';

interface SkinColorItem {
  id: string;
  name: string;
  gradient: string;
}

defineProps<{
  categories: Category[];
  selectedCategory: string | null;
  darkMode: boolean;
}>();

const emit = defineEmits<{
  select: [categoryId: string | null];
}>();

const skinColor = inject<Ref<string>>('skinColor')!;
const skinColors = inject<SkinColorItem[]>('skinColors')!;

const handleSelect = (categoryId: string | null) => {
  emit('select', categoryId);
};
</script>

<template>
  <div class="flex flex-wrap gap-2 mt-4">
    <button
      @click="handleSelect(null)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        selectedCategory === null
          ? 'text-white shadow-md'
          : darkMode 
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
      ]"
      :style="selectedCategory === null ? { backgroundColor: `var(--skin-color, #6366f1)` } : {}"
    >
      全部
    </button>
    
    <button
      v-for="category in categories"
      :key="category.id"
      @click="handleSelect(category.id)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2',
        selectedCategory === category.id
          ? 'text-white shadow-md'
          : darkMode 
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
      ]"
      :style="selectedCategory === category.id ? { backgroundColor: `var(--skin-color, #6366f1)` } : {}"
    >
      <span>{{ category.icon }}</span>
      {{ category.name }}
    </button>
  </div>
</template>