import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';

/**
 * ThreeMotherChildScene
 * A heartwarming, serene 3D interactive scene featuring a loving Mother
 * and her joyful Child with Down Syndrome playing together.
 * Perfect camera framing and persistent, 60fps expressive animations.
 */
export default function ThreeChildScene({ currentAction = 'idle', onActionChange }) {
  const mountRef = useRef(null);
  const animFrameId = useRef(null);

  // Active action in mutable ref for immediate 60fps render loop access
  const actionRef = useRef(currentAction || 'idle');
  const actionTimerRef = useRef(0);
  const [activeAction, setActiveAction] = useState(currentAction || 'idle');

  // Sync external prop if changed
  useEffect(() => {
    if (currentAction && currentAction !== actionRef.current) {
      actionRef.current = currentAction;
      actionTimerRef.current = 0;
      setActiveAction(currentAction);
    }
  }, [currentAction]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer (MOUNTED ONCE) ---
    const scene = new THREE.Scene();

    // Use container dimensions or default
    const width = container.clientWidth || 540;
    const height = 500; // Fixed reliable viewport height

    // Camera positioned with perfect distance & angle to show FULL bodies & heads
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 1.05, 4.9);
    camera.lookAt(0, 0.72, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Peaceful Lighting ---
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff2de, 1.5);
    sunLight.position.set(3.5, 5.5, 4.5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.001;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x7fa595, 0.9);
    rimLight.position.set(-3.5, 3.5, -2.5);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xfcebe1, 0.75, 10);
    fillLight.position.set(0, 0.3, 3);
    scene.add(fillLight);

    // --- Peaceful Grassy/Linen Circular Podium ---
    const podiumGroup = new THREE.Group();
    const podiumGeo = new THREE.CylinderGeometry(2.1, 2.2, 0.16, 52);
    const podiumMat = new THREE.MeshStandardMaterial({
      color: 0xdfede3,
      roughness: 0.65,
      metalness: 0.04
    });
    const podium = new THREE.Mesh(podiumGeo, podiumMat);
    podium.position.y = -0.08;
    podium.receiveShadow = true;
    podiumGroup.add(podium);

    const ringGeo = new THREE.TorusGeometry(2.15, 0.035, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x93bfa5, roughness: 0.4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.01;
    podiumGroup.add(ring);
    scene.add(podiumGroup);

    // --- Shared Materials ---
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfbd0b6, roughness: 0.62 });
    const blushMat = new THREE.MeshStandardMaterial({ color: 0xf08080, roughness: 0.55, transparent: true, opacity: 0.65 });
    const darkBrownHair = new THREE.MeshStandardMaterial({ color: 0x4a2a16, roughness: 0.75 });
    const chestnutHair = new THREE.MeshStandardMaterial({ color: 0x753e20, roughness: 0.8 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1f1610 });
    const eyeSparkleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const smileMat = new THREE.MeshStandardMaterial({ color: 0x8a3018, roughness: 0.5 });

    // ==========================================
    // 1. THE MOTHER (Gentle, loving, sitting gracefully)
    // ==========================================
    const momGroup = new THREE.Group();
    momGroup.position.set(-0.6, 0.0, 0.0);
    momGroup.rotation.y = 0.35;

    // Mom Skirt / Lower body
    const momDressMat = new THREE.MeshStandardMaterial({ color: 0x52796f, roughness: 0.6 }); // Sage green
    const momSkirtGeo = new THREE.CylinderGeometry(0.24, 0.48, 0.65, 24);
    const momSkirt = new THREE.Mesh(momSkirtGeo, momDressMat);
    momSkirt.position.y = 0.32;
    momSkirt.castShadow = true;
    momSkirt.receiveShadow = true;
    momGroup.add(momSkirt);

    // Mom Torso / Sweater
    const momTopMat = new THREE.MeshStandardMaterial({ color: 0xfbf4e6, roughness: 0.7 }); // Warm cream top
    const momTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.48, 24), momTopMat);
    momTorso.position.y = 0.82;
    momTorso.castShadow = true;
    momGroup.add(momTorso);

    // Mom Scarf
    const scarfMat = new THREE.MeshStandardMaterial({ color: 0xdf7a5a, roughness: 0.5 });
    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 12, 24), scarfMat);
    scarf.rotation.x = Math.PI / 2;
    scarf.position.y = 1.04;
    momGroup.add(scarf);

    // Mom Head Group
    const momHeadGroup = new THREE.Group();
    momHeadGroup.position.set(0, 1.25, 0);

    const momHead = new THREE.Mesh(new THREE.SphereGeometry(0.22, 28, 28), skinMat);
    momHead.scale.set(0.95, 1.05, 0.95);
    momHead.castShadow = true;
    momHeadGroup.add(momHead);

    // Mom Eyes
    const momEyeGeo = new THREE.SphereGeometry(0.03, 14, 14);
    momEyeGeo.scale(1.1, 0.65, 0.3);

    const momLeftEye = new THREE.Mesh(momEyeGeo, eyeMat);
    momLeftEye.position.set(-0.08, 0.03, 0.2);
    momLeftEye.rotation.z = -0.08;
    momHeadGroup.add(momLeftEye);

    const momRightEye = new THREE.Mesh(momEyeGeo, eyeMat);
    momRightEye.position.set(0.08, 0.03, 0.2);
    momRightEye.rotation.z = 0.08;
    momHeadGroup.add(momRightEye);

    // Mom Eye Sparkles
    const sparkGeo = new THREE.SphereGeometry(0.009, 8, 8);
    const momLeftSpark = new THREE.Mesh(sparkGeo, eyeSparkleMat);
    momLeftSpark.position.set(-0.075, 0.045, 0.215);
    momHeadGroup.add(momLeftSpark);
    const momRightSpark = new THREE.Mesh(sparkGeo, eyeSparkleMat);
    momRightSpark.position.set(0.085, 0.045, 0.215);
    momHeadGroup.add(momRightSpark);

    // Mom Cheeks
    const momCheekGeo = new THREE.SphereGeometry(0.05, 14, 14);
    momCheekGeo.scale(1, 0.55, 0.3);
    const momLeftCheek = new THREE.Mesh(momCheekGeo, blushMat);
    momLeftCheek.position.set(-0.12, -0.035, 0.18);
    momHeadGroup.add(momLeftCheek);
    const momRightCheek = new THREE.Mesh(momCheekGeo, blushMat);
    momRightCheek.position.set(0.12, -0.035, 0.18);
    momHeadGroup.add(momRightCheek);

    // Mom Warm Smile
    const momSmileCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.06, -0.08, 0.2),
      new THREE.Vector3(0, -0.11, 0.215),
      new THREE.Vector3(0.06, -0.08, 0.2)
    ]);
    const momSmile = new THREE.Mesh(new THREE.TubeGeometry(momSmileCurve, 16, 0.011, 8, false), smileMat);
    momHeadGroup.add(momSmile);

    // Mom Hair & Bun
    const momHairBase = new THREE.Mesh(new THREE.SphereGeometry(0.25, 24, 24), darkBrownHair);
    momHairBase.scale.set(1.02, 1.05, 1.05);
    momHairBase.position.set(0, 0.04, -0.04);
    momHeadGroup.add(momHairBase);

    const bun = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 18), darkBrownHair);
    bun.position.set(0, 0.11, -0.24);
    momHeadGroup.add(bun);
    momGroup.add(momHeadGroup);

    // Mom Arms
    const momArmGeo = new THREE.CylinderGeometry(0.058, 0.05, 0.38, 16);
    const momHandGeo = new THREE.SphereGeometry(0.06, 14, 14);
    momHandGeo.scale(0.8, 1.1, 0.5);

    const momLeftArm = new THREE.Group();
    momLeftArm.position.set(0.24, 0.94, 0.05);
    const momLeftArmMesh = new THREE.Mesh(momArmGeo, momTopMat);
    momLeftArmMesh.position.y = -0.16;
    momLeftArm.add(momLeftArmMesh);
    const momLeftHand = new THREE.Mesh(momHandGeo, skinMat);
    momLeftHand.position.set(0, -0.35, 0.04);
    momLeftArm.add(momLeftHand);
    momGroup.add(momLeftArm);

    const momRightArm = new THREE.Group();
    momRightArm.position.set(-0.24, 0.94, 0);
    const momRightArmMesh = new THREE.Mesh(momArmGeo, momTopMat);
    momRightArmMesh.position.y = -0.16;
    momRightArm.add(momRightArmMesh);
    const momRightHand = new THREE.Mesh(momHandGeo, skinMat);
    momRightHand.position.set(0, -0.35, 0);
    momRightArm.add(momRightHand);
    momGroup.add(momRightArm);

    scene.add(momGroup);

    // ==========================================
    // 2. THE JOYFUL CHILD WITH DOWN SYNDROME
    // ==========================================
    const childGroup = new THREE.Group();
    childGroup.position.set(0.48, 0.0, 0.1);
    childGroup.rotation.y = -0.38;

    const childDungareeMat = new THREE.MeshStandardMaterial({ color: 0x4a7c8e, roughness: 0.5 });
    const childShirtMat = new THREE.MeshStandardMaterial({ color: 0xffe89e, roughness: 0.65 });

    // Child Torso & Dungarees
    const childTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.22, 0.36, 20), childDungareeMat);
    childTorso.position.y = 0.52;
    childTorso.castShadow = true;
    childGroup.add(childTorso);

    // Sunflower Pocket Patch
    const flowerPatch = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 16), new THREE.MeshStandardMaterial({ color: 0xf4a261 }));
    flowerPatch.rotation.x = Math.PI / 2;
    flowerPatch.position.set(0, 0.52, 0.22);
    childGroup.add(flowerPatch);

    // Child Sitting Legs
    const childLegGeo = new THREE.CylinderGeometry(0.07, 0.065, 0.28, 16);
    const childShoeMat = new THREE.MeshStandardMaterial({ color: 0xd97757, roughness: 0.6 });

    const childLegR = new THREE.Group();
    childLegR.position.set(0.11, 0.34, 0.05);
    childLegR.rotation.x = -0.8;
    const childLegRMesh = new THREE.Mesh(childLegGeo, childDungareeMat);
    childLegRMesh.position.y = -0.13;
    childLegR.add(childLegRMesh);
    const childShoeR = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.17), childShoeMat);
    childShoeR.position.set(0, -0.28, 0.04);
    childLegR.add(childShoeR);
    childGroup.add(childLegR);

    const childLegL = new THREE.Group();
    childLegL.position.set(-0.11, 0.34, 0.05);
    childLegL.rotation.x = -0.8;
    const childLegLMesh = new THREE.Mesh(childLegGeo, childDungareeMat);
    childLegLMesh.position.y = -0.13;
    childLegL.add(childLegLMesh);
    const childShoeL = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.17), childShoeMat);
    childShoeL.position.set(0, -0.28, 0.04);
    childLegL.add(childShoeL);
    childGroup.add(childLegL);

    // Child Head Group
    const childHeadGroup = new THREE.Group();
    childHeadGroup.position.set(0, 0.84, 0);

    const childHead = new THREE.Mesh(new THREE.SphereGeometry(0.23, 28, 28), skinMat);
    childHead.scale.set(1.05, 0.98, 0.96);
    childHead.castShadow = true;
    childHeadGroup.add(childHead);

    // Almond Eyes with sweet upward slant
    const childEyeGeo = new THREE.SphereGeometry(0.036, 16, 16);
    childEyeGeo.scale(1.3, 0.65, 0.35);

    const childLeftEye = new THREE.Mesh(childEyeGeo, eyeMat);
    childLeftEye.position.set(-0.09, 0.03, 0.21);
    childLeftEye.rotation.z = -0.18;
    childLeftEye.rotation.y = -0.08;
    childHeadGroup.add(childLeftEye);

    const childRightEye = new THREE.Mesh(childEyeGeo, eyeMat);
    childRightEye.position.set(0.09, 0.03, 0.21);
    childRightEye.rotation.z = 0.18;
    childRightEye.rotation.y = 0.08;
    childHeadGroup.add(childRightEye);

    // Sparkles
    const childLeftSpark = new THREE.Mesh(sparkGeo, eyeSparkleMat);
    childLeftSpark.position.set(-0.085, 0.045, 0.225);
    childHeadGroup.add(childLeftSpark);
    const childRightSpark = new THREE.Mesh(sparkGeo, eyeSparkleMat);
    childRightSpark.position.set(0.095, 0.045, 0.225);
    childHeadGroup.add(childRightSpark);

    // Rosy Cheeks
    const childCheekGeo = new THREE.SphereGeometry(0.06, 14, 14);
    childCheekGeo.scale(1, 0.65, 0.3);
    const childLeftCheek = new THREE.Mesh(childCheekGeo, blushMat);
    childLeftCheek.position.set(-0.13, -0.045, 0.195);
    childHeadGroup.add(childLeftCheek);
    const childRightCheek = new THREE.Mesh(childCheekGeo, blushMat);
    childRightCheek.position.set(0.13, -0.045, 0.195);
    childHeadGroup.add(childRightCheek);

    // Cute Button Nose
    const childNose = new THREE.Mesh(new THREE.SphereGeometry(0.026, 12, 12), skinMat);
    childNose.scale.set(1.2, 0.8, 0.8);
    childNose.position.set(0, -0.01, 0.23);
    childHeadGroup.add(childNose);

    // Big Joyful Open Smile
    const childSmileCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.065, -0.085, 0.205),
      new THREE.Vector3(-0.03, -0.12, 0.225),
      new THREE.Vector3(0, -0.125, 0.23),
      new THREE.Vector3(0.03, -0.12, 0.225),
      new THREE.Vector3(0.065, -0.085, 0.205)
    ]);
    const childSmile = new THREE.Mesh(new THREE.TubeGeometry(childSmileCurve, 16, 0.012, 8, false), smileMat);
    childHeadGroup.add(childSmile);

    // Cute Hair with locks
    const childHairBase = new THREE.Mesh(new THREE.SphereGeometry(0.25, 24, 24), chestnutHair);
    childHairBase.scale.set(1.05, 1.05, 1.02);
    childHairBase.position.set(0, 0.04, -0.03);
    childHeadGroup.add(childHairBase);

    const lockGeo = new THREE.SphereGeometry(0.065, 12, 12);
    lockGeo.scale(1.2, 0.8, 0.8);
    const lock1 = new THREE.Mesh(lockGeo, chestnutHair);
    lock1.position.set(-0.075, 0.17, 0.15);
    childHeadGroup.add(lock1);
    const lock2 = new THREE.Mesh(lockGeo, chestnutHair);
    lock2.position.set(0.065, 0.18, 0.16);
    childHeadGroup.add(lock2);
    childGroup.add(childHeadGroup);

    // Child Arms
    const childArmGeo = new THREE.CylinderGeometry(0.05, 0.045, 0.28, 14);
    const childHandGeo = new THREE.SphereGeometry(0.055, 12, 12);

    const childLeftArm = new THREE.Group();
    childLeftArm.position.set(-0.18, 0.62, 0.08);
    const childLeftArmMesh = new THREE.Mesh(childArmGeo, childShirtMat);
    childLeftArmMesh.position.y = -0.13;
    childLeftArm.add(childLeftArmMesh);
    const childLeftHand = new THREE.Mesh(childHandGeo, skinMat);
    childLeftHand.position.set(0, -0.26, 0);
    childLeftArm.add(childLeftHand);
    childGroup.add(childLeftArm);

    const childRightArm = new THREE.Group();
    childRightArm.position.set(0.18, 0.62, 0.08);
    const childRightArmMesh = new THREE.Mesh(childArmGeo, childShirtMat);
    childRightArmMesh.position.y = -0.13;
    childRightArm.add(childRightArmMesh);
    const childRightHand = new THREE.Mesh(childHandGeo, skinMat);
    childRightHand.position.set(0, -0.26, 0);
    childRightArm.add(childRightHand);
    childGroup.add(childRightArm);

    scene.add(childGroup);

    // ==========================================
    // 3. COLORFUL WOODEN PLAY TOYS BETWEEN THEM
    // ==========================================
    const toysGroup = new THREE.Group();
    toysGroup.position.set(-0.05, 0.0, 0.35);

    const block1Mat = new THREE.MeshStandardMaterial({ color: 0xf4a261, roughness: 0.4 });
    const block1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), block1Mat);
    block1.position.set(-0.08, 0.09, 0);
    block1.rotation.y = 0.2;
    block1.castShadow = true;
    toysGroup.add(block1);

    const block2Mat = new THREE.MeshStandardMaterial({ color: 0x6495ed, roughness: 0.4 });
    const block2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.16, 16), block2Mat);
    block2.position.set(-0.08, 0.26, 0);
    block2.castShadow = true;
    toysGroup.add(block2);

    const block3Mat = new THREE.MeshStandardMaterial({ color: 0x52796f, roughness: 0.4 });
    const block3 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.18, 4), block3Mat);
    block3.position.set(0.14, 0.09, 0.05);
    block3.rotation.y = 0.4;
    block3.castShadow = true;
    toysGroup.add(block3);

    scene.add(toysGroup);

    // ==========================================
    // 4. FLOATING PASTEL PARTICLES
    // ==========================================
    const sparklesGroup = new THREE.Group();
    const sparkleColors = [0xf4a261, 0x8ecae6, 0xb8e0d2, 0xffd166, 0xd4a5a5];
    const sparkles = [];

    for (let i = 0; i < 22; i++) {
      const col = sparkleColors[i % sparkleColors.length];
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 12, 12),
        new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.5, roughness: 0.2 })
      );
      mesh.position.set(
        (Math.random() - 0.5) * 3.8,
        0.3 + Math.random() * 2.2,
        (Math.random() - 0.5) * 2.8
      );
      sparkles.push({
        mesh,
        baseY: mesh.position.y,
        speed: 0.7 + Math.random() * 0.9,
        offset: Math.random() * Math.PI * 2
      });
      sparklesGroup.add(mesh);
    }
    scene.add(sparklesGroup);

    // Mouse Drag/Move Orbit Interaction
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.35;
      targetRotationX = -y * 0.1;
    };

    container.addEventListener('pointermove', onPointerMove);

    // --- High-Performance Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      actionTimerRef.current += delta;
      const timer = actionTimerRef.current;
      const current = actionRef.current; // Read ref directly on every frame!

      // Smooth camera orbit
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05;

      // Animate floating sparkles
      sparkles.forEach((s) => {
        s.mesh.position.y = s.baseY + Math.sin(elapsedTime * s.speed + s.offset) * 0.14;
        s.mesh.rotation.y += delta * 0.6;
      });

      // Child warm eye blinks
      const blinkCycle = (elapsedTime % 4.2);
      const isBlinking = blinkCycle > 4.05 && blinkCycle < 4.15;
      childLeftEye.scale.y = isBlinking ? 0.08 : 0.65;
      childRightEye.scale.y = isBlinking ? 0.08 : 0.65;

      // ===============================================
      // HIGHLY VISIBLE, DISTINCT ANIMATIONS PER ACTION
      // ===============================================
      if (current === 'play') {
        // --- 1. PLAY WITH BLOCKS ---
        // Mom leans forward toward the blocks and guides them
        momGroup.position.set(-0.52, 0, 0.05);
        momGroup.rotation.y = 0.45;
        momTorso.rotation.x = 0.18;
        momHeadGroup.rotation.x = 0.28;
        momHeadGroup.rotation.y = 0.2;
        momHeadGroup.position.y = 1.23 + Math.sin(timer * 2.5) * 0.02;

        // Mom moves hands around the blocks
        momLeftArm.rotation.set(0.95 + Math.sin(timer * 3) * 0.2, 0, -0.35);
        momRightArm.rotation.set(0.75 + Math.cos(timer * 3) * 0.15, 0, 0.25);

        // Child reaches both hands to stack top block with joy
        childGroup.position.set(0.44, 0, 0.08);
        childGroup.rotation.y = -0.48;
        childTorso.rotation.x = 0.15;
        childHeadGroup.rotation.x = 0.22;
        childHeadGroup.rotation.y = -0.15;
        childHeadGroup.position.y = 0.84 + Math.sin(timer * 3.5) * 0.025;

        childLeftArm.rotation.set(1.1 + Math.sin(timer * 3.2) * 0.25, 0, 0.35);
        childRightArm.rotation.set(1.05 + Math.cos(timer * 3.2) * 0.2, 0, -0.25);

        // Top cylinder block wiggles & bounces as child stacks it!
        block2.position.y = 0.26 + Math.abs(Math.sin(timer * 3.2)) * 0.08;
        block2.rotation.y = timer * 1.5;

      } else if (current === 'clap') {
        // --- 2. PATTY-CAKE CLAP GAME ---
        // Mom and child face each other directly and clap rhythmically
        momGroup.position.set(-0.50, 0, 0.05);
        momGroup.rotation.y = 0.65;
        momTorso.rotation.x = 0;
        momHeadGroup.rotation.set(0.1, 0.15, -0.1);
        momHeadGroup.position.y = 1.25 + Math.abs(Math.sin(timer * 6)) * 0.025;

        // Mom clapping hands together
        const momClap = Math.sin(timer * 7.5) * 0.45;
        momLeftArm.rotation.set(1.0, 0, -0.6 + momClap);
        momRightArm.rotation.set(1.0, 0, 0.6 - momClap);

        // Child turning toward mom and clapping enthusiastically
        childGroup.position.set(0.38, 0, 0.05);
        childGroup.rotation.y = -0.65;
        childTorso.rotation.x = 0;
        childHeadGroup.rotation.set(0.1, -0.15, 0.1);
        childHeadGroup.position.y = 0.84 + Math.abs(Math.sin(timer * 7.5)) * 0.035;

        const childClap = Math.sin(timer * 7.5) * 0.5;
        childLeftArm.rotation.set(1.1, 0, 0.65 - childClap);
        childRightArm.rotation.set(1.1, 0, -0.65 + childClap);

        block2.position.y = 0.26;
        block2.rotation.y = 0;

      } else if (current === 'hug') {
        // --- 3. LOVING MATERNAL HUG ---
        // Mom leans in close and wraps both arms around child
        momGroup.position.set(-0.34, 0, 0.02);
        momGroup.rotation.y = 0.55;
        momTorso.rotation.z = -0.15;
        momTorso.rotation.x = 0.1;
        momHeadGroup.rotation.set(0.18, 0.2, -0.32);
        momHeadGroup.position.y = 1.22;

        momLeftArm.rotation.set(0.85, -0.4, -1.15); // Wrap around child's back
        momRightArm.rotation.set(0.7, 0.3, 0.65);

        // Child snuggles into mom's arms and rests against her
        childGroup.position.set(0.22, 0, 0.06);
        childGroup.rotation.y = -0.55;
        childTorso.rotation.z = 0.15;
        childTorso.rotation.x = 0.08;
        childHeadGroup.rotation.set(0.12, -0.2, 0.28);
        childHeadGroup.position.y = 0.83;

        childLeftArm.rotation.set(0.9, 0.4, 0.85); // Hugs mom
        childRightArm.rotation.set(0.85, -0.2, -0.6);

        block2.position.y = 0.26;
        block2.rotation.y = 0;

      } else if (current === 'wave') {
        // --- 4. WAVE TOGETHER TO VIEWER ---
        // Both face camera and wave enthusiastically
        momGroup.position.set(-0.58, 0, 0);
        momGroup.rotation.y = 0.05;
        momTorso.rotation.set(0, 0, 0);
        momHeadGroup.rotation.set(0, 0, 0.08);
        momHeadGroup.position.y = 1.25;

        // Mom right arm waving high
        momRightArm.rotation.set(0, Math.sin(timer * 6.5) * 0.4, 2.3);
        momLeftArm.rotation.set(0.3, 0, -0.2);

        // Child faces camera and waves right arm high
        childGroup.position.set(0.46, 0, 0.1);
        childGroup.rotation.y = -0.05;
        childTorso.rotation.set(0, 0, 0);
        childHeadGroup.rotation.set(0, 0, -0.12);
        childHeadGroup.position.y = 0.84;

        childRightArm.rotation.set(0, Math.sin(timer * 7.0) * 0.45, -2.35);
        childLeftArm.rotation.set(0.4, 0, 0.2);

        block2.position.y = 0.26;
        block2.rotation.y = 0;

      } else {
        // --- IDLE: GENTLE BREATHING & AFFECTIONATE LOOKS ---
        const breath = Math.sin(elapsedTime * 2.0);
        momGroup.position.set(-0.6, 0, 0);
        momGroup.rotation.y = 0.35;
        momTorso.position.y = 0.82 + breath * 0.01;
        momTorso.rotation.set(0, 0, 0);

        momHeadGroup.position.y = 1.25 + breath * 0.007;
        momHeadGroup.rotation.set(0.12, 0.28 + Math.sin(elapsedTime * 1.1) * 0.05, 0);

        momLeftArm.rotation.set(0.5 + Math.sin(elapsedTime * 1.5) * 0.05, 0, -0.2);
        momRightArm.rotation.set(0.3, 0, 0.2);

        childGroup.position.set(0.48, 0, 0.1);
        childGroup.rotation.y = -0.38;
        childTorso.position.y = 0.52 + Math.sin(elapsedTime * 2.5) * 0.012;
        childTorso.rotation.set(0, 0, 0);

        childHeadGroup.position.y = 0.84 + Math.sin(elapsedTime * 2.5) * 0.008;
        childHeadGroup.rotation.set(0.08, -0.3 + Math.sin(elapsedTime * 1.3) * 0.06, 0);

        childLeftArm.rotation.set(0.6 + Math.sin(elapsedTime * 1.8) * 0.05, 0, 0.15);
        childRightArm.rotation.set(0.4, 0, -0.15);

        block2.position.y = 0.26;
        block2.rotation.y = 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      const newW = container.clientWidth;
      const newH = 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Mount once!

  // Instant action trigger
  const triggerAction = (actionName) => {
    actionRef.current = actionName;
    actionTimerRef.current = 0;
    setActiveAction(actionName);
    if (onActionChange) onActionChange(actionName);

    if (actionName === 'hug' || actionName === 'clap') {
      confetti({
        particleCount: 35,
        spread: 75,
        origin: { y: 0.62 },
        colors: ['#e07a5f', '#52796f', '#f4a261', '#8ecae6', '#ffd166'],
        shapes: ['circle']
      });
    }
  };

  // Status message
  const getActionBanner = () => {
    switch (activeAction) {
      case 'play':
        return { text: "🧩 Playing with Blocks: Mom guides gently as her child stacks them proudly!", color: '#c97d1e', bg: '#fef5dc' };
      case 'clap':
        return { text: "👏 Patty-Cake Clap: Joyful hand-clapping and cheerful laughter!", color: '#2c5e9b', bg: '#e2effa' };
      case 'hug':
        return { text: "🤗 Loving Embrace: Wrapped tightly in unconditional maternal love!", color: '#2f4842', bg: '#e5efe9' };
      case 'wave':
        return { text: "👋 Waving Together: Mom and child sending you radiant smiles!", color: '#685980', bg: '#ece8f4' };
      default:
        return { text: "🌻 Peaceful Harmony: Click any button below to watch them play, clap, hug, or wave!", color: 'var(--text-secondary)', bg: 'var(--color-canvas)' };
    }
  };

  const banner = getActionBanner();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: 'transparent'
      }}
    >
      {/* 3D Canvas Viewport with generous 500px height for complete full-body view */}
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <div
          ref={mountRef}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            touchAction: 'none'
          }}
          title="Drag mouse to rotate 3D view!"
        />

        {/* Live Emotional Moment Badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '18px',
            fontSize: '0.82rem',
            color: 'var(--sage-700)',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid var(--border-soft)',
            fontWeight: 700,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            pointerEvents: 'none'
          }}
        >
          ✦ Drag to rotate
        </div>
      </div>

      {/* Control Bar - Cleanly Positioned Beneath Canvas */}
      <div
        style={{
          padding: '16px 20px 22px',
          background: 'rgba(255, 255, 255, 0.98)',
          borderTop: '1px solid var(--border-soft)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {/* Dynamic Speech / Moment Banner */}
        <div
          style={{
            fontSize: '0.92rem',
            fontWeight: 700,
            color: banner.color,
            background: banner.bg,
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(0,0,0,0.06)',
            textAlign: 'center',
            maxWidth: '94%',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
        >
          {banner.text}
        </div>

        {/* 4 Interactive Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <button
            id="btn-3d-play"
            onClick={() => triggerAction('play')}
            className={`btn-peaceful btn-peaceful-pill ${activeAction === 'play' ? 'btn-peaceful-primary' : 'btn-peaceful-secondary'}`}
            style={{ fontWeight: 700 }}
            title="Watch mother and child play with building blocks"
          >
            <span>🧩</span> Play with Blocks
          </button>

          <button
            id="btn-3d-clap"
            onClick={() => triggerAction('clap')}
            className={`btn-peaceful btn-peaceful-pill ${activeAction === 'clap' ? 'btn-peaceful-primary' : 'btn-peaceful-secondary'}`}
            style={{ fontWeight: 700 }}
            title="Play clapping patty-cake game together"
          >
            <span>👏</span> Patty-Cake Clap
          </button>

          <button
            id="btn-3d-hug"
            onClick={() => triggerAction('hug')}
            className={`btn-peaceful btn-peaceful-pill ${activeAction === 'hug' ? 'btn-peaceful-primary' : 'btn-peaceful-secondary'}`}
            style={{ fontWeight: 700 }}
            title="Warm maternal embrace and love"
          >
            <span>🤗</span> Loving Hug
          </button>

          <button
            id="btn-3d-wave"
            onClick={() => triggerAction('wave')}
            className={`btn-peaceful btn-peaceful-pill ${activeAction === 'wave' ? 'btn-peaceful-primary' : 'btn-peaceful-secondary'}`}
            style={{ fontWeight: 700 }}
            title="Mother and child wave hello together"
          >
            <span>👋</span> Wave Together
          </button>

          {activeAction !== 'idle' && (
            <button
              onClick={() => triggerAction('idle')}
              className="btn-peaceful btn-peaceful-pill btn-peaceful-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px', opacity: 0.75 }}
              title="Return to gentle idle breathing"
            >
              <span>↺</span> Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
