<script setup lang="ts">
import { ref } from 'vue'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-vue-next'

interface User {
  id: string
  username: string
  email: string
  avatar: string
}

defineProps<{
  darkMode: boolean
}>()

const emit = defineEmits<{
  close: []
  login: [user: User]
}>()

const email = ref('')
const password = ref('')
const username = ref('')
const showPassword = ref(false)
const isSignUp = ref(false)
const loading = ref(false)
const passwordError = ref('')

const sampleUsers = [
  { id: '1', email: 'demo@example.com', password: '123456', username: '演示用户', avatar: '👤' },
  { id: '2', email: 'test@test.com', password: 'password', username: '测试用户', avatar: '😊' }
]

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = ''
    return
  }
  
  if (password.value.length < 6) {
    passwordError.value = '密码至少需要6个字符'
  } else if (password.value.length < 8) {
    passwordError.value = '密码强度：弱'
  } else if (password.value.length < 12) {
    passwordError.value = '密码强度：中'
  } else {
    passwordError.value = '密码强度：强'
  }
}

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    alert('请填写邮箱和密码')
    return
  }

  if (isSignUp.value) {
    if (!username.value) {
      alert('请填写用户名')
      return
    }
    
    if (password.value.length < 6) {
      alert('密码至少需要6个字符')
      return
    }
  }

  loading.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1000))

  if (isSignUp.value) {
    const newUser: User = {
      id: Date.now().toString(),
      username: username.value,
      email: email.value,
      avatar: ['👤', '😊', '🤩', '🥳', '🌟', '💫'][Math.floor(Math.random() * 6)]
    }
    emit('login', newUser)
  } else {
    const found = sampleUsers.find(u => u.email === email.value && u.password === password.value)
    if (found) {
      emit('login', found)
    } else {
      alert('邮箱或密码错误\n\n演示账户：\n邮箱: demo@example.com\n密码: 123456')
    }
  }
  
  loading.value = false
}

const handleClose = () => {
  emit('close')
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="handleClose"
    />
    
    <div :class="['relative rounded-2xl shadow-2xl w-full max-w-md overflow-hidden', darkMode ? 'bg-gray-800' : 'bg-white']">
      <div class="p-6" :style="{ background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' }">
        <button
          @click="handleClose"
          :class="[
            'absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors',
            darkMode ? 'bg-black/20 hover:bg-black/30' : 'bg-white/20 hover:bg-white/30'
          ]"
        >
          <X class="w-5 h-5 text-white" />
        </button>
        
        <div class="text-center">
          <div class="text-6xl mb-4">🔐</div>
          <h2 class="text-2xl font-bold text-white">{{ isSignUp ? '注册' : '登录' }}</h2>
          <p :class="['text-sm mt-1', darkMode ? 'text-white/80' : 'text-white/80']">
            {{ isSignUp ? '创建新账户' : '欢迎回来' }}
          </p>
        </div>
      </div>

      <div :class="['p-6', darkMode ? 'bg-gray-800' : 'bg-white']">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div v-if="isSignUp">
            <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">
              用户名
            </label>
            <div :class="['relative', darkMode ? 'text-gray-300' : 'text-gray-700']">
              <User class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                v-model="username"
                type="text"
                placeholder="输入用户名"
                :class="[
                  'w-full pl-10 pr-4 py-3 rounded-xl border transition-all',
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500' 
                    : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500'
                ]"
              />
            </div>
          </div>

          <div>
            <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">
              邮箱
            </label>
            <div :class="['relative', darkMode ? 'text-gray-300' : 'text-gray-700']">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                v-model="email"
                type="email"
                placeholder="输入邮箱"
                :class="[
                  'w-full pl-10 pr-4 py-3 rounded-xl border transition-all',
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500' 
                    : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500'
                ]"
              />
            </div>
          </div>

          <div>
            <label :class="['block text-sm font-medium mb-2', darkMode ? 'text-gray-300' : 'text-gray-700']">
              密码
              <span v-if="isSignUp" :class="['text-xs ml-2', darkMode ? 'text-gray-500' : 'text-gray-400']">（至少6个字符）</span>
            </label>
            <div :class="['relative', darkMode ? 'text-gray-300' : 'text-gray-700']">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="输入密码"
                :class="[
                  'w-full pl-10 pr-12 py-3 rounded-xl border transition-all',
                  passwordError && passwordError.includes('至少') 
                    ? 'border-red-500' 
                    : darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500' 
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500'
                ]"
                @input="validatePassword"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Eye v-if="showPassword" class="w-5 h-5" />
                <EyeOff v-else class="w-5 h-5" />
              </button>
            </div>
            <p 
              v-if="passwordError"
              :class="[
                'mt-2 text-xs',
                passwordError.includes('至少') ? 'text-red-500' : 
                passwordError.includes('弱') ? 'text-yellow-500' : 
                passwordError.includes('中') ? 'text-blue-500' : 'text-green-500'
              ]"
            >
              {{ passwordError }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-4 px-4 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :style="{ background: 'linear-gradient(to right, var(--skin-color, #6366f1), var(--skin-color-secondary, #8b5cf6))' }"
          >
            <span v-if="loading">⏳</span>
            <span>{{ loading ? (isSignUp ? '注册中...' : '登录中...') : (isSignUp ? '注册' : '登录') }}</span>
          </button>
        </form>

        <div :class="['mt-4 text-center', darkMode ? 'text-gray-400' : 'text-gray-500']">
          <span>{{ isSignUp ? '已有账户？' : '没有账户？' }}</span>
          <button
            @click="isSignUp = !isSignUp"
            :class="[
              'ml-1 font-medium underline transition-colors',
              isSignUp ? 'hover:text-indigo-400' : 'hover:text-indigo-500'
            ]"
          >
            {{ isSignUp ? '立即登录' : '立即注册' }}
          </button>
        </div>

        <div :class="['mt-6 pt-4 border-t', darkMode ? 'border-gray-700' : 'border-gray-100']">
          <p :class="['text-xs text-center', darkMode ? 'text-gray-500' : 'text-gray-400']">
            演示账户：<br/>
            邮箱: demo@example.com<br/>
            密码: 123456
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
