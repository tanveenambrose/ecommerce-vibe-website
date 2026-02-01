'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const icons = [
    { src: '/assets/floating/item-3.png', size: 130, initialX: -35, initialY: 20 }, // MacBook
    { src: '/assets/floating/item-2.png', size: 70, initialX: 30, initialY: -20 }, // iPhone 1
    { src: '/assets/floating/item-1.png', size: 90, initialX: 40, initialY: -10 }, // Headphones
    { src: '/assets/floating/item-4.png', size: 70, initialX: -15, initialY: -35 }, // iPhone 2
    { src: '/assets/floating/item-5.png', size: 80, initialX: 20, initialY: 30 }, // Watch
    { src: '/assets/floating/item-6.png', size: 90, initialX: -25, initialY: 10 }, // Sunglasses
    { src: '/assets/floating/item-7.png', size: 140, initialX: 10, initialY: -40 }, // Grocery Bag
    { src: '/assets/floating/item-8.png', size: 120, initialX: -40, initialY: -15 }, // Sofa
    { src: '/assets/floating/item-9.png', size: 90, initialX: 45, initialY: 35 }, // Office Chair
    { src: '/assets/floating/item-10.png', size: 85, initialX: 0, initialY: 40 }, // Sneakers
];

export default function FloatingShapes() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {icons.map((item, index) => (
                <FloatingIcon key={index} {...item} index={index} />
            ))}
        </div>
    );
}

function FloatingIcon({ src, size, initialX, initialY, index }: any) {
    // Generate random animation parameters for more natural movement
    const duration = 20 + index * 5;
    const yOffset = 30 + index * 5;
    const rotateRange = 5 + index * 3;

    return (
        <motion.div
            className="absolute opacity-80"
            style={{
                left: `calc(50% + ${initialX}vw)`,
                top: `calc(50% + ${initialY}vh)`,
                width: size,
            }}
            animate={{
                y: [-yOffset, yOffset, -yOffset],
                rotate: [-rotateRange, rotateRange, -rotateRange],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <img
                src={src}
                alt="Floating element"
                className="w-full h-auto drop-shadow-2xl"
            />
        </motion.div>
    );
}
