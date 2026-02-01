'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductCard3DProps {
    name: string;
    price: number;
    color: string;
    image?: string;
}

// Map color names to complete Tailwind gradient classes
const colorGradients: Record<string, string> = {
    'purple-500': 'bg-gradient-to-br from-purple-500 to-purple-500/50',
    'blue-500': 'bg-gradient-to-br from-blue-500 to-blue-500/50',
    'indigo-500': 'bg-gradient-to-br from-indigo-500 to-indigo-500/50',
    'pink-500': 'bg-gradient-to-br from-pink-500 to-pink-500/50',
    'cyan-500': 'bg-gradient-to-br from-cyan-500 to-cyan-500/50',
    'rose-500': 'bg-gradient-to-br from-rose-500 to-rose-500/50',
    'emerald-500': 'bg-gradient-to-br from-emerald-500 to-emerald-500/50',
    'orange-500': 'bg-gradient-to-br from-orange-500 to-orange-500/50',
};

export default function ProductCard3D({ name, price, color, image }: ProductCard3DProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    const gradientClass = colorGradients[color] || colorGradients['blue-500'];

    return (
        <motion.div
            ref={cardRef}
            className="relative glass-card rounded-2xl overflow-hidden group perspective"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Product Image */}
            <div className={`h-48 ${gradientClass} flex items-center justify-center relative overflow-hidden`}>
                {/* 3D animated icon placeholder */}
                <motion.div
                    className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
                    animate={{
                        rotateY: [0, 360],
                        rotateX: [0, 15, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <div className="text-4xl">📦</div>
                </motion.div>

                {image && (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                )}

                {/* Shine effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] ${isHovered ? 'translate-x-[100%]' : ''} transition-transform duration-500`} />

                {/* Heart button */}
                <motion.button
                    className="absolute top-4 right-4 p-2 glass rounded-full"
                    initial={{ x: 100 }}
                    animate={{ x: isHovered ? 0 : 100 }}
                    transition={{ duration: 0.3 }}
                >
                    <Heart className="w-5 h-5 text-white" />
                </motion.button>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors`}>
                    {name}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${price}</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                        Add
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
