import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// loading Three.js with a <script> has limitations
// doesn't include some of the classes
// we need those classes eventually
// we need to run a server to emulate a website and for security reasons

// What is a bundler?
    // a tool in which you send JS, CSS, HTML, images, TypeScript, Stylus, Sass, etc
    // The bundler apply potential modifications and output a web-friendly 'bundle'
    // can do more like a local server, manage dependencies, improve compatibility, add modules support, optimize files, deploy, etc.

// The bundler we are going to use is Webpack
    // most popular
    // handle most of our needs
    // good documentation
    // good community
    // well maintained
    // hard to configure
