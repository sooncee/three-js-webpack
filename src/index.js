import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  console.log(THREE)

  // scean
  const scene = new THREE.Scene()
  alert('g')
  // scene.background = new THREE.Color(0x004fff)
  // camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innderHeight, 0.1, 1000)

  // renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  renderer.render(scene, camera)
}
