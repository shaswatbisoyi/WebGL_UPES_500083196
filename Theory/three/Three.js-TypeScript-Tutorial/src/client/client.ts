import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

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

// const geometry = new THREE.TorusGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const torus = new THREE.Mesh( geometry, material );
// scene.add( torus );

const loader = new GLTFLoader();

loader.load( './assets/tree.glb', function ( gltf ) {

	scene.add( gltf.scene );
    scene.position.set(0,0,0)

}, undefined, function ( error ) {

	console.error( error );

} );

const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight.position.set( 0, 10, 0 );
scene.add( pointLight );

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    // torus.rotation.y += ((60 * Math.PI)/180)/180

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
