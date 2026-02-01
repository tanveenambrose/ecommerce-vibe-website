'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X, User, ChevronDown, Laptop, Shirt, Home as HomeIcon, Sparkles, Baby, LogOut, Package, Settings } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useCart } from '@/lib/cart-context';

const categories = [
    {
        name: 'Electronics & Gadgets',
        slug: 'electronics',
        icon: Laptop,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
    },
    {
        name: 'Fashion & Apparel',
        slug: 'fashion',
        icon: Shirt,
        color: 'text-pink-400',
        bgColor: 'bg-pink-500/20',
    },
    {
        name: 'Home & Lifestyle',
        slug: 'home-garden',
        icon: HomeIcon,
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
    },
    {
        name: 'Health & Beauty',
        slug: 'health-beauty',
        icon: Sparkles,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/20',
    },
    {
        name: 'Family & Hobby',
        slug: 'sports-outdoors',
        icon: Baby,
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/20',
    },
];

export default function EnhancedNav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const { user, logout } = useAuth();
    const { items } = useCart();
    const categoriesRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
                setShowCategories(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setShowProfileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
                        {/* Categories Dropdown */}
                        <div className="relative" ref={categoriesRef}>
                            <button
                                onClick={() => setShowCategories(!showCategories)}
                                className="flex items-center gap-1 text-white/90 hover:text-white font-medium transition-colors"
                            >
                                Categories
                                <ChevronDown className={`w-4 h-4 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {showCategories && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full mt-2 right-0 w-64 glass-card rounded-xl shadow-2xl overflow-hidden"
                                    >
                                        {categories.map((category) => {
                                            const Icon = category.icon;
                                            return (
                                                <Link
                                                    key={category.slug}
                                                    href={`/category/${category.slug}`}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors"
                                                    onClick={() => setShowCategories(false)}
                                                >
                                                    <div className={`p-2 ${category.bgColor} rounded-lg`}>
                                                        <Icon className={`w-5 h-5 ${category.color}`} />
                                                    </div>
                                                    <span className="text-white font-medium">{category.name}</span>
                                                </Link>
                                            );
                                        })}
                                        <Link
                                            href="/category/all"
                                            className="block px-4 py-3 text-center text-blue-400 hover:text-blue-300 font-medium border-t border-white/10"
                                            onClick={() => setShowCategories(false)}
                                        >
                                            View All Products
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-white/90 hover:text-white transition-colors" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                                >
                                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white font-medium max-w-[100px] truncate">{user.name || user.email}</span>
                                    <ChevronDown className={`w-4 h-4 text-white transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {showProfileDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full mt-2 right-0 w-56 glass-card rounded-xl shadow-2xl overflow-hidden"
                                        >
                                            <div className="px-4 py-3 border-b border-white/10">
                                                <p className="text-white font-semibold">{user.name || 'User'}</p>
                                                <p className="text-white/60 text-sm truncate">{user.email}</p>
                                            </div>
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors text-white"
                                                onClick={() => setShowProfileDropdown(false)}
                                            >
                                                <User className="w-4 h-4" />
                                                My Profile
                                            </Link>
                                            <Link
                                                href="/orders"
                                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors text-white"
                                                onClick={() => setShowProfileDropdown(false)}
                                            >
                                                <Package className="w-4 h-4" />
                                                My Orders
                                            </Link>
                                            {user.role === 'admin' && (
                                                <Link
                                                    href="/admin"
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors text-white"
                                                    onClick={() => setShowProfileDropdown(false)}
                                                >
                                                    <Settings className="w-4 h-4" />
                                                    Admin Panel
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setShowProfileDropdown(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/20 transition-colors text-white border-t border-white/10"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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

                                {/* Categories */}
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-white/60 text-sm font-semibold mb-2">Categories</p>
                                    {categories.map((category) => {
                                        const Icon = category.icon;
                                        return (
                                            <Link
                                                key={category.slug}
                                                href={`/category/${category.slug}`}
                                                className="flex items-center gap-3 py-2 text-white hover:text-blue-400 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <Icon className="w-5 h-5" />
                                                {category.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <Link href="/cart" className="text-white font-medium flex items-center gap-2">
                                    Cart {cartItemCount > 0 && `(${cartItemCount})`}
                                </Link>

                                {user ? (
                                    <>
                                        <div className="border-t border-white/10 pt-4">
                                            <p className="text-white font-semibold mb-1">{user.name || 'User'}</p>
                                            <p className="text-white/60 text-sm mb-3">{user.email}</p>
                                        </div>
                                        <Link href="/profile" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
                                            My Profile
                                        </Link>
                                        <Link href="/orders" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
                                            My Orders
                                        </Link>
                                        {user.role === 'admin' && (
                                            <Link href="/admin" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
                                                Admin Panel
                                            </Link>
                                        )}
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
