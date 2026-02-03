'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const icons = [
    { src: '/assets/floating/item-3.png', size: 130 }, // MacBook
    { src: '/assets/floating/item-2.png', size: 70 }, // iPhone 1
    { src: '/assets/floating/item-1.png', size: 90 }, // Headphones
    { src: '/assets/floating/item-4.png', size: 70 }, // iPhone 2
    { src: '/assets/floating/item-5.png', size: 80 }, // Watch
    { src: '/assets/floating/item-6.png', size: 90 }, // Sunglasses
    { src: '/assets/floating/item-7.png', size: 140 }, // Grocery Bag
    { src: '/assets/floating/item-8.png', size: 120 }, // Sofa
    { src: '/assets/floating/item-9.png', size: 90 }, // Office Chair
    { src: '/assets/floating/item-10.png', size: 85 }, // Sneakers
    { src: '/assets/floating/item-11.png', size: 110 }, // New Item 1
    { src: '/assets/floating/item-12.png', size: 80 }, // New Item 2
    { src: '/assets/floating/item-13.png', size: 100 }, // New Item 3
    { src: '/assets/floating/item-14.png', size: 120 }, // New Item 4
    { src: '/assets/floating/item-15.png', size: 90 }, // New Item 5
];

export default function FloatingShapes() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const elements = gsap.utils.toArray<HTMLDivElement>('.floating-icon');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const padding = 50; // Safety buffer from edges

        elements.forEach((el, i) => {
            // Start from center
            gsap.set(el, {
                x: centerX,
                y: centerY,
                scale: 0,
                opacity: 0,
            });

            // Initial "Big Bang" to a random SAFE position within viewport
            // We calculate a random point effectively within the screen
            const safeWidth = window.innerWidth - padding * 2;
            const safeHeight = window.innerHeight - padding * 2;

            // Random target within safe bounds
            const targetX = gsap.utils.random(padding, window.innerWidth - padding);
            const targetY = gsap.utils.random(padding, window.innerHeight - padding);

            // Animate out to specific spot
            gsap.to(el, {
                x: targetX - (el.offsetWidth / 2),
                y: targetY - (el.offsetHeight / 2),
                scale: gsap.utils.random(0.5, 1.5),
                opacity: gsap.utils.random(0.7, 1),
                duration: gsap.utils.random(2, 3),
                ease: "power2.out", // Exponential ease out for "burst" feel
                delay: gsap.utils.random(0, 0.5),
                onComplete: () => float(el) // Start floating after reaching destination
            });
        });

        // Continuous floating within bounds
        const float = (el: HTMLDivElement) => {
            const padding = 50; // Keep using padding

            // Pick a new random spot ON SCREEN
            const nextX = gsap.utils.random(padding, window.innerWidth - padding);
            const nextY = gsap.utils.random(padding, window.innerHeight - padding);

            gsap.to(el, {
                x: nextX - (el.offsetWidth / 2),
                y: nextY - (el.offsetHeight / 2),
                rotation: gsap.utils.random(-180, 180),
                duration: gsap.utils.random(5, 10), // Slower, drift-like
                ease: "sine.inOut", // Smooth natural movement
                onComplete: () => float(el) // Loop
            });
        };

        // Separate "Breathing" animation for Scale and Opacity
        // Small = Opacity 0.25, Big = Opacity 0.9-1.0
        const breathe = (el: HTMLDivElement) => {
            const isGrowing = Math.random() > 0.5; // Random start direction
            const targetScale = isGrowing ? gsap.utils.random(1.2, 1.5) : gsap.utils.random(0.5, 0.8);
            const targetOpacity = isGrowing ? gsap.utils.random(0.9, 1) : 0.25;

            gsap.to(el, {
                scale: targetScale,
                opacity: targetOpacity,
                duration: gsap.utils.random(3, 6),
                ease: "sine.inOut",
                onComplete: () => breathe(el)
            });
        };

        // Start breathing after initial appearance
        elements.forEach(el => {
            // We can delay this slightly so they don't all pulse in sync exactly when they spawn
            gsap.delayedCall(gsap.utils.random(1, 3), () => breathe(el));
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className="floating-icon absolute"
                    style={{
                        width: item.size,
                    }}
                >
                    <img
                        src={item.src}
                        alt="Floating element"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>
            ))}
        </div>
    );
}
