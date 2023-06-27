
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

let scene, camera, renderer;

let star_count = 400;
let geo;
let star;
let stars;

geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6*star_count), 3));
geo.setAttribute('velocity', new THREE.BufferAttribute(new Float32Array(2*star_count), 1));
let pos = geo.getAttribute('position');
let pa = pos.array;
let vel = geo.getAttribute('velocity'); 
let va = vel.array;

function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.z = 200;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    //We can actually change the target div which is pretty nice
    const targetDiv = document.getElementById('home');
    targetDiv.appendChild(renderer.domElement);

    //CSS of the script
    targetDiv.style.position = 'relative';
    targetDiv.style.overflow = 'hidden';
    targetDiv.style.width = '100%';

    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-1';

    

    for (let i = 0; i < star_count; i++)
    {
            let x = Math.random() * 400 - 200;
            let y = Math.random() * 200 - 100;
            let z = Math.random() * 500 - 100;

            let xx = x;
            let yy = y;
            let zz = z;

            pa[6*i] = x;
            pa[6*i + 1] = y;
            pa[6*i + 2] = z;

            pa[6*i + 3] = xx;
            pa[6*i + 4] = yy;
            pa[6*i + 5] = zz;

            va[2*i] = va[2*i + 1] = 0;
    }
    
    let material = new THREE.PointsMaterial({size: 1.5, sizeAttenuation: false, color: 0xffffff});
    stars = new THREE.Points(geo, material);
    scene.add(stars);
    animate();
}

function animate() {

    for (let i = 0; i < star_count; i++) 
    {
            va[2*i] += 0.03;
            va[2*i+1] += 0.025;

        
            pa[6*i + 2] += va[2*i];
            pa[6*i + 5] += va[2*i+1];

            if (pa[6*i + 5] > 200) {
                let z = Math.random() * 200 - 100;
                pa[6*i+2] = z;
                pa[6*i+5] = z;

                va[2*i] = 0;
                va[2*i+1] = 0;
            }
    }

    pos.needsUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();
