<template>
  <div ref="sceneContainer" style="width: 100%; height: 500px;"></div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'ThreeModel',
  mounted() {
    const container = this.$refs.sceneContainer

    // Scene + Camera + Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    )
    camera.position.set(0, 1.5, 3) 
    camera.lookAt(0, 0.75, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 7.5)
    scene.add(directionalLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false

    // Load Model
    const loader = new GLTFLoader()
    loader.load(
      '/models/gaming_desktop_pc/scene.gltf',
      gltf => {
        const model = gltf.scene
        model.position.set(0, 0.5, 0) // Дээшлүүлсэн байрлал
        model.rotation.y = Math.PI     // нүүр camera руу харах
        model.scale.set(0.9, 0.9, 0.9) // hero-д тааруулсан хэмжээ
        scene.add(model)
      },
      undefined,
      err => console.error(err)
    )

    // Animate
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  }
}
</script>
