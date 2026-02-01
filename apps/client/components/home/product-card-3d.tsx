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
            <div className={`h-48 bg-gradient-to-br from-${color} to-${color}/50 flex items-center justify-center relative overflow-hidden`}>
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
