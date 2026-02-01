'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import FloatingShapes to avoid SSR issues with Three.js
const FloatingShapes = dynamic(() => import('./floating-shapes'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0" />,
});

const rotatingWords = ['Products', 'Deals', 'Styles', 'Gadgets'];

export default function HeroSection() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = rotatingWords[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                    setTypingSpeed(150);
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentWord.substring(0, displayedText.length - 1));
                    setTypingSpeed(75);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <FloatingShapes />

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
                        Discover Amazing{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                {displayedText}
                                <span className="inline-block w-1 h-12 md:h-16 bg-blue-400 ml-1 animate-pulse">|</span>
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                        </span>
                    </h1>

                    <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mb-8">
                        Your One-Stop Shopping Destination
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-white/50 font-medium mb-12">
                        Free shipping on orders over $50 • 30-day returns • 24/7 support
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/category/all">
                            <motion.button
                                className="group px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ShoppingBag className="h-5 w-5" />
                                Shop Now
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link href="/category/all">
                            <motion.button
                                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Categories
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
