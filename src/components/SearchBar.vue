<script setup lang="ts">
import { ref } from 'vue';
import { Search } from 'lucide-vue-next';

const emit = defineEmits<{
  search: [query: string];
}>();

const inputValue = ref('');

const handleSearch = () => {
  emit('search', inputValue.value);
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Search class="w-5 h-5 text-gray-400" />
    </div>
    <input
      v-model="inputValue"
      type="text"
      placeholder="搜索Emoji..."
      class="search-input w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm transition-all"
      :style="{ '--search-focus-color': 'var(--skin-color, #6366f1)' }"
      @keyup="handleKeydown"
    />
  </div>
</template>

<style scoped>
.search-input:focus {
  outline: none;
  border-color: var(--search-focus-color, #6366f1);
  box-shadow: 0 0 0 2px var(--search-focus-color, #6366f1);
}
</style>