<template>
  <div class="shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl
              bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">

    <!-- Card Thumbnail -->
    <img src="@/assets/css/projector/rickmorty.jpg" alt="Rick and Morty API thumbnail" class="w-full h-40 object-cover"/>

    <div class="p-6 text-left">
      <h3 class="font-bold mb-2">Rick and Morty API Testing</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Rick and Morty API ашиглан эхний 20 дүрийг татаж харуулна.
      </p>

      <!-- Button to open modal -->
      <button
        @click="open = true; if (!loaded) fetchCharacters()"
        class="inline-flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-purple-700 transition"
        aria-label="Open Rick and Morty testing"
      >
        <img src="@/assets/css/projector/rickmorty.jpg" alt="Rick and Morty icon" class="w-8 h-8 rounded object-cover"/>
        <span>Дэлгэрэнгүй</span>
      </button>
    </div>

    <!-- Modal -->
    <teleport to="body">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50" @click="close"></div>

        <!-- Modal Content -->
        <div class="relative z-10 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden
                    bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h4 class="text-xl font-semibold">Rick and Morty — 20 дүр</h4>
            <div class="flex items-center gap-3">
              <div class="text-sm">
                <div>Characters</div>
              </div>
              <button @click="close" class="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">✕</button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-6 max-h-[70vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
            <div v-if="loading" class="text-center py-12">Ачааллаж байна...</div>
            <div v-else-if="error" class="text-center text-red-500 py-6">{{ error }}</div>
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div v-for="char in characters" :key="char.id" class="rounded-lg p-3 flex flex-col items-center
                          bg-gray-50 dark:bg-gray-800">
                <img :src="char.image" :alt="char.name" class="w-28 h-28 object-cover rounded-md mb-2"/>
                <div class="text-sm font-medium text-center">{{ char.name }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ char.name }}</div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="flex justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-800">
            <button @click="close" class="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">Хаах</button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Modal & API state
const open = ref(false)
const loading = ref(false)
const loaded = ref(false)
const error = ref('')
const characters = ref([])

// Fetch first 20 characters from Rick and Morty API
const fetchCharacters = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    if (!res.ok) throw new Error('API алдаа: ' + res.status)
    const data = await res.json()
    characters.value = data.results.slice(0, 20).map(c => ({
      id: c.id,
      name: c.name,
      image: c.image
    }))
    loaded.value = true
  } catch (e) {
    console.error(e)
    error.value = 'Дүр татах үед алдаа гарлаа.'
  } finally {
    loading.value = false
  }
}

// Close modal
const close = () => { open.value = false }
</script>

<style scoped>
/* Tailwind scrollbar replacement */
.scrollbar-thin::-webkit-scrollbar { width: 8px; height: 8px; }
.scrollbar-thin::-webkit-scrollbar-thumb { border-radius: 8px; }
</style>
