"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Package, ArrowLeft, MapPin, CreditCard, Clock, Truck, CheckCircle, XCircle } from 'lucide-react';
import axios from '@/lib/axios';

interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

interface ShippingAddress {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone?: string;
}

interface Order {
    _id: string;
    orderNumber: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    trackingNumber?: string;
    createdAt: string;
    estimatedDelivery?: string;
    deliveredAt?: string;
}

const statusSteps = [
    { key: 'pending', label: 'Order Placed', icon: Clock },
    { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
    { key: 'processing', label: 'Processing', icon: Package },
    { key: 'shipped', label: 'Shipped', icon: Truck },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle },
];

export default function OrderDetailsPage() {
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, token } = useAuth();
    const router = useRouter();
    const params = useParams();
    const orderId = params?.id as string;

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        if (orderId) {
            fetchOrder();
        }
    }, [isAuthenticated, orderId]);

    const fetchOrder = async () => {
        try {
            const response = await axios.get(`/orders/${orderId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setOrder(response.data);
        } catch (error) {
            console.error('Failed to fetch order:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Package className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading order details...</p>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h2>
                    <p className="text-gray-600 mb-6">This order doesn't exist or you don't have access to it</p>
                    <Link href="/orders" className="text-blue-600 hover:text-blue-700 font-medium">
                        ← Back to Orders
                    </Link>
                </div>
            </div>
        );
    }

    const currentStepIndex = statusSteps.findIndex(step => step.key === order.status);

    return (
        <div className="min-h-screen bg-gray-50 py-12 pt-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/orders"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Orders
                </Link>

                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                Order #{order.orderNumber}
                            </h1>
                            <p className="text-gray-600">
                                Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                                {order.trackingNumber && (
                                    <p className="text-sm text-gray-600 mt-1">
                                        Tracking: <span className="font-mono font-semibold">{order.trackingNumber}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Tracker */}
                {order.status !== 'cancelled' && (
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Status</h2>
                        <div className="relative">
                            <div className="flex justify-between items-center">
                                {statusSteps.map((step, index) => {
                                    const StepIcon = step.icon;
                                    const isCompleted = index <= currentStepIndex;
                                    const isCurrent = index === currentStepIndex;

                                    return (
                                        <div key={step.key} className="flex flex-col items-center flex-1">
                                            <div className="relative z-10">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCompleted
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-200 text-gray-400'
                                                    } ${isCurrent ? 'ring-4 ring-blue-200' : ''}`}>
                                                    <StepIcon className="h-6 w-6" />
                                                </div>
                                            </div>
                                            <p className={`mt-2 text-xs font-medium text-center ${isCompleted ? 'text-gray-900' : 'text-gray-500'
                                                }`}>
                                                {step.label}
                                            </p>
                                            {index < statusSteps.length - 1 && (
                                                <div className={`absolute top-6 left-1/2 w-full h-0.5 -z-10 ${index < currentStepIndex ? 'bg-blue-600' : 'bg-gray-200'
                                                    }`} style={{ width: `calc(100% / ${statusSteps.length - 1})`, marginLeft: `${50 / (statusSteps.length - 1)}%` }} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Connection Lines */}
                            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-20" />
                            <div
                                className="absolute top-6 left-0 h-0.5 bg-blue-600 -z-10 transition-all duration-500"
                                style={{ width: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%` }}
                            />
                        </div>
                        {order.estimatedDelivery && order.status !== 'delivered' && (
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-900">
                                    <strong>Estimated Delivery:</strong> {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order Items */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
                            <div className="space-y-4">
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded border border-gray-200"
                                            />
                                        ) : (
                                            <div className="w-20 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                                                <Package className="h-8 w-8 text-gray-400" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                                            <p className="text-sm font-medium text-gray-900 mt-1">${item.price.toFixed(2)} each</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="mt-6 pt-6 border-t space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${order.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>${order.tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>${order.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                                    <span>Total</span>
                                    <span>${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Shipping Address */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="h-5 w-5 text-blue-600" />
                                <h2 className="text-lg font-semibold text-gray-900">Shipping Address</h2>
                            </div>
                            <div className="text-gray-600 space-y-1">
                                <p className="font-semibold text-gray-900">{order.shippingAddress.fullName}</p>
                                <p>{order.shippingAddress.address}</p>
                                <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                                <p>{order.shippingAddress.country}</p>
                                {order.shippingAddress.phone && (
                                    <p className="mt-2">Phone: {order.shippingAddress.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <CreditCard className="h-5 w-5 text-blue-600" />
                                <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
                            </div>
                            <p className="text-gray-600 capitalize">{order.paymentMethod}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
