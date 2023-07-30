import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  console.log(THREE)

  // scean
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x004fff)
  // camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innderHeight, 0.1, 1000)

  // canvas
  const canvas = document.querySelector('#c')

  // renderer
  const renderer = new THREE.WebGLRenderer({ canvas })
  // renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  renderer.render(scene, camera)
}
