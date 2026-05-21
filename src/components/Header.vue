<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';

interface SkinColorItem {
  id: string;
  name: string;
  gradient: string;
}

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

defineProps<{
  darkMode: boolean;
  showFavorites: boolean;
  favoritesCount: number;
  currentUser: User | null;
}>();

const emit = defineEmits<{
  'toggle-dark-mode': [];
  'toggle-favorites': [];
  'toggle-login': [];
  'logout': [];
}>();

const skinColor = inject<Ref<string>>('skinColor')!;
const skinColors = inject<SkinColorItem[]>('skinColors')!;
const showColorPicker = ref(false);

const currentSkin = (): SkinColorItem => {
  return skinColors.find(c => c.id === skinColor.value) || skinColors[0];
};

const selectSkin = (colorId: string) => {
  skinColor.value = colorId;
  localStorage.setItem('emoji-skin-color', colorId);
  showColorPicker.value = false;
};

const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value;
};
</script>

<template>
  <header :class="['bg-gradient-to-r', currentSkin().gradient, 'text-white shadow-lg']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-4xl">🌟</span>
          <div>
            <h1 class="text-2xl font-bold">Emoji资源库</h1>
            <p class="text-white/80 text-sm">发现并下载您喜爱的Emoji</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <button
            v-if="currentUser"
            @click="emit('toggle-favorites')"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              showFavorites ? 'bg-white text-gray-800' : 'bg-white/20 hover:bg-white/30'
            ]"
          >
            <span>❤️</span>
            <span>收藏</span>
            <span 
              v-if="favoritesCount > 0"
              class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              {{ favoritesCount }}
            </span>
          </button>
          
          <button
            @click="emit('toggle-dark-mode')"
            class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm font-medium"
          >
            <span>{{ darkMode ? '☀️' : '🌙' }}</span>
            <span>{{ darkMode ? '浅色' : '深色' }}</span>
          </button>
          
          <div class="relative">
            <button
              @click="toggleColorPicker"
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm font-medium"
            >
              <span class="w-4 h-4 rounded-full" :class="['bg-gradient-to-r', currentSkin().gradient]"></span>
              <span>皮肤颜色</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              v-if="showColorPicker"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
            >
              <div
                v-for="color in skinColors"
                :key="color.id"
                @click="selectSkin(color.id)"
                :class="[
                  'flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50',
                  skinColor === color.id ? 'bg-gray-50' : ''
                ]"
              >
                <span class="w-6 h-6 rounded-full" :class="['bg-gradient-to-r', color.gradient]"></span>
                <span class="text-gray-700 text-sm">{{ color.name }}</span>
                <svg
                  v-if="skinColor === color.id"
                  class="w-4 h-4 ml-auto text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div v-if="currentUser" class="flex items-center gap-2 pl-3 border-l border-white/20">
            <span class="text-2xl">{{ currentUser.avatar }}</span>
            <div class="text-left">
              <p class="text-sm font-medium">{{ currentUser.username }}</p>
              <p class="text-xs text-white/70">{{ currentUser.email }}</p>
            </div>
            <button
              @click="emit('logout')"
              class="ml-2 px-3 py-1 bg-red-500/80 hover:bg-red-500 rounded-full text-xs font-medium transition-colors"
            >
              退出
            </button>
          </div>
          <button
            v-else
            @click="emit('toggle-login')"
            class="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
          >
            <span>🔑</span>
            <span>登录</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>