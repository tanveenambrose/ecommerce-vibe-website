'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductById, getProductsByCategory, Product } from '@/lib/products-data';
import { useCart } from '@/lib/cart-context';
import { Star, ShoppingCart, Truck, Shield, RotateCcw, Minus, Plus, ChevronLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const id = params.id as string;

    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        if (id) {
            const foundProduct = getProductById(id);
            if (foundProduct) {
                setProduct(foundProduct);
                setSelectedImage(foundProduct.image);

                // Get related products (same category, excluding current product)
                const categoryProducts = getProductsByCategory(foundProduct.category);
                const related = categoryProducts
                    .filter(p => p.id !== foundProduct.id)
                    .sort(() => 0.5 - Math.random()) // Shuffle
                    .slice(0, 4);
                setRelatedProducts(related);
            }
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Optional: Add toast notification here
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Back to products
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Column 1: Image Gallery (5 cols) */}
                    <div className="lg:col-span-6 xl:col-span-5">
                        <div className="bg-white rounded-2xl p-4 border border-gray-100 sticky top-24">
                            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 relative group">
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {product.originalPrice && (
                                    <span className="absolute top-4 left-4 text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full shadow-sm">
                                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {[0, 1, 2, 3].map((idx) => {
                                    const imgUrl = idx === 0 ? product.image : `${product.image}&sig=${idx}`;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(imgUrl)}
                                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === imgUrl ? 'border-blue-600 ring-2 ring-blue-50' : 'border-transparent hover:border-gray-200'}`}
                                        >
                                            <img src={imgUrl} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Product Details (4 cols) */}
                    <div className="lg:col-span-6 xl:col-span-4 flex flex-col lg:px-4">
                        <div className="mb-2">
                            <Link href={`/category/${product.category.toLowerCase()}`} className="text-sm font-semibold text-blue-600 hover:underline mb-2 inline-block uppercase tracking-wide">
                                {product.category}
                            </Link>
                            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 text-sm mb-6">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-bold text-gray-900">{product.rating}</span>
                                </div>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500 underline decoration-dotted hover:text-blue-600 cursor-pointer">
                                    {product.reviews} verified reviews
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-b border-gray-100 py-6 mb-6">
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {product.description}
                            </p>

                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-yellow-500" />
                                Highlights
                            </h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Buy Box (3 cols) */}
                    <div className="lg:col-span-12 xl:col-span-3">
                        <div className="bg-white rounded-2xl border-2 border-blue-50 p-6 shadow-sm sticky top-24">
                            <div className="mb-6">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        ${product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-400 line-through">
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                                    <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-12 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
                                            disabled={!product.inStock}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <div className="flex-1 text-center font-bold text-gray-900">
                                            {quantity}
                                        </div>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-12 h-12 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
                                            disabled={!product.inStock}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                                    <span>Total:</span>
                                    <span className="text-lg font-bold text-blue-600">
                                        ${(product.price * quantity).toFixed(2)}
                                    </span>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                    className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold transition-all bg-blue-50 text-blue-700 hover:bg-blue-100"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() => {
                                        addToCart(product, quantity);
                                        router.push('/checkout');
                                    }}
                                    disabled={!product.inStock}
                                    className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                >
                                    Buy Now
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-y-4 gap-x-2">
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Truck className="h-4 w-4 text-blue-600" />
                                    <span>Fast Delivery</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Shield className="h-4 w-4 text-purple-600" />
                                    <span>Secure Pay</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <RotateCcw className="h-4 w-4 text-green-600" />
                                    <span>Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/product/${related.id}`}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                                >
                                    <div className="aspect-square bg-gray-100 overflow-hidden">
                                        <img
                                            src={related.image}
                                            alt={related.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                            {related.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-2">{related.subcategory}</p>
                                        <span className="font-bold text-gray-900">${related.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
