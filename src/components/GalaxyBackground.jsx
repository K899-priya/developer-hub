import { useEffect } from "react"
import * as THREE from "three"

export default function GalaxyBackground(){

useEffect(()=>{

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({alpha:true})
renderer.setSize(window.innerWidth,window.innerHeight)

renderer.domElement.style.position="fixed"
renderer.domElement.style.top="0"
renderer.domElement.style.zIndex="-1"

document.body.appendChild(renderer.domElement)

const particlesGeometry = new THREE.BufferGeometry()
const particlesCount = 4000

const posArray = new Float32Array(particlesCount*3)

for(let i=0;i<particlesCount*3;i++){
posArray[i]=(Math.random()-0.5)*20
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
)

const particlesMaterial = new THREE.PointsMaterial({
size:0.02,
color:0x00ffff
})

const particlesMesh = new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particlesMesh)

camera.position.z=5

function animate(){

requestAnimationFrame(animate)

particlesMesh.rotation.y+=0.0008
particlesMesh.rotation.x+=0.0002

renderer.render(scene,camera)

}

animate()

window.addEventListener("mousemove",(event)=>{

particlesMesh.rotation.y = event.clientX * 0.00005
particlesMesh.rotation.x = event.clientY * 0.00005

})

},[])

return null
}