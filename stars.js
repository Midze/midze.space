var container;
var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;
var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var colors = [
    [0, 0, 100],
    [210,100,60],
    [180,100,90]
];

init();
animate();

function init() {

    container = $('.star-animation')[0];

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 100, 2000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x000000, 0.000507 );

    var geometries = [];

    var k, j;

    for (j = 0; j < 3; j++) {
        var geometry = new THREE.Geometry();
        for (i = 0; i < 150; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 4000 - 2000;
            vertex.y = Math.random() * 2000 - 1000;
            vertex.z = Math.random() * 2000 - 1000;
            geometry.vertices.push(vertex);
        }
        geometries[j] = geometry;
    }

    for (k = 0; k < colors.length; k++) {
        for (i = 0; i < geometries.length; i++) {
            var color = colors[k];

            materials[j] = new THREE.PointsMaterial({size: 3});
            materials[j].color.setHSL(color[0] / 360, color[1] / 100, color[2] / 100);

            var particles = new THREE.Points(geometries[k], materials[j]);
            particles.position.z = -2000 + 1000 * (i);

            scene.add(particles);

            j++;
        }
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000, 1);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    //document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    window.addEventListener( 'resize', onWindowResize, false );
}

function render() {
    var time = Date.now() * 0.00005;

    camera.position.x += ( mouseX/5 - camera.position.x ) * 0.05;
    camera.position.y += ( - mouseY/5 - camera.position.y ) * 0.05;
    camera.lookAt( scene.position );

    for ( i = 0; i < scene.children.length; i ++ ) {
        var object = scene.children[ i ];
        if (object instanceof THREE.Points) {
            object.position.z += 5;
            if (object.position.z >= 1500) {
                object.position.z = -2000;//Math.random() * 1000 - 1000;
            }
        }
    }

    renderer.render( scene, camera );
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

function onDocumentTouchMove( event ) {
    if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}

function animate() {
    requestAnimationFrame( animate );
    render();
}
