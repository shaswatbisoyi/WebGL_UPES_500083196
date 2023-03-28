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
camera.position.z = 3

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)


var mobileMaterial = [
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/sides.png')}),   // right
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/sides.png')}),     // left
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/bottom.png')}),    // topt
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/bottom.png')}),    // bottom
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/Front.png')}),    // front
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/Back.png')})   //back
];

var mobileMaterial2 = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/back.bmp')}),   // right
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/left.bmp')}),     // left
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/Top.bmp')}),    // topt
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/bottom.bmp')}),    // bottom
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/Front.bmp')}),    // front
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/right.bmp')})   //back
  ];
  
  for(var i=0;i<6;i++){
    mobileMaterial2[i].side= THREE.BackSide;
}

const loader = new GLTFLoader();

const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight.position.set( 0, 10, 0 );
scene.add( pointLight );

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh( geometry, mobileMaterial );
scene.add( cube );

const geometry2 = new THREE.BoxGeometry( 1000, 1000, 1000 );
const cube2 = new THREE.Mesh( geometry2, mobileMaterial2 );
scene.add( cube2 );

const mirrorGeometry = new THREE.PlaneGeometry(2,5);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}




const stats = Stats()
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)

    //cube.rotation.y += ((60 * Math.PI)/180)/180

    stats.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
