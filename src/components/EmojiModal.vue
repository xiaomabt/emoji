<script setup lang="ts">
import { ref } from 'vue';
import { X, Download, Copy, Check } from 'lucide-vue-next';
import type { Emoji } from '../data/emojis';
import { downloadEmoji } from '../utils/download';

const props = defineProps<{
  emoji: Emoji;
}>();

const emit = defineEmits<{
  close: [];
}>();

const SIZE_OPTIONS = [64, 128, 256, 512];

const format = ref('png');
const size = ref(128);
const copied = ref(false);
const downloading = ref(false);

const handleCopy = () => {
  navigator.clipboard.writeText(props.emoji.emoji);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
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
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="handleClose"
    />
    
    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
      <div class="p-6 text-white" :style="{ background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' }">
        <button
          @click="handleClose"
          class="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <X class="w-5 h-5" />
        </button>
        <div class="text-center">
          <span class="text-7xl">{{ emoji.emoji }}</span>
          <h2 class="text-2xl font-bold mt-4">{{ emoji.name }}</h2>
          <p class="text-white/80 mt-1">{{ emoji.unicode }}</p>
        </div>
      </div>

      <div class="p-6">
        <div class="flex gap-4 mb-6">
          <button
            @click="handleCopy"
            :class="[
              'flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2',
              copied
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <template v-if="copied">
              <Check class="w-5 h-5" />
              已复制
            </template>
            <template v-else>
              <Copy class="w-5 h-5" />
              复制
            </template>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">输出格式</label>
            <div class="flex gap-2">
              <button
                @click="format = 'png'"
                :class="[
                  'flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200',
                  format === 'png'
                    ? 'text-white shadow-md'
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
                :style="format === 'svg' ? { background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' } : {}"
              >
                SVG
              </button>
            </div>
          </div>

          <div v-if="format === 'png'">
            <label class="block text-sm font-medium text-gray-700 mb-2">图片尺寸</label>
            <div class="grid grid-cols-4 gap-2">
              <button
            v-for="s in SIZE_OPTIONS"
            :key="s"
            @click="size = s"
            :class="[
              'py-3 px-2 rounded-xl font-medium transition-all duration-200 text-sm',
              size === s
                ? 'text-white shadow-md'
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

        <div v-if="emoji.tags.length > 0" class="mt-6 pt-4 border-t border-gray-100">
          <label class="block text-sm font-medium text-gray-700 mb-2">标签</label>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in emoji.tags"
              :key="index"
              class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>