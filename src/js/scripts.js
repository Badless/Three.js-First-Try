import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

function animate() {
    requestAnimationFrame( animate );

    box.position.x += 0.01;
    box.position.y += 0.01;
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    camera.position.set(box.position.x, box.position.y, 5);

    renderer.render( scene, camera );
};
animate();

renderer.render(scene, camera);