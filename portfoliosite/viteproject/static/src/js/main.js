import "../css/style.css";

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render( scene, camera);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color:0xFF6347 } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight)
//
//const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls( camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial ( { color:0xffffff })
    const star = new THREE.Mesh( geometry, material );

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

    star.position.set(x,y,z);
    scene.add(star)
}

Array(500).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/space.jpg');
scene.background = spaceTexture;


// MY AVATAR //
const nicTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/laszloandi.png');

const nic = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: nicTexture } )
);

scene.add(nic);

nic.position.z = -1;
nic.position.setX(10);

// EARTH //

const earthTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/earth.jpg');
const surfaceTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/surface.jpg');

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshBasicMaterial( {
    map: earthTexture,
    surfaceMap: surfaceTexture
    } )
);

scene.add(earth);

earth.position.z = 40;
earth.position.setX(-20);
earth.position.y = 8;

// Python //
const pythonTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/python.png');

const python = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: pythonTexture } )
);

scene.add(python);

python.position.z = 5;
python.position.setX(-10);

// JS //
const jsTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/js.png');

const js = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: jsTexture } )
);

scene.add(js);

js.position.z = 8;
js.position.setX(-5);
js.position.setY(10);

// SQL //
const sqlTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/SQL_logo.png');

const sql = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: sqlTexture } )
);

scene.add(sql);

sql.position.z = 15;
sql.position.setX(-7);
sql.position.setY(-10);

// R //
const rTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/R_logo.png');

const r = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: rTexture } )
);

scene.add(r);

r.position.z = 12;
r.position.setX(15);
r.position.setY(10);


// HTML //
const htmlTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/HTML5_logo.png');

const html = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: htmlTexture } )
);

scene.add(html);

html.position.z = 25;
html.position.setX(7);
html.position.setY(-13);

// CSS //
const cssTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/CSS_logo.png');

const css = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: cssTexture } )
);

scene.add(css);

css.position.z = 30;
css.position.setX(12);
css.position.setY(-20);


// AAFC //

const marsTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/mars.jpeg');
const marsSurfaceTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/AAFC.png');

const mars = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshBasicMaterial( {
    map: marsTexture,
    marsSurfaceMap: marsSurfaceTexture,
    } )
);

scene.add(mars);

mars.position.z = 49;
mars.position.setX(-12);
mars.position.y = 20;

// Me With Trees //

const treeTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/mewithtrees.jpeg');

const trees = new THREE.Mesh(
    new THREE.BoxGeometry(4,4,4),
    new THREE.MeshBasicMaterial( {
    map: treeTexture
    } )
);

scene.add(trees);

trees.position.z = 58;
trees.position.x = -8;
trees.position.y = 0;

// MOON //
const moonTexture = new THREE.TextureLoader().load('./static/src/dist/bundle.js/images/moon.jpg');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshBasicMaterial( {
    map: moonTexture,
    surfaceMap: surfaceTexture
    } )
);

scene.add(moon);

moon.position.z = 54;
moon.position.x = 7;
moon.position.y = -8;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    earth.rotation.x += 0.005;
    earth.rotation.y += 0.0075;
    earth.rotation.z += 0.005;

    mars.rotation.x += 0.005;
    mars.rotation.y += 0.0075;
    mars.rotation.z += 0.005;

    moon.rotation.x += 0.005;
    moon.rotation.y += 0.0075;
    moon.rotation.z += 0.005;

    nic.rotation.x += 0.01;
    nic.rotation.y += 0.01;

    python.rotation.x += 0.01;
    python.rotation.y += 0.01;

    js.rotation.x += 0.01;
    js.rotation.y += 0.01;

    sql.rotation.x += 0.01;
    sql.rotation.y += 0.01;

    r.rotation.x += 0.01;
    r.rotation.y += 0.01;

    css.rotation.x += 0.01;
    css.rotation.y += 0.01;

    html.rotation.x += 0.01;
    html.rotation.y += 0.01;

    trees.rotation.x += 0.01;
    trees.rotation.y += 0.01;

   camera.position.z = t * -0.01;
   camera.position.x = t * -0.0002;
   camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera


function animate() {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.001;

    controls.update();

    renderer.render( scene, camera );
}

animate()
