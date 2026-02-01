'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, ShieldCheck, TrendingUp, Gift } from 'lucide-react';
import { useRef } from 'react';

const features = [
    {
        icon: Truck,
        title: 'Fast Shipping',
        description: 'Free delivery on orders over $50',
        color: 'blue-400',
    },
    {
        icon: ShieldCheck,
        title: 'Secure Payment',
        description: '100% protected transactions',
        color: 'purple-400',
    },
    {
        icon: TrendingUp,
        title: 'Best Deals',
        description: 'Great prices every day',
        color: 'green-400',
    },
    {
        icon: Gift,
        title: 'Rewards Program',
        description: 'Earn points on every purchase',
        color: 'yellow-400',
    },
];

export default function FeatureCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                style={{ y }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                            >
                                <div
                                    className={`w-16 h-16 rounded-full bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-white/70">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
