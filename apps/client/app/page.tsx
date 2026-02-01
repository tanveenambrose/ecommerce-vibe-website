'use client';

import AnimatedBlobs from '@/components/home/animated-blobs';
import ParticleBackground from '@/components/home/particle-background';
import EnhancedNav from '@/components/home/enhanced-nav';
import HeroSection from '@/components/home/hero-section';
import FeatureCards from '@/components/home/feature-cards';
import ProductCard3D from '@/components/home/product-card-3d';
import EnhancedFooter from '@/components/home/enhanced-footer';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const products = [
  { name: 'Neon Headphones', price: 299, color: 'purple-500' },
  { name: 'Glass Smartwatch', price: 199, color: 'blue-500' },
  { name: 'VR Headset Pro', price: 499, color: 'indigo-500' },
  { name: 'Wireless Earbuds', price: 149, color: 'pink-500' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <AnimatedBlobs />
      <ParticleBackground />
      <EnhancedNav />

      <HeroSection />

      <FeatureCards />

      {/* Product Grid Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-white/70">
              Discover our most popular items
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard3D {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center"
          >
            <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to start shopping?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join thousands of satisfied customers and get exclusive deals
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
