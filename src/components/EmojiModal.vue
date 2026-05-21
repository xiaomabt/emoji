<script setup lang="ts">
import { ref } from 'vue';
import { X, Download, Copy, Check, Heart } from 'lucide-vue-next';
import type { Emoji } from '../data/emojis';
import { downloadEmoji } from '../utils/download';

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

const props = defineProps<{
  emoji: Emoji;
  darkMode: boolean;
  isFavorite: boolean;
  currentUser: User | null;
}>();

const emit = defineEmits<{
  close: [];
  'toggle-favorite': [];
}>();

const SIZE_OPTIONS = [64, 128, 256, 512];

const format = ref('png');
const size = ref(128);
const copied = ref(false);
const downloading = ref(false);
const copyFormat = ref('emoji');

const copyFormats = [
  { id: 'emoji', name: 'Emoji', getValue: (e: Emoji) => e.emoji },
  { id: 'unicode', name: 'Unicode', getValue: (e: Emoji) => e.unicode },
  { id: 'html', name: 'HTML', getValue: (e: Emoji) => `&#x${e.unicode.replace('U+', '')};` },
  { id: 'css', name: 'CSS', getValue: (e: Emoji) => `\\${e.unicode.replace('U+', '')}` },
];

const handleCopy = () => {
  const format = copyFormats.find(f => f.id === copyFormat.value);
  if (format) {
    navigator.clipboard.writeText(format.getValue(props.emoji));
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  }
};

const handleDownload = async () => {
  downloading.value = true;
  try {
    await downloadEmoji(props.emoji.emoji, props.emoji.name, { format: format.value, size: size.value });
  } catch (error) {
    console.error('下载失败:', error);
  } finally {
    downloading.value = false;
  }
};

const handleClose = () => {
  emit('close');
};

const handleToggleFavorite = () => {
  emit('toggle-favorite');
};
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="handleClose"
    />
    
    <div :class="['relative rounded-2xl shadow-2xl w-full max-w-md overflow-hidden', darkMode ? 'bg-gray-800' : 'bg-white']">
      <div class="p-6 text-white" :style="{ background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' }">
        <div class="absolute top-4 right-4 flex items-center gap-2">
          <button
            v-if="currentUser"
            @click="handleToggleFavorite"
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center transition-all',
              isFavorite ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
            ]"
            :title="isFavorite ? '取消收藏' : '添加收藏'"
          >
            <Heart :class="['w-5 h-5', isFavorite ? 'fill-current' : '']" />
          </button>
          <button
            @click="handleClose"
            class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="text-center">
          <span class="text-7xl">{{ emoji.emoji }}</span>
          <h2 class="text-2xl font-bold mt-4">{{ emoji.name }}</h2>
          <p class="text-white/80 mt-1">{{ emoji.unicode }}</p>
        </div>
      </div>

      <div :class="['p-6', darkMode ? 'bg-gray-800' : 'bg-white']">
        <div class="space-y-4 mb-6">
          <div :class="['flex gap-4', darkMode ? 'text-gray-300' : 'text-gray-700']">
            <label class="text-sm font-medium">复制格式</label>
            <div class="flex gap-2 flex-1">
              <button
                v-for="f in copyFormats"
                :key="f.id"
                @click="copyFormat = f.id"
                :class="[
                  'py-1.5 px-3 rounded-lg text-sm font-medium transition-all',
                  copyFormat === f.id
                    ? 'text-white'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
                :style="copyFormat === f.id ? { backgroundColor: 'var(--skin-color, #6366f1)' } : {}"
              >
                {{ f.name }}
              </button>
            </div>
          </div>
          <button
            @click="handleCopy"
            :class="[
              'w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2',
              copied
                ? 'bg-green-500 text-white'
                : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <template v-if="copied">
              <Check class="w-5 h-5" />
              已复制
            </template>
            <template v-else>
              <Copy class="w-5 h-5" />
              复制 {{ copyFormats.find(f => f.id === copyFormat)?.name }}
            </template>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">输出格式</label>
            <div class="flex gap-2">
              <button
                @click="format = 'png'"
                :class="[
                  'flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200',
                  format === 'png'
                    ? 'text-white shadow-md'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
                :style="format === 'png' ? { background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' } : {}"
              >
                PNG
              </button>
              <button
                @click="format = 'svg'"
                :class="[
                  'flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200',
                  format === 'svg'
                    ? 'text-white shadow-md'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
                :style="format === 'svg' ? { background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' } : {}"
              >
                SVG
              </button>
            </div>
          </div>

          <div v-if="format === 'png'">
            <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">图片尺寸</label>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="s in SIZE_OPTIONS"
                :key="s"
                @click="size = s"
                :class="[
                  'py-3 px-2 rounded-xl font-medium transition-all duration-200 text-sm',
                  size === s
                    ? 'text-white shadow-md'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
                :style="size === s ? { background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' } : {}"
              >
                {{ s }}x{{ s }}
              </button>
            </div>
          </div>

          <button
            @click="handleDownload"
            :disabled="downloading"
            class="w-full py-4 px-4 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :style="{ background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' }"
          >
            <Download :class="['w-5 h-5', downloading ? 'animate-bounce' : '']" />
            {{ downloading ? '下载中...' : '下载' }}
          </button>
        </div>

        <div v-if="emoji.tags.length > 0" :class="['mt-6 pt-4 border-t', darkMode ? 'border-gray-700' : 'border-gray-100']">
          <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">标签</label>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in emoji.tags"
              :key="index"
              :class="[
                'px-3 py-1 rounded-full text-sm',
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              ]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>