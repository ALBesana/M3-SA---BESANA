import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias : true });
const controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adjust the camera position and field of view to capture the smaller room
camera.position.set(0, 4, 4); 
camera.lookAt(0, 0, 0);

scene.background = new THREE.Color(0x000000); // Light yellow background

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0x92c7c6, 1);
directionalLight.position.set(0, 10, 8);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
scene.add(directionalLight);

// Load Textures
const textureLoader = new THREE.TextureLoader();
const woodenFloor = textureLoader.load('myAssets/textures/WoodenFloor.jpg');
const spruce = textureLoader.load('myAssets/textures/darkOakPlank.jpg');
const diamond = textureLoader.load('myAssets/textures/wallpaper.jpg');
const oakCeiling = textureLoader.load('myAssets/textures/oakPlanks.jpg');
const floorCarpet = textureLoader.load('myAssets/textures/zigzagCarpet.jpg');
const floorCarpetBorder = textureLoader.load('myAssets/textures/carpetBorder.jpg');
const woodenTexture = textureLoader.load('myAssets/textures/woodTexture.jpg');

function createLivingRoom() {
    // Floor
    const floorGeometry = new THREE.BoxGeometry(15, 0.2, 15);
    const floorMaterial = new THREE.MeshBasicMaterial({ map: woodenFloor });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0, 0, 0);
    floor.receiveShadow = true;
    scene.add(floor);

    // Left Wall
    const leftWallGeometry = new THREE.BoxGeometry(0.2, 5, 15);
    const leftWallMaterial = new THREE.MeshBasicMaterial({ map: diamond });
    const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
    leftWall.position.set(-7.40, 2.4, 0);
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    // Right Wall
    const rightWallGeometry = new THREE.BoxGeometry(0.2, 5, 15);
    const rightWallMaterial = new THREE.MeshBasicMaterial({ map: diamond });
    const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
    rightWall.position.set(7.40, 2.4, 0);
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Back Wall
    const backWallGeometry = new THREE.BoxGeometry(15, 5, 0.2);
    const backWallMaterial = new THREE.MeshBasicMaterial({ map: diamond });
    const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
    backWall.position.set(0, 2.4, -7.4);
    backWall.receiveShadow = true;
    scene.add(backWall);

    function createWallBorder() {
        // Left wall bottom border A
        const leftWallBotGeometry1 = new THREE.BoxGeometry(0.24, 1.2, 7.5);
        const leftWallBotMaterial1 = new THREE.MeshBasicMaterial({ map: spruce });
        const leftWallBotA = new THREE.Mesh(leftWallBotGeometry1, leftWallBotMaterial1);
        leftWallBotA.position.set(-7.40, 0.7, 3.75);
        leftWallBotA.receiveShadow = true;
        scene.add(leftWallBotA);

        // Left wall bottom border B
        const leftWallBotGeometry2 = new THREE.BoxGeometry(0.24, 1.2, 7.5);
        const leftWallBotMaterial2 = new THREE.MeshBasicMaterial({ map: spruce });
        const leftWallBotB = new THREE.Mesh(leftWallBotGeometry2, leftWallBotMaterial2);
        leftWallBotB.position.set(-7.40, 0.7, -3.75);
        leftWallBotB.receiveShadow = true;
        scene.add(leftWallBotB);

        // Left wall upper border A
        const leftWallUpGeometry1 = new THREE.BoxGeometry(0.24, 1.2, 7.5);
        const leftWallUpMaterial1 = new THREE.MeshBasicMaterial({ map: spruce });
        const leftWallUpA = new THREE.Mesh(leftWallUpGeometry1, leftWallUpMaterial1);
        leftWallUpA.position.set(-7.40, 4.3, 3.75);
        leftWallUpA.receiveShadow = true;
        scene.add(leftWallUpA);

        // Left wall upper border B
        const leftWallUpGeometry2 = new THREE.BoxGeometry(0.24, 1.2, 7.5);
        const leftWallUpMaterial2 = new THREE.MeshBasicMaterial({ map: spruce });
        const leftWallUpB = new THREE.Mesh(leftWallUpGeometry2, leftWallUpMaterial2);
        leftWallUpB.position.set(-7.40, 4.3, -3.75);
        leftWallUpB.receiveShadow = true;
        scene.add(leftWallUpB);


    }
    createWallBorder();

    function createCarpet() {
        // Inside carpet
        const carpetGeometry = new THREE.BoxGeometry(9, 0.01, 5.5);
        const carpetMaterial = new THREE.MeshBasicMaterial({ map: floorCarpet});
        const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
        carpet.position.set(-0.7, 0.12, 3.8);
        carpet.receiveShadow = true;
        scene.add(carpet);

        // Border carpet
        const carpetBorderGeometry = new THREE.BoxGeometry(10, 0.01, 6.55);
        const carpetBorderMaterial = new THREE.MeshBasicMaterial({ map: floorCarpetBorder });
        const carpetBorder = new THREE.Mesh(carpetBorderGeometry, carpetBorderMaterial);
        carpetBorder.position.set(-0.7, 0.1, 3.8);
        carpetBorder.receiveShadow = true;
        scene.add(carpetBorder);
    }
    createCarpet();

    function createPillars() {
        // Top Left Pillar
        const leftPillarGeometry = new THREE.BoxGeometry(0.45, 5, 0.45);
        const leftPillarMaterial = new THREE.MeshBasicMaterial({ map: woodenTexture });
        const leftPillar = new THREE.Mesh(leftPillarGeometry, leftPillarMaterial);
        leftPillar.position.set(-0.07, 2.6, -2.6);
        leftPillar.receiveShadow = true;
        scene.add(leftPillar);

        // Top Right Pillar
        const rightPillarGeometry = new THREE.BoxGeometry(0.45, 5, 0.45);
        const rightPillarMaterial = new THREE.MeshBasicMaterial({ map: woodenTexture });
        const rightPillar = new THREE.Mesh(rightPillarGeometry, rightPillarMaterial);
        rightPillar.position.set(5.05, 2.6, -1.8);
        rightPillar.receiveShadow = true;
        scene.add(rightPillar);

        // Top Bottom Pillar
        const bottomPillarGeometry = new THREE.BoxGeometry(0.45, 5, 0.45);
        const bottomPillarMaterial = new THREE.MeshBasicMaterial({ map: woodenTexture });
        const bottomPillar = new THREE.Mesh(bottomPillarGeometry, bottomPillarMaterial);
        bottomPillar.position.set(5.05, 2.6, 4.6);
        bottomPillar.receiveShadow = true;
        scene.add(bottomPillar);
    }
    createPillars();

    function createCeiling() {
        // Ceiling Top Left
        const ceilingGeometryR1 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR1 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR1 = new THREE.Mesh(ceilingGeometryR1, ceilingMaterialR1);
        ceilingR1.position.set(-5, 5, -5);
        ceilingR1.receiveShadow = true;
        scene.add(ceilingR1);
    
        // Ceiling Top Middle
        const ceilingGeometryR2 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR2 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR2 = new THREE.Mesh(ceilingGeometryR2, ceilingMaterialR2);
        ceilingR2.position.set(0, 5, -5);
        ceilingR2.receiveShadow = true;
        scene.add(ceilingR2);

        // Ceiling Top Right
        const ceilingGeometryR3 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR3 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR3 = new THREE.Mesh(ceilingGeometryR3, ceilingMaterialR3);
        ceilingR3.position.set(5, 5, -5);
        ceilingR3.receiveShadow = true;
        scene.add(ceilingR3);
    
        // Ceiling Middle Left
        const ceilingGeometryR4 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR4 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR4 = new THREE.Mesh(ceilingGeometryR4, ceilingMaterialR4);
        ceilingR4.position.set(-5, 5, 0);
        ceilingR4.receiveShadow = true;
        scene.add(ceilingR4);

        // Ceiling Middle Middle
        const ceilingGeometryR5 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR5 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR5 = new THREE.Mesh(ceilingGeometryR5, ceilingMaterialR5);
        ceilingR5.position.set(0, 5, 0);
        ceilingR5.receiveShadow = true;
        scene.add(ceilingR5);

        // Ceiling Middle Right
        const ceilingGeometryR6 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR6 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR6 = new THREE.Mesh(ceilingGeometryR6, ceilingMaterialR6);
        ceilingR6.position.set(5, 5, 0);
        ceilingR6.receiveShadow = true;
        scene.add(ceilingR6);
    
        // Ceiling Bottom Left
        const ceilingGeometryR7 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR7 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR7 = new THREE.Mesh(ceilingGeometryR7, ceilingMaterialR7);
        ceilingR7.position.set(-5, 5, 5);
        ceilingR7.receiveShadow = true;
        scene.add(ceilingR7);

        // Ceiling Bottom Middle
        const ceilingGeometryR8 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR8 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR8 = new THREE.Mesh(ceilingGeometryR8, ceilingMaterialR8);
        ceilingR8.position.set(0, 5, 5);
        ceilingR8.receiveShadow = true;
        scene.add(ceilingR8);
                
        // Ceiling Bottom Right
        const ceilingGeometryR9 = new THREE.BoxGeometry(5, 0.2, 5);
        const ceilingMaterialR9 = new THREE.MeshBasicMaterial({ map: oakCeiling });
        const ceilingR9 = new THREE.Mesh(ceilingGeometryR9, ceilingMaterialR9);
        ceilingR9.position.set(5, 5, 5);
        ceilingR9.receiveShadow = true;
        scene.add(ceilingR9);
    }
    createCeiling();
}
createLivingRoom();

