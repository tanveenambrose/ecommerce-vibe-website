"use client";

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProductsByCategory, getProductsBySubcategory, Product, subCategoryBrands } from '@/lib/products-data';
import { ShoppingCart, Star, ChevronLeft, Filter, ChevronDown, Check } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function CategoryPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const category = params.category as string;
    const subcategory = searchParams.get('sub');
    const { addToCart } = useCart();

    const [products, setProducts] = useState<Product[]>([]);
    const [priceRange, setPriceRange] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('featured');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [displayCount, setDisplayCount] = useState(20); // Show 20 products initially

    useEffect(() => {
        let filteredProducts: Product[] = [];

        if (subcategory) {
            filteredProducts = getProductsBySubcategory(category, subcategory);
        } else {
            filteredProducts = getProductsByCategory(category);
        }

        // Apply filters
        if (inStockOnly) {
            filteredProducts = filteredProducts.filter(p => p.inStock);
        }

        // Apply brand filter
        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(p => p.brand && selectedBrands.includes(p.brand));
        }

        // Apply price range filter
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(p => {
                if (max) {
                    return p.price >= min && p.price <= max;
                } else {
                    return p.price >= min;
                }
            });
        }

        // Apply sorting
        if (sortBy === 'price-low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'reviews') {
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
        }

        setProducts(filteredProducts);
        setDisplayCount(20); // Reset to show first 20 when filters change
    }, [category, subcategory, priceRange, sortBy, inStockOnly, selectedBrands]);

    const toggleBrand = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const categoryName = category.replace(/-/g, ' ').replace(/and/g, '&');
    const subcategoryName = subcategory ? subcategory.replace(/-/g, ' ').replace(/and/g, '&') : '';

    const normalizeCtx = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const matchedBrandGroups = subcategoryName ? Object.entries(subCategoryBrands).find(
        ([key]) => normalizeCtx(key) === normalizeCtx(subcategoryName)
    )?.[1] : undefined;

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                        <ChevronLeft className="h-5 w-5" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold capitalize mb-2">
                        {subcategoryName || categoryName}
                    </h1>
                    <p className="text-blue-100">
                        {products.length} products found {subcategoryName && `in ${categoryName}`}
                    </p>
                </div>
            </div>

            {/* Filters & Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-4">
                            <div className="flex items-center gap-2 mb-4">
                                <Filter className="h-5 w-5 text-blue-600" />
                                <h2 className="font-semibold text-gray-900">Filters</h2>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'All Prices', value: 'all' },
                                        { label: 'Under $50', value: '0-50' },
                                        { label: '$50 - $100', value: '50-100' },
                                        { label: '$100 - $200', value: '100-200' },
                                        { label: '$200+', value: '200-10000' },
                                    ].map((range) => (
                                        <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${priceRange === range.value ? 'border-blue-600 bg-blue-600' : 'border-gray-300 group-hover:border-blue-400'}`}>
                                                {priceRange === range.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="price"
                                                value={range.value}
                                                checked={priceRange === range.value}
                                                onChange={(e) => setPriceRange(e.target.value)}
                                                className="hidden"
                                            />
                                            <span className={`text-sm ${priceRange === range.value ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                                                {range.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Brand Filter */}
                            {matchedBrandGroups && matchedBrandGroups.length > 0 && (
                                <div className="mb-6 border-t border-gray-100 pt-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-4">Brands</h3>

                                    <div className="space-y-6">
                                        {matchedBrandGroups.map((group) => (
                                            <div key={group.name}>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{group.name}</p>
                                                <div className="space-y-2">
                                                    {(group.brands || []).map((brand) => (
                                                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-400'}`}>
                                                                {selectedBrands.includes(brand) && <Check className="h-3 w-3 text-white" />}
                                                            </div>
                                                            <input
                                                                type="checkbox"
                                                                className="hidden"
                                                                checked={selectedBrands.includes(brand)}
                                                                onChange={() => toggleBrand(brand)}
                                                            />
                                                            <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{brand}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Availability */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${inStockOnly ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                                        {inStockOnly && <Check className="h-3 w-3 text-white" />}
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={inStockOnly}
                                        onChange={(e) => setInStockOnly(e.target.checked)}
                                        className="hidden"
                                    />
                                    <span className="text-sm text-gray-600">In Stock Prioritized</span>
                                </label>
                            </div>

                            {/* Sort By */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Sort By</h3>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="reviews">Most Reviewed</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="flex-1">
                        {products.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.slice(0, displayCount).map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                                        >
                                            {/* Product Image */}
                                            <Link href={`/product/${product.id}`} className="relative aspect-square bg-gray-100 overflow-hidden block">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                                {product.originalPrice && (
                                                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                        SALE
                                                    </div>
                                                )}
                                                {!product.inStock && (
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold">
                                                            Out of Stock
                                                        </span>
                                                    </div>
                                                )}
                                            </Link>

                                            {/* Product Info */}
                                            <div className="p-4 flex-1 flex flex-col">
                                                <Link href={`/product/${product.id}`} className="block">
                                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                        {product.name}
                                                    </h3>
                                                </Link>

                                                <p className="text-xs text-gray-500 mb-2">{product.subcategory}</p>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className="text-2xl font-bold text-gray-900">
                                                        ${product.price}
                                                    </span>
                                                    {product.originalPrice && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            ${product.originalPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Features */}
                                                <div className="mb-4 flex-1">
                                                    <ul className="space-y-1">
                                                        {(product.features || []).slice(0, 3).map((feature, idx) => (
                                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                                                <span className="text-blue-600 mt-0.5">•</span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Add to Cart Button */}
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    disabled={!product.inStock}
                                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                                >
                                                    <ShoppingCart className="h-4 w-4" />
                                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Load More Button */}
                                {displayCount < products.length && (
                                    <div className="mt-12 text-center">
                                        <button
                                            onClick={() => setDisplayCount(prev => Math.min(prev + 20, products.length))}
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            Load More Products
                                            <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                                                +20
                                            </span>
                                        </button>
                                        <p className="mt-3 text-sm text-gray-500">
                                            Showing {displayCount} of {products.length} products
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
