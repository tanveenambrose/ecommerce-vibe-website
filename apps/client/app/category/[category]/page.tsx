'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import api from '@/lib/axios';
import { motion } from 'framer-motion';
import { Filter, Grid3x3, List, ChevronDown, X } from 'lucide-react';
import AnimatedBlobs from '@/components/home/animated-blobs';
import ParticleBackground from '@/components/home/particle-background';

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    images: string[];
}

const categoryInfo: Record<string, { title: string; description: string; gradient: string }> = {
    all: {
        title: 'All Products',
        description: 'Explore our entire collection of amazing products',
        gradient: 'from-blue-600 to-purple-600',
    },
    electronics: {
        title: 'Electronics & Gadgets',
        description: 'Cutting-edge technology at your fingertips',
        gradient: 'from-blue-600 to-cyan-600',
    },
    fashion: {
        title: 'Fashion & Apparel',
        description: 'Style that speaks volumes',
        gradient: 'from-pink-600 to-rose-600',
    },
    'home-garden': {
        title: 'Home & Lifestyle',
        description: 'Transform your living space',
        gradient: 'from-green-600 to-emerald-600',
    },
    'health-beauty': {
        title: 'Health & Beauty',
        description: 'Beauty and wellness essentials',
        gradient: 'from-purple-600 to-pink-600',
    },
    'sports-outdoors': {
        title: 'Family & Hobby',
        description: 'Adventure awaits',
        gradient: 'from-orange-600 to-red-600',
    },
};

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    useEffect(() => {
        loadProducts();
    }, [category, sortBy]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const endpoint = category === 'all' ? '/products' : `/products?category=${category}`;
            const { data } = await api.get(endpoint);

            let sorted = [...data];
            if (sortBy === 'price-asc') {
                sorted.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-desc') {
                sorted.sort((a, b) => b.price - a.price);
            } else {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
            }

            setProducts(sorted);
        } catch (error) {
            console.error('Failed to load products:', error);
        } finally {
            setLoading(false);
        }
    };

    const info = categoryInfo[category] || categoryInfo.all;

    const filteredProducts = products.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    return (
        <div className="min-h-screen bg-slate-900">
            <AnimatedBlobs />
            <ParticleBackground />

            {/* Hero Section */}
            <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center relative z-10"
                    >
                        <motion.div
                            className={`inline-block px-6 py-2 bg-gradient-to-r ${info.gradient} rounded-full mb-6`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-white font-semibold text-sm uppercase tracking-wider">
                                Featured Collection
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            {info.title}
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                            {info.description}
                        </p>

                        <div className="flex items-center justify-center gap-2 text-white/50">
                            <span className="text-2xl font-bold text-white">{filteredProducts.length}</span>
                            <span>products available</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Filters & Controls */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="glass-card rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Left Side - Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-white"
                        >
                            <Filter className="w-5 h-5" />
                            <span className="font-medium">Filters</span>
                            {showFilters && <X className="w-4 h-4" />}
                        </button>

                        {/* Right Side - Sort & View */}
                        <div className="flex items-center gap-3">
                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="name" className="bg-slate-800">Name</option>
                                <option value="price-asc" className="bg-slate-800">Price: Low to High</option>
                                <option value="price-desc" className="bg-slate-800">Price: High to Low</option>
                            </select>

                            {/* View Toggle */}
                            <div className="flex items-center gap-1 bg-white/10 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    <Grid3x3 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-all ${viewMode === 'list'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-6 pt-6 border-t border-white/10"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label className="text-white font-medium mb-2 block">
                                        Price Range: ${priceRange[0]} - ${priceRange[1]}
                                    </label>
                                    <div className="flex gap-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                            className="flex-1"
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                            className="flex-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Products Grid/List */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="glass-card rounded-2xl p-12 text-center">
                        <p className="text-white/70 text-lg">No products found in this category.</p>
                    </div>
                ) : (
                    <motion.div
                        className={
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                                : 'flex flex-col gap-4'
                        }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
