<script setup lang="ts">
import type { Emoji } from '../data/emojis';

const props = defineProps<{
  emoji: Emoji;
}>();

const emit = defineEmits<{
  click: [emoji: Emoji];
}>();

const handleClick = () => {
  emit('click', props.emoji);
};
</script>

<template>
  <button
    @click="handleClick"
    class="group bg-white rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100"
    :title="emoji.name"
  >
    <span 
      class="text-2xl sm:text-3xl mb-2 font-emoji"
      style="font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif; font-smooth: always; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
    >
      {{ emoji.emoji }}
    </span>
    <span class="text-xs text-gray-500 truncate w-full text-center">{{ emoji.name }}</span>
  </button>
</template>