"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Package, Clock, Truck, CheckCircle, XCircle, ChevronRight, Calendar } from 'lucide-react';
import axios from '@/lib/axios';

interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

interface Order {
    _id: string;
    orderNumber: string;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    estimatedDelivery?: string;
}

const statusConfig = {
    pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    confirmed: { label: 'Confirmed', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
    processing: { label: 'Processing', color: 'bg-purple-100 text-purple-800', icon: Package },
    shipped: { label: 'Shipped', color: 'bg-indigo-100 text-indigo-800', icon: Truck },
    delivered: { label: 'Delivered', color: 'bg-green-100 text-green-800', icon: CheckCircle },
    cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800', icon: XCircle },
};

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');
    const { isAuthenticated, token } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        fetchOrders();
    }, [isAuthenticated]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('/orders', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setOrders(response.data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(order => order.status === filter);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Package className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading your orders...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 pt-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
                    <p className="text-gray-600">Track and manage your purchases</p>
                </div>

                {/* Filter Tabs */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {['all', 'pending', 'processing', 'shipped', 'delivered'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-full font-medium transition-colors ${filter === status
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Orders List */}
                {filteredOrders.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
                        <p className="text-gray-600 mb-6">
                            {filter === 'all'
                                ? "You haven't placed any orders yet"
                                : `No ${filter} orders`}
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredOrders.map((order) => {
                            const StatusIcon = statusConfig[order.status].icon;
                            return (
                                <Link
                                    key={order._id}
                                    href={`/orders/${order._id}`}
                                    className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        Order #{order.orderNumber}
                                                    </h3>
                                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}>
                                                        <StatusIcon className="h-3 w-3" />
                                                        {statusConfig[order.status].label}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        {new Date(order.createdAt).toLocaleDateString()}
                                                    </span>
                                                    {order.estimatedDelivery && order.status !== 'delivered' && (
                                                        <span className="flex items-center gap-1">
                                                            <Truck className="h-4 w-4" />
                                                            Est. {new Date(order.estimatedDelivery).toLocaleDateString()}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mt-4 md:mt-0 text-right">
                                                <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                                                <p className="text-sm text-gray-600">{order.items.length} item(s)</p>
                                            </div>
                                        </div>

                                        {/* Order Items Preview */}
                                        <div className="flex items-center gap-3 overflow-x-auto pb-2">
                                            {order.items.slice(0, 4).map((item, idx) => (
                                                <div key={idx} className="flex-shrink-0">
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-16 h-16 object-cover rounded border border-gray-200"
                                                        />
                                                    ) : (
                                                        <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                                                            <Package className="h-6 w-6 text-gray-400" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            {order.items.length > 4 && (
                                                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-sm text-gray-600 font-medium">
                                                    +{order.items.length - 4}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4 flex items-center justify-end text-blue-600 font-medium group">
                                            View Details
                                            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
