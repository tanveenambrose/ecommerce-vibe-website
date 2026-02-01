'use client';

import Link from 'next/link';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import CartItem from '@/components/cart-item';

export default function CartPage() {
    const { items, totalPrice, clearCart, totalItems } = useCart();

    const subtotal = totalPrice;
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
    const total = subtotal + tax + shipping;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="h-10 w-10 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
                    <p className="text-gray-500 mb-8">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                    Shopping Cart ({totalItems} items)
                </h1>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Cart Items List */}
                    <div className="flex-1 space-y-3 sm:space-y-4">
                        {items.map((item) => (
                            <CartItem key={item.product.id} item={item} />
                        ))}

                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <Link href="/" className="text-blue-600 font-medium hover:underline flex items-center gap-2 text-sm sm:text-base">
                                <ArrowLeft className="h-4 w-4" />
                                Continue Shopping
                            </Link>
                            <button
                                onClick={clearCart}
                                className="text-red-500 text-sm hover:text-red-700 font-medium"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96 flex-shrink-0">
                        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 lg:sticky lg:top-24">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax estimate</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shipping}`}</span>
                                </div>

                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-base sm:text-lg font-bold text-gray-900">Order Total</span>
                                    <span className="text-xl sm:text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                Proceed to Checkout
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>

                            <p className="mt-3 sm:mt-4 text-xs text-center text-gray-400">
                                Secure Checkout - SSL Encrypted
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