function createCubicle() {
    // Front Side A
    const frontSideGeometry1 = new THREE.BoxGeometry(3.5, 5, 0.5);
    const frontSideMaterial1 = new THREE.MeshBasicMaterial({ map: spruce });
    const frontSideA = new THREE.Mesh(frontSideGeometry1, frontSideMaterial1);
    frontSideA.position.set(-5.75, 2.5, 0);
    frontSideA.receiveShadow = true;
    scene.add(frontSideA);

    // Front Bottom Side B
    const frontBotSideGeometry2 = new THREE.BoxGeometry(7, 1.3, 0.52);
    const frontBotSideMaterial2 = new THREE.MeshBasicMaterial({ map: spruce });
    const frontSideB = new THREE.Mesh(frontBotSideGeometry2, frontBotSideMaterial2);
    frontSideB.position.set(-4, 0.7, 0);
    frontSideB.receiveShadow = true;
    scene.add(frontSideB);

    // Front Bottom Side C
    const frontUpSideGeometry3 = new THREE.BoxGeometry(7, 1.3, 0.52);
    const frontUpSideMaterial3 = new THREE.MeshBasicMaterial({ map: spruce });
    const frontSideC = new THREE.Mesh(frontUpSideGeometry3, frontUpSideMaterial3);
    frontSideC.position.set(-4, 4.45, 0);
    frontSideC.receiveShadow = true;
    scene.add(frontSideC);

    // Bottom Right Side A
    const rightBotSideGeometry1 = new THREE.BoxGeometry(0.52, 1.3, 4);
    const rightBotSideMaterial1 = new THREE.MeshBasicMaterial({ map: spruce });
    const rightSideA = new THREE.Mesh(rightBotSideGeometry1, rightBotSideMaterial1);
    rightSideA.position.set(-0.76, 0.7, -2.26);
    rightSideA.receiveShadow = true;
    scene.add(rightSideA);

    // Upper Right Side B
    const rightUpSideGeometry2 = new THREE.BoxGeometry(0.52, 1.3, 7.24);
    const rightUpSideMaterial2 = new THREE.MeshBasicMaterial({ map: spruce });
    const rightSideB = new THREE.Mesh(rightUpSideGeometry2, rightUpSideMaterial2);
    rightSideB.position.set(-0.76, 4.45, -3.88);
    rightSideB.receiveShadow = true;
    scene.add(rightSideB);
}
createCubicle();

function createCarpetFloor() {
    // Carpet
    const floorGeometry = new THREE.BoxGeometry(15, 0.125, 15);
    const floorMaterial = new THREE.MeshStandardMaterial({ map: woodenFloor });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0, 0, 0);
    floor.receiveShadow = true;
    scene.add(floor);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Start the animation
animate();