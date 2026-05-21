<script setup lang="ts">
import type { Emoji } from '../data/emojis'

const props = defineProps<{
  emoji: Emoji
  darkMode: boolean
}>()

const emit = defineEmits<{
  click: [emoji: Emoji]
}>()

const handleClick = () => {
  emit('click', props.emoji)
}
</script>

<template>
  <button
    @click="handleClick"
    :class="[
      'group rounded-xl p-3 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border',
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-100 hover:border-gray-200'
    ]"
    :title="emoji.name"
  >
    <span 
      class="text-2xl sm:text-3xl mb-2 font-emoji"
      style="font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif; font-smooth: always; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
    >
      {{ emoji.emoji }}
    </span>
    <span :class="['text-xs truncate w-full text-center', darkMode ? 'text-gray-400' : 'text-gray-500']">{{ emoji.name }}</span>
  </button>
</template>