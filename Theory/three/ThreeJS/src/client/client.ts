import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'dat.gui'


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 9

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)


// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
// })

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)


const loader = new GLTFLoader();

const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight.position.set( 0, 10, 0 );
scene.add( pointLight );

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

// const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// const capsule = new THREE.Mesh( geometry, material );
// scene.add( capsule );

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}


const stats = Stats()
document.body.appendChild(stats.dom)

// UI for orbit Control
// const gui = new GUI()
// const cubeFolder = gui.addFolder('Cube')
// cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
// cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
// cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
// cubeFolder.open()

// const cameraFolder = gui.addFolder('Camera')
// cameraFolder.add(camera.position, 'z', 0, 10)
// cameraFolder.open()

function animate() {
    requestAnimationFrame(animate)

    //cube.rotation.y += ((60 * Math.PI)/180)/180

    stats.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}

function createWheels() {
    const geometry = new THREE.BoxGeometry( 4, 1.2, 1.2 );
    const material = new THREE.MeshBasicMaterial( {color: 0x2c2c2c} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,0.1,0)
    scene.add( cube );
  }

  function createWheels2(){
    const geometry2 = new THREE.BoxGeometry( 4, 1, 1 );
    const material2 = new THREE.MeshBasicMaterial( {color: 0x2c2c2c} );
    const cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.position.set(0,0,3)
    scene.add( cube2 );
  }

  function createMainBox(){
    const geometry3 = new THREE.BoxGeometry( 3.5, 1.5, 6 );
    const material3 = new THREE.MeshBasicMaterial( {color: 0x8a211d} );
    const cube3 = new THREE.Mesh( geometry3, material3 );
    cube3.position.set(0,0.5,1.5)
    scene.add( cube3 );
  }
  function createTopBox(){
    const geometry = new THREE.BoxGeometry( 2.8, 1.5, 4 );
    const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,1.4,1.0)
    scene.add( cube );
  }
  function createWindow(){
    const geometry = new THREE.BoxGeometry( 2.4, 1.1, 4.1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x585858} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,1.4,1.0)
    scene.add( cube );
  }

  function createSideWindow1(){
    const geometry = new THREE.BoxGeometry( 3.0, 1.1, 1.3 );
    const material = new THREE.MeshBasicMaterial( {color: 0x585858} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,1.4,0.2)
    scene.add( cube );
  }

  function createSideWindow2(){
    const geometry = new THREE.BoxGeometry( 3.0, 1.1, 1.3 );
    const material = new THREE.MeshBasicMaterial( {color: 0x585858} );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,1.4,1.9)
    scene.add( cube );
  }

  function createHeadLights(){
    const geometry = new THREE.TorusGeometry( 0.2, 0.09, 15, 150 );
    const material = new THREE.MeshBasicMaterial( { color: 0xfeb93d } );
    const torus = new THREE.Mesh( geometry, material );
    torus.position.set(-1.2,0.5,4.52)
    torus.rotation.x = (0 * Math.PI)/180
    scene.add( torus )
  }
  function createHeadLights2(){
    const geometry = new THREE.TorusGeometry( 0.2, 0.09, 15, 150 );
    const material = new THREE.MeshBasicMaterial( { color: 0xfeb93d } );
    const torus = new THREE.Mesh( geometry, material );
    torus.position.set(1.2,0.5,4.52)
    torus.rotation.x = (0 * Math.PI)/180
    scene.add( torus )
  }
createHeadLights2()
createHeadLights()
createSideWindow1()
createSideWindow2()
createWindow()
createTopBox()
createMainBox()
createWheels()
createWheels2()
animate()
