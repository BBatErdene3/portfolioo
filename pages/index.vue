<template>
  <div :class="['transition-colors duration-500 min-h-screen', isDark ? 'dark bg-gray-900 text-gray-200' : 'bg-white text-gray-900']">

    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-lg fixed w-full z-50">
      <div class="container mx-auto flex justify-between items-center p-6">
        <a class="text-white font-bold text-4xl">Бат-Эрдэнэ</a>

        <nav class="hidden md:flex space-x-6">
          <a href="#home" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Нүүр</a>
          <a href="#about" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Тухай</a>
          <a href="#skills" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Ур чадвар</a>
          <a href="#projects" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Төслүүд</a>
          <a href="#contact" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Холбоо барих</a>
        </nav>

        <div class="flex items-center space-x-4">
          <!-- Theme toggle -->
          <button 
            @click="toggleTheme"
            :aria-pressed="isDark"
            class="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            title="Toggle dark / light"
          >
            <span v-if="!isDark" class="text-xl">🌙</span>
            <span v-else class="text-xl">☀️</span>
          </button>

          <!-- CTA with icon -->
          <a href="#contact" class="hidden md:inline-flex items-center gap-3 bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-100 transition duration-300">
            <img src="~/assets/css/icons/contact.jpg" alt="contact" class="w-6 h-6 rounded-sm object-cover"/>
            <span>Ажлын санал</span>
          </a>         
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="pt-24">

      <!-- Hero Section -->
      <section id="home" class="h-screen relative flex flex-col justify-center items-center text-center overflow-hidden">
        <!-- Overlay -->
        <div class="absolute inset-0 transition-colors duration-500" :class="isDark ? 'bg-gray-900/80' : 'bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700/80'"></div>

        <!-- Three.js Canvas -->
        <div ref="sceneContainer" class="absolute inset-0 z-0"></div>

        <!-- Hero Text Overlay -->
        <div class="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 class="text-7xl md:text-8xl font-extrabold mb-4 text-white opacity-0 transform translate-y-10 scale-95 animate-fade-in-up">
            Сайн уу, би Бат-Эрдэнэ 👋
          </h1>
          <p class="text-2xl md:text-4xl mb-6 text-white opacity-0 transform translate-y-10 scale-95 animate-fade-in-up delay-200">
            Ирээдүйн IT инженер | Вэб хөгжүүлэгч
          </p>

          <!-- Hero button with image -->
          <a href="#projects"
             class="mt-2 inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg opacity-0 transform translate-y-10 scale-95 animate-fade-in-up delay-400 hover:bg-purple-700 transition duration-300"
             aria-label="Миний ажлууд">
            <img src="~/assets/css/hero/pc-icon.png" alt="PC icon" class="w-8 h-8 rounded-sm object-cover"/>
            <span class="font-medium">Миний ажлууд</span>
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-100 via-purple-200 to-blue-300 text-gray-900'">
        <div class="container mx-auto max-w-3xl">
          <h2 class="text-4xl font-bold mb-6">Миний тухай</h2>
          <p class="leading-relaxed text-lg">
            Намайг Б. Бат-Эрдэнэ гэдэг. Би мэдээллийн технологийн салбарт сонирхолтой ба ирээдүйд IT инженер болох зорилготой.
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gradient-to-r from-blue-200 via-purple-300 to-blue-400 text-gray-900'">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-10">Миний ур чадвар</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">C / C++</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">Unity / Unreal Engine</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">SQL</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">Vue / React</div>
          </div>
        </div>
      </section>

      <!-- Projects Section (cards with thumbnails + image-buttons) -->
      <section id="projects" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 text-gray-900'">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl font-bold mb-10">Миний төслүүд</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- 1 -->
            <div class="shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <img src="~/assets/css/projector/portfolio-thumb.jpg" alt="Portfolio thumbnail" class="w-full h-40 object-cover"/>
              <div class="p-6 text-left">
                <h3 class="font-bold mb-2">Portfolio Web</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Vue + TailwindCSS вебсайт.</p>
                <!-- Image button -->
                <a href="#projects" class="inline-flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-purple-700 transition">
                  <img src="~/assets/css/projector/portfolio-thumb.jpg" alt="Portfolio icon" class="w-8 h-8 rounded object-cover"/>
                  <span>Дэлгэрэнгүй</span>
                </a>
              </div>
            </div>

            <!-- 2 -->
            <div class="shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <img src="~/assets/css/projector/unity.png" alt="Unity thumbnail" class="w-full h-40 object-cover"/>
              <div class="p-6 text-left">
                <h3 class="font-bold mb-2">Unity</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Unity ашиглан бүтээсэн AR тоглоом.</p>
                <a href="#projects" class="inline-flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-purple-700 transition">
                  <img src="~/assets/css/projector/unity.png" alt="Unity icon" class="w-8 h-8 rounded object-cover"/>
                  <span>Дэлгэрэнгүй</span>
                </a>
              </div>
            </div>

            <!-- 3 -->
            <div class="shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <img src="@/assets/css/projector/Soon-Arrow-3d-icon.png" alt="Soon thumbnail" class="w-full h-40 object-cover"/>
              <div class="p-6 text-left">
                <h3 class="font-bold mb-2">Шинэ төслүүд</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Тун удахгүй нэмэгдэнэ...</p>
                <a href="#projects" class="inline-flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-purple-700 transition">
                  <img src="@/assets/css/projector/Soon-Arrow-3d-icon.png" alt="Soon icon" class="w-8 h-8 rounded object-cover"/>
                  <span>Дэлгэрэнгүй</span>
                </a>
              </div>
            </div>

            <!-- 4 -->
            <RickAndMortyProject ref="rickMortyModal" :isDark="isDark" />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-gray-900'">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-6">Холбоо барих</h2>
          <p class="mb-10">Надтай хамтран ажиллахыг хүсвэл холбогдоорой!</p>

          <!-- Contact Form -->
          <ContactForm />
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white'">
        <p>© 2025 Бат-Эрдэнэ. Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ContactForm from '~/components/ContactForm.vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const isDark = ref(false)
const sceneContainer = ref(null)

onMounted(() => {
  // Theme setup
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) isDark.value = savedTheme === 'dark'
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
    }
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // Three.js setup
  if (sceneContainer.value) {
    const container = sceneContainer.value
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(0, 8, 9) // арай холоос

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1))
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 10, 7.5)
    scene.add(directionalLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false

    // Load GLTF model
    const loader = new GLTFLoader()
    let desktop
    loader.load('/models/gaming_desktop_pc/scene.gltf', gltf => {
      desktop = gltf.scene
      desktop.position.set(0, 0, 0)
      desktop.scale.set(1.2, 1.2, 1.2)
      scene.add(desktop)
    }, undefined, err => {
      console.error('Model load error:', err)
    })

    // Resize handling
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    })

    // Animate: rotation + bobbing only, no zoom on scroll
    let direction = 1
    const animate = () => {
      requestAnimationFrame(animate)
      if (desktop) {
        desktop.rotation.y += 0.002
        desktop.position.y += 0.001 * direction
        if (desktop.position.y > 0.2 || desktop.position.y < -0.2) direction *= -1
      }
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Scroll subtle camera parallax (only y-position)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      camera.position.y = 1.5 - scrollY * 0.0003
    })
  }
})


const toggleTheme = () => {
  isDark.value = !isDark.value
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}
</script>

<style scoped>
/* Hero Text Animation */
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards;
}
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-400 { animation-delay: 0.4s; }

/* Small visual tweaks for image buttons */
a img {
  display: inline-block;
}
</style>