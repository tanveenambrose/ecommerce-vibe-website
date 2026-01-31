'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Lock, CreditCard, Wallet, Truck, CheckCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import axios from '@/lib/axios';

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const { token, isAuthenticated } = useAuth();
    const router = useRouter();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'United States',
        phone: '',
    });

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/checkout');
        }
    }, [isAuthenticated, router]);

    const subtotal = totalPrice;
    const tax = subtotal * 0.08;
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + tax + shipping;

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // Prepare order data
            const orderData = {
                items: items.map(item => ({
                    productId: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    quantity: item.quantity,
                    image: item.product.image,
                })),
                subtotal,
                tax,
                shipping,
                total,
                shippingAddress: {
                    fullName: `${formData.firstName} ${formData.lastName}`,
                    address: formData.address,
                    city: formData.city,
                    postalCode: formData.postalCode,
                    country: formData.country,
                    phone: formData.phone,
                },
                paymentMethod,
            };

            // Send order to backend
            const response = await axios.post('/orders', orderData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setOrderNumber(response.data.orderNumber);
            setIsSuccess(true);
            clearCart();
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Failed to create order:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
                    <p className="text-gray-500 mb-8">
                        Thank you for your purchase. We have sent a confirmation email with your order details.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
                        <p className="text-sm text-gray-500 mb-1">Order Number</p>
                        <p className="font-mono font-bold text-gray-900">{orderNumber}</p>
                    </div>
                    <Link
                        href="/orders"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors mb-4"
                    >
                        View My Orders
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/" className="text-blue-600 font-bold hover:underline">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/cart" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Cart
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Checkout Form */}
                    <div className="flex-1">
                        <form onSubmit={handlePlaceOrder} className="space-y-8">
                            {/* Shipping Information */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    Shipping Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-gray-700">Street Address</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">City</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Zip Code</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.postalCode}
                                            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <CreditCard className="h-5 w-5 text-blue-600" />
                                    Payment Method
                                </h2>
                                <div className="space-y-4">
                                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <div className="flex-1 flex items-center justify-between">
                                            <span className="font-medium text-gray-900">Credit / Debit Card</span>
                                            <div className="flex gap-2">
                                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>
                                    </label>

                                    {paymentMethod === 'card' && (
                                        <div className="pl-8 grid grid-cols-2 gap-4 animate-fadeIn">
                                            <div className="col-span-2">
                                                <input placeholder="Card Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                            </div>
                                            <input placeholder="MM / YY" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                            <input placeholder="CVC" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                        </div>
                                    )}

                                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="paypal"
                                            checked={paymentMethod === 'paypal'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span className="font-medium text-gray-900">PayPal</span>
                                    </label>

                                    <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span className="font-medium text-gray-900">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Lock className="h-5 w-5" />
                                        Place Order (${total.toFixed(2)})
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full lg:w-96 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-4 scrollbar-thin">
                                {items.map((item) => (
                                    <div key={item.product.id} className="flex gap-3">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.product.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.name}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                            <p className="text-sm font-bold text-gray-900">${(item.product.price * item.quantity).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
