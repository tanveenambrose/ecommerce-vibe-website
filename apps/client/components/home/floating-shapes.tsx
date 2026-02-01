'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FloatingShapes() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on client-side
        if (typeof window === 'undefined' || !containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 10;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const purpleLight = new THREE.PointLight(0xa855f7, 2, 100);
        purpleLight.position.set(-5, 5, 5);
        scene.add(purpleLight);

        // Create metallic material helper
        const createMetallicMaterial = (color: number) =>
            new THREE.MeshStandardMaterial({
                color,
                metalness: 0.8,
                roughness: 0.2,
                emissive: color,
                emissiveIntensity: 0.2,
            });

        // Create shapes
        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 100),
            createMetallicMaterial(0x6366f1)
        );
        torus.position.set(-6, 2, -5);

        const icosahedron = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1.5, 0),
            createMetallicMaterial(0xec4899)
        );
        icosahedron.position.set(6, -2, -2);

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 32, 32),
            createMetallicMaterial(0x0ea5e9)
        );
        sphere.position.set(0, -4, -8);

        const octahedron = new THREE.Mesh(
            new THREE.OctahedronGeometry(1.3, 0),
            createMetallicMaterial(0xa855f7)
        );
        octahedron.position.set(-4, -5, 0);

        scene.add(torus, icosahedron, sphere, octahedron);

        // Animation
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            // Rotate shapes
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.position.y = 2 + Math.sin(time) * 0.5;

            icosahedron.rotation.x += 0.005;
            icosahedron.rotation.y += 0.01;
            icosahedron.position.y = -2 + Math.sin(time + 1) * 0.5;

            sphere.rotation.x += 0.003;
            sphere.rotation.y += 0.007;
            sphere.position.y = -4 + Math.sin(time + 2) * 0.5;

            octahedron.rotation.x += 0.007;
            octahedron.rotation.y += 0.003;
            octahedron.position.y = -5 + Math.sin(time + 3) * 0.5;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            containerRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-5 pointer-events-none"
            aria-hidden="true"
        />
    );
}
