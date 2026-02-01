'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useCart } from '@/lib/cart-context';

export default function EnhancedNav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ShoppingCart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">ShopHub</span>
                    </Link>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/category/all" className="text-white/90 hover:text-white font-medium transition-colors">
                            Shop
                        </Link>

                        <Link href="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-white/90 hover:text-white transition-colors" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/profile" className="text-white/90 hover:text-white font-medium transition-colors">
                                    {user.name}
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-white/90 hover:text-white font-medium transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="text-white/90 hover:text-white font-medium transition-colors">
                                    Sign In
                                </Link>
                                <Link href="/register">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-4 glass rounded-2xl p-6"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 bg-white/10 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Link href="/category/all" className="text-white font-medium">
                                    Shop
                                </Link>
                                <Link href="/cart" className="text-white font-medium flex items-center gap-2">
                                    Cart {cartItemCount > 0 && `(${cartItemCount})`}
                                </Link>
                                {user ? (
                                    <>
                                        <Link href="/profile" className="text-white font-medium">
                                            Profile
                                        </Link>
                                        <button onClick={logout} className="text-white font-medium text-left">
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="text-white font-medium">
                                            Sign In
                                        </Link>
                                        <Link href="/register" className="text-white font-medium">
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
