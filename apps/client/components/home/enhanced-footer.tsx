'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnhancedFooter() {
    return (
        <footer className="relative z-10 mt-20">
            {/* Main Footer Content */}
            <div className="glass-card border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-lg">S</span>
                                </div>
                                ShopHub
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Your trusted e-commerce platform for quality products at great prices. Shop with confidence and style.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="p-2.5 bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <Facebook className="h-4 w-4 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2.5 bg-white/10 hover:bg-blue-400 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <Twitter className="h-4 w-4 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2.5 bg-white/10 hover:bg-pink-600 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <Instagram className="h-4 w-4 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2.5 bg-white/10 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <Github className="h-4 w-4 text-white" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Shop Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-bold text-white">Shop</h4>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="/category/all" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/electronics" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/fashion" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Fashion
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/home-garden" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Home & Garden
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Customer Service */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-bold text-white">Support</h4>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Shipping Info
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Returns & Refunds
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                        Track Order
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-bold text-white">Contact Us</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3 text-white/70">
                                    <Mail className="h-4 w-4 mt-0.5 text-blue-400" />
                                    <span>support@shophub.com</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/70">
                                    <Phone className="h-4 w-4 mt-0.5 text-blue-400" />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/70">
                                    <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                                    <span>123 Shopping Street, NY 10001</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-white/50">
                            © 2024 ShopHub. All rights reserved.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <a href="#" className="text-white/50 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
