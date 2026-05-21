<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import CategoryNav from './components/CategoryNav.vue'
import EmojiGrid from './components/EmojiGrid.vue'
import EmojiModal from './components/EmojiModal.vue'
import CustomCursor from './components/CustomCursor.vue'
import FavoritePanel from './components/FavoritePanel.vue'
import LoginModal from './components/LoginModal.vue'
import { categories, searchEmojis, type Emoji } from './data/emojis'

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)
const selectedEmoji = ref<Emoji | null>(null)
const showFavorites = ref(false)

const savedSkinColor = localStorage.getItem('emoji-skin-color')
const skinColor = ref(savedSkinColor || 'indigo-purple')

const savedDarkMode = localStorage.getItem('emoji-dark-mode')
const darkMode = ref(savedDarkMode === 'true')

const favorites = ref<string[]>([])

const savedUser = localStorage.getItem('emoji-user')
const currentUser = ref(savedUser ? JSON.parse(savedUser) : null)
const showLoginModal = ref(false)

const loadUserFavorites = () => {
  if (currentUser.value) {
    const savedFavorites = localStorage.getItem(`emoji-favorites-${currentUser.value.id}`)
    favorites.value = savedFavorites ? JSON.parse(savedFavorites) : []
  } else {
    favorites.value = []
  }
}

if (currentUser.value) {
  loadUserFavorites()
}

const skinColors = [
 { id: 'indigo-purple', name: '靛紫', gradient: 'from-indigo-500 to-purple-500' },
 { id: 'pink-rose', name: '粉玫', gradient: 'from-pink-500 to-rose-500' },
 { id: 'cyan-blue', name: '青蓝', gradient: 'from-cyan-500 to-blue-500' },
 { id: 'emerald-teal', name: '翠绿', gradient: 'from-emerald-500 to-teal-500' },
 { id: 'orange-red', name: '橙红', gradient: 'from-orange-500 to-red-500' },
 { id: 'amber-yellow', name: '琥珀', gradient: 'from-amber-500 to-yellow-500' },
]

provide('skinColor', skinColor)
provide('skinColors', skinColors)
provide('darkMode', darkMode)
provide('favorites', favorites)

interface User {
  id: string
  username: string
  email: string
  avatar: string
}

const handleLogin = (user: User) => {
  currentUser.value = user
  localStorage.setItem('emoji-user', JSON.stringify(user))
  showLoginModal.value = false
  loadUserFavorites()
}

const handleLogout = () => {
  currentUser.value = null
  favorites.value = []
  localStorage.removeItem('emoji-user')
}

const toggleDarkMode = () => {
 darkMode.value = !darkMode.value
 localStorage.setItem('emoji-dark-mode', darkMode.value.toString())
}

const toggleFavorite = (emojiId: string) => {
  if (!currentUser.value) {
    showLoginModal.value = true
    return
  }
  
  const index = favorites.value.indexOf(emojiId)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(emojiId)
  }
  localStorage.setItem(`emoji-favorites-${currentUser.value.id}`, JSON.stringify(favorites.value))
}

const isFavorite = (emojiId: string) => {
 return favorites.value.includes(emojiId)
}

const allEmojis = computed(() => {
 return categories.flatMap(c => c.emojis)
})

const randomEmojis = computed(() => {
 const shuffled = [...allEmojis.value].sort(() => Math.random() - 0.5)
 return shuffled.slice(0, 12)
})

const colorMap: Record<string, { primary: string; secondary: string }> = {
 'indigo-purple': { primary: '#6366f1', secondary: '#8b5cf6' },
 'pink-rose': { primary: '#ec4899', secondary: '#f43f5e' },
 'cyan-blue': { primary: '#06b6d4', secondary: '#3b82f6' },
 'emerald-teal': { primary: '#10b981', secondary: '#14b8a6' },
 'orange-red': { primary: '#f97316', secondary: '#ef4444' },
 'amber-yellow': { primary: '#f59e0b', secondary: '#eab308' },
}

const skinColorHex = computed(() => {
 return colorMap[skinColor.value]?.primary || '#6366f1'
})

const skinColorSecondaryHex = computed(() => {
 return colorMap[skinColor.value]?.secondary || '#8b5cf6'
})

const filteredEmojis = computed(() => {
 const emojis = selectedCategory.value
 ? categories.find(c => c.id === selectedCategory.value)?.emojis || []
 : searchEmojis(searchQuery.value)
 return emojis
})

const handleCategoryChange = (categoryId: string | null) => {
 selectedCategory.value = categoryId
}

const handleSearch = (query: string) => {
 searchQuery.value = query
 selectedCategory.value = null
}

const handleEmojiClick = (emoji: Emoji) => {
 selectedEmoji.value = emoji
}

const handleCloseModal = () => {
 selectedEmoji.value = null
}
</script>

<template>
  <div 
    :class="['min-h-screen', darkMode ? 'bg-gray-900' : 'bg-gray-50']" 
    :style="{ '--skin-color': skinColorHex, '--skin-color-secondary': skinColorSecondaryHex }"
  >
    <CustomCursor />
    <Header 
      :dark-mode="darkMode"
      :show-favorites="showFavorites"
      :favorites-count="favorites.length"
      :current-user="currentUser"
      @toggle-dark-mode="toggleDarkMode"
      @toggle-favorites="showFavorites = !showFavorites"
      @toggle-login="showLoginModal = true"
      @logout="handleLogout"
    />
    
    <FavoritePanel 
      v-if="showFavorites"
      :favorites="favorites"
      :dark-mode="darkMode"
      @close="showFavorites = false"
      @emoji-click="handleEmojiClick"
    />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SearchBar 
        :dark-mode="darkMode"
        @search="handleSearch" 
      />
      
      <CategoryNav 
        :categories="categories" 
        :selected-category="selectedCategory"
        :dark-mode="darkMode"
        @select="handleCategoryChange" 
      />
      
      <div v-if="selectedCategory === null && searchQuery === ''" class="mt-6">
        <div :class="['p-4 rounded-xl mb-6', darkMode ? 'bg-gray-800' : 'bg-white']">
          <h3 :class="['text-lg font-semibold mb-4', darkMode ? 'text-white' : 'text-gray-800']">🎲 随机推荐</h3>
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            <div
              v-for="emoji in randomEmojis"
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
      
      <div class="mt-6">
        <EmojiGrid 
          :emojis="filteredEmojis" 
          :dark-mode="darkMode"
          @emoji-click="handleEmojiClick" 
        />
      </div>
    </main>
    
    <EmojiModal 
      v-if="selectedEmoji" 
      :emoji="selectedEmoji" 
      :dark-mode="darkMode"
      :is-favorite="isFavorite(selectedEmoji.id)"
      :current-user="currentUser"
      @close="handleCloseModal"
      @toggle-favorite="toggleFavorite(selectedEmoji.id)"
    />
    
    <LoginModal 
      v-if="showLoginModal"
      :dark-mode="darkMode"
      @close="showLoginModal = false"
      @login="handleLogin"
    />
  </div>
</template>