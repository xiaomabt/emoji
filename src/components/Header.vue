<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'

interface SkinColorItem {
  id: string
  name: string
  gradient: string
}

interface User {
  id: string
  username: string
  email: string
  avatar: string
}

defineProps<{
  darkMode: boolean
  showFavorites: boolean
  favoritesCount: number
  currentUser: User | null
}>()

const emit = defineEmits<{
  'toggle-dark-mode': []
  'toggle-favorites': []
  'toggle-login': []
  'logout': []
}>()

const skinColor = inject<Ref<string>>('skinColor')!
const skinColors = inject<SkinColorItem[]>('skinColors')!
const showColorPicker = ref(false)

const currentSkin = (): SkinColorItem => {
  return skinColors.find(c => c.id === skinColor.value) || skinColors[0]
}

const selectSkin = (colorId: string) => {
  skinColor.value = colorId
  localStorage.setItem('emoji-skin-color', colorId)
  showColorPicker.value = false
}

const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value
}
</script>

<template>
  <header :class="['bg-gradient-to-r', currentSkin().gradient, 'text-white shadow-lg']">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 sm:gap-3">
          <span class="text-3xl sm:text-4xl">🌟</span>
          <div class="flex flex-col">
            <h1 class="text-lg sm:text-xl font-bold">Emoji资源库</h1>
            <p class="text-white/70 text-xs sm:text-sm hidden sm:block">发现并下载您喜爱的Emoji</p>
          </div>
        </div>
        
        <div class="flex items-center gap-1.5 sm:gap-2">
          <button
            v-if="currentUser"
            @click="emit('toggle-favorites')"
            :class="[
              'flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all',
              showFavorites ? 'bg-white text-gray-800' : 'bg-white/20 hover:bg-white/30'
            ]"
            :title="showFavorites ? '关闭收藏面板' : '打开收藏面板'"
          >
            <span class="text-base">❤️</span>
            <span class="hidden sm:inline">收藏</span>
            <span 
              v-if="favoritesCount > 0"
              class="bg-red-500 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full"
            >
              {{ favoritesCount }}
            </span>
          </button>
          
          <button
            @click="emit('toggle-dark-mode')"
            class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs sm:text-sm font-medium"
            :title="darkMode ? '切换到浅色模式' : '切换到深色模式'"
          >
            <span>{{ darkMode ? '☀️' : '🌙' }}</span>
            <span class="hidden sm:inline">{{ darkMode ? '浅色' : '深色' }}</span>
          </button>
          
          <div class="relative">
            <button
              @click="toggleColorPicker"
              class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs sm:text-sm font-medium"
              title="切换皮肤颜色"
            >
              <span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full" :class="['bg-gradient-to-r', currentSkin().gradient]"></span>
              <span class="hidden sm:inline">皮肤</span>
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              v-if="showColorPicker"
              class="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-xl py-2 z-50"
            >
              <div
                v-for="color in skinColors"
                :key="color.id"
                @click="selectSkin(color.id)"
                :class="[
                  'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-50',
                  skinColor === color.id ? 'bg-gray-50' : ''
                ]"
              >
                <span class="w-5 h-5 sm:w-6 sm:h-6 rounded-full" :class="['bg-gradient-to-r', color.gradient]"></span>
                <span class="text-gray-700 text-xs sm:text-sm">{{ color.name }}</span>
                <svg
                  v-if="skinColor === color.id"
                  class="w-3 h-3 sm:w-4 sm:h-4 ml-auto text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div v-if="currentUser" class="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-white/20">
            <span class="text-lg sm:text-xl">{{ currentUser.avatar }}</span>
            <div class="text-left hidden sm:block">
              <p class="text-xs sm:text-sm font-medium">{{ currentUser.username }}</p>
              <p class="text-xs text-white/60">{{ currentUser.email }}</p>
            </div>
            <button
              @click="emit('logout')"
              class="px-2 sm:px-3 py-1 bg-red-500/80 hover:bg-red-500 rounded-full text-xs font-medium transition-colors"
              title="退出登录"
            >
              <span class="sm:hidden">🚪</span>
              <span class="hidden sm:inline">退出</span>
            </button>
          </div>
          <button
            v-else
            @click="emit('toggle-login')"
            class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 rounded-full text-xs sm:text-sm font-medium transition-colors"
            title="登录"
          >
            <span>🔑</span>
            <span class="hidden sm:inline">登录</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
