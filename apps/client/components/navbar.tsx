"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, User, LogOut, UserCircle, ChevronDown, Laptop, Shirt, Home, Sparkles, Baby, Grid3x3, Package } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { useCart } from '@/lib/cart-context';

const categories = [
    {
        name: 'Electronics & Gadgets',
        icon: Laptop,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        subcategories: [
            { name: 'Computers & Laptops', items: ['Gaming Laptops', 'Ultrabooks', 'Desktop PCs', 'MacBooks'] },
            { name: 'Mobile & Tablets', items: ['Smartphones', 'iPads', 'Android Tablets', 'Refurbished Phones'] },
            { name: 'Audio & Sound', items: ['Headphones', 'Bluetooth Speakers', 'Soundbars', 'Earbuds'] },
            { name: 'Wearable Tech', items: ['Smartwatches', 'Fitness Trackers', 'VR Headsets'] },
            { name: 'Cameras & Gear', items: ['DSLRs', 'Action Cameras', 'Drones', 'Lenses'] },
        ]
    },
    {
        name: 'Fashion & Apparel',
        icon: Shirt,
        color: 'text-pink-600',
        bgColor: 'bg-pink-100',
        subcategories: [
            { name: "Men's Clothing", items: ['Shirts', 'T-shirts', 'Jeans', 'Suits', 'Outerwear'] },
            { name: "Women's Clothing", items: ['Dresses', 'Tops', 'Ethnic Wear', 'Activewear', 'Lingerie'] },
            { name: 'Footwear', items: ['Sneakers', 'Formal Shoes', 'Sandals', 'Heels', 'Boots'] },
            { name: 'Accessories', items: ['Watches', 'Sunglasses', 'Belts', 'Handbags', 'Jewelry'] },
        ]
    },
    {
        name: 'Home & Lifestyle',
        icon: Home,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        subcategories: [
            { name: 'Home Decor', items: ['Wall Art', 'Vases', 'Lighting', 'Mirrors'] },
            { name: 'Furniture', items: ['Sofas', 'Dining Tables', 'Bed Frames', 'Office Chairs'] },
            { name: 'Kitchen & Dining', items: ['Cookware', 'Tableware', 'Small Appliances'] },
            { name: 'Bed & Bath', items: ['Bedding Sets', 'Towels', 'Bathroom Accessories'] },
        ]
    },
    {
        name: 'Health & Beauty',
        icon: Sparkles,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        subcategories: [
            { name: 'Skincare', items: ['Moisturizers', 'Serums', 'Sunscreen', 'Cleansers'] },
            { name: 'Makeup', items: ['Face', 'Eyes', 'Lips', 'Palettes'] },
            { name: 'Personal Care', items: ['Hair Care', 'Oral Care', 'Fragrances'] },
            { name: 'Wellness', items: ['Vitamins', 'Supplements', 'Fitness Equipment'] },
        ]
    },
    {
        name: 'Family & Hobby',
        icon: Baby,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        subcategories: [
            { name: 'Toys & Games', items: ['Board Games', 'Action Figures', 'Puzzles', 'Educational Toys'] },
            { name: 'Baby Essentials', items: ['Diapers', 'Strollers', 'Baby Clothing', 'Feeding Supplies'] },
            { name: 'Books & Stationery', items: ['Fiction', 'Academic Books', 'Journals', 'Art Supplies'] },
            { name: 'Sports & Outdoors', items: ['Camping Gear', 'Gym Equipment', 'Cycling', 'Team Sports'] },
        ]
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const { totalItems } = useCart();
    const profileDropdownRef = useRef<HTMLDivElement>(null);
    const categoriesDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
                setShowProfileDropdown(false);
            }
            if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target as Node)) {
                setShowCategoriesDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ShopHub
                        </span>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Shop
                        </Link>

                        {/* Categories Dropdown - Only show when authenticated */}
                        {isAuthenticated && (
                            <div className="relative" ref={categoriesDropdownRef}>
                                <button
                                    onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                >
                                    <Grid3x3 className="h-4 w-4" />
                                    Categories
                                    <ChevronDown className={`h-4 w-4 transition-transform ${showCategoriesDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showCategoriesDropdown && (
                                    <div className="fixed left-1/2 top-20 -translate-x-1/2 w-[90vw] max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-100 p-6 animate-fadeIn overflow-auto max-h-[80vh] z-50">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Browse by Category</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {categories.map((category, idx) => {
                                                const Icon = category.icon;
                                                const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                                                return (
                                                    <div key={idx} className="p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                                                        <Link
                                                            href={`/category/${categorySlug}`}
                                                            onClick={() => setShowCategoriesDropdown(false)}
                                                            className="flex items-center gap-3 mb-4 group"
                                                        >
                                                            <div className={`p-3 ${category.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                                                                <Icon className={`h-6 w-6 ${category.color}`} />
                                                            </div>
                                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                                                        </Link>
                                                        <div className="space-y-2 ml-2">
                                                            {category.subcategories.slice(0, 4).map((sub, subIdx) => (
                                                                <Link
                                                                    key={subIdx}
                                                                    href={`/category/${categorySlug}?sub=${sub.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                                                                    onClick={() => setShowCategoriesDropdown(false)}
                                                                    className="block text-sm text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all font-medium"
                                                                >
                                                                    → {sub.name}
                                                                </Link>
                                                            ))}
                                                            {category.subcategories.length > 4 && (
                                                                <Link
                                                                    href={`/category/${categorySlug}`}
                                                                    onClick={() => setShowCategoriesDropdown(false)}
                                                                    className="block text-xs text-blue-600 hover:text-blue-700 font-semibold mt-2"
                                                                >
                                                                    View all {category.subcategories.length} subcategories →
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Orders Icon - Only show when authenticated */}
                        {isAuthenticated && (
                            <Link href="/orders" className="relative">
                                <div className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
                                    <Package className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </Link>
                        )}

                        {/* Cart Icon with Badge */}
                        <Link href="/cart" className="relative">
                            <div className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <ShoppingCart className="h-6 w-6 text-gray-700" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {isAuthenticated ? (
                            // Authenticated User Dropdown
                            <div className="relative" ref={profileDropdownRef}>
                                <button
                                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all"
                                >
                                    <UserCircle className="h-5 w-5" />
                                    <span className="font-medium">{user?.firstName}</span>
                                </button>

                                {showProfileDropdown && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {user?.firstName} {user?.lastName}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                        </div>

                                        <Link
                                            href="/profile"
                                            onClick={() => setShowProfileDropdown(false)}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            <User className="h-5 w-5 text-gray-400" />
                                            <span className="font-medium">Profile Info</span>
                                        </Link>

                                        <button
                                            onClick={() => {
                                                setShowProfileDropdown(false);
                                                logout();
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut className="h-5 w-5" />
                                            <span className="font-medium">Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Not Authenticated - Show Sign In/Register
                            <>
                                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all"
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        {/* Duplicate Cart Icon Removed */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                            Shop
                        </Link>

                        {/* Mobile Categories */}
                        {isAuthenticated && (
                            <details className="px-3">
                                <summary className="py-2 text-gray-700 font-medium cursor-pointer hover:text-blue-600 flex items-center gap-2">
                                    <Grid3x3 className="h-4 w-4" />
                                    Categories
                                </summary>
                                <div className="mt-2 ml-4 space-y-2">
                                    {categories.map((category, idx) => {
                                        const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                                        return (
                                            <details key={idx} className="text-sm">
                                                <summary className="py-1 text-gray-700 cursor-pointer hover:text-blue-600 font-semibold">
                                                    {category.name}
                                                </summary>
                                                <div className="ml-4 mt-1 space-y-1">
                                                    <Link
                                                        href={`/category/${categorySlug}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-xs text-blue-600 hover:text-blue-700 font-medium mb-2"
                                                    >
                                                        → View all {category.name}
                                                    </Link>
                                                    {category.subcategories.map((sub, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            href={`/category/${categorySlug}?sub=${sub.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block text-xs text-gray-600 hover:text-blue-600 py-1"
                                                        >
                                                            • {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </details>
                                        );
                                    })}
                                </div>
                            </details>
                        )}

                        {isAuthenticated ? (
                            <>
                                <div className="px-3 py-2 bg-gray-50 rounded-lg">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {user?.firstName} {user?.lastName}
                                    </p>
                                    <p className="text-xs text-gray-500">{user?.email}</p>
                                </div>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User className="h-5 w-5" />
                                    Profile Info
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        logout();
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium"
                                >
                                    <LogOut className="h-5 w-5" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        <Link
                            href="/cart"
                            className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>Shopping Cart</span>
                            {totalItems > 0 && (
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                )}
            </div>
        </nav >
    );
}
