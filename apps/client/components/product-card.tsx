'use client';

import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/lib/products-data';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

export function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation if card is a link
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    return (
        <Link href={`/product/${product.id}`} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 block">
            {/* Image Container */}
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Wishlist Button */}
                <button
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-10"
                    onClick={(e) => {
                        e.preventDefault();
                        // Wishlist logic here
                    }}
                >
                    <Heart className="h-5 w-5 text-gray-700 hover:text-red-500 hover:fill-red-500 transition-colors" />
                </button>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            SALE
                        </div>
                    )}
                    {!product.inStock && (
                        <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            OUT OF STOCK
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.subcategory}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors h-14">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-gray-500">Free shipping</span>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">
                        <span className="text-sm font-medium">{product.rating}</span>
                        <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-xl z-20 relative
                        ${isAdded
                            ? 'bg-green-600 text-white scale-95'
                            : product.inStock
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-[1.02]'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    <ShoppingCart className="h-5 w-5" />
                    {isAdded ? 'Added!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </Link>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    );
}
