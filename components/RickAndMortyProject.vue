<template>
  <div
    :class="[
      'shadow-xl rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl',
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200'
        : 'bg-white text-gray-800'
    ]"
  >
    <!-- Card Thumbnail -->
    <img
      src="@/assets/css/projector/rickmorty.jpg"
      alt="Rick and Morty API thumbnail"
      class="w-full h-40 object-cover rounded-t-xl"
    />

    <div class="p-6 text-left">
      <h3 class="font-bold mb-2 text-lg md:text-xl">Rick and Morty API Testing</h3>
      <p class="text-sm md:text-base mb-4 opacity-90">
        Rick and Morty API ашиглан эхний 20 дүрийг татаж харуулна.
      </p>

      <!-- Button to open modal -->
      <button
        @click="open = true; if (!loaded) fetchCharacters()"
        class="inline-flex items-center gap-3 bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
      >
        <img
          src="@/assets/css/projector/rickmorty.jpg"
          alt="Rick and Morty icon"
          class="w-6 h-6 rounded object-cover"
        />
        <span>Дэлгэрэнгүй</span>
      </button>
    </div>

    <!-- Modal -->
    <teleport to="body">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50" @click="close"></div>

        <!-- Modal Content -->
        <div
          :class="[
            'relative z-10 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden',
            isDark
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200'
              : 'bg-white text-gray-800'
          ]"
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
            <h4 class="text-xl font-semibold">Rick and Morty — 20 дүр</h4>
            <button
              @click="close"
              class="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              ✕
            </button>
          </div>

          <!-- Modal Body -->
          <div
            class="p-6 max-h-[70vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
          >
            <div v-if="loading" class="text-center py-12">Ачааллаж байна...</div>
            <div v-else-if="error" class="text-center text-red-500 py-6">{{ error }}</div>
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div
                v-for="char in characters"
                :key="char.id"
                :class="[
                  'rounded-lg p-3 flex flex-col items-center backdrop-blur-sm transition',
                  isDark ? 'bg-gray-800/80 text-gray-200' : 'bg-white text-gray-800 shadow'
                ]"
              >
                <img
                  :src="char.image"
                  :alt="char.name"
                  class="w-28 h-28 object-cover rounded-md mb-2"
                />
                <div class="text-sm font-medium text-center">{{ char.name }}</div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="flex justify-end gap-3 p-4 border-t border-gray-300 dark:border-gray-700">
            <button
              @click="close"
              class="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Хаах
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  isDark: Boolean
})

const open = ref(false)
const characters = ref([])
const loading = ref(false)
const error = ref(null)
const loaded = ref(false)

const fetchCharacters = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    characters.value = data.results.slice(0, 20) // эхний 20 дүр
    loaded.value = true
  } catch (err) {
    error.value = "Алдаа гарлаа: " + err.message
  } finally {
    loading.value = false
  }
}

const close = () => {
  open.value = false
}
</script>
