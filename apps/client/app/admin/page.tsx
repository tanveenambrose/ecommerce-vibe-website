'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import { DollarSign, ShoppingBag, Users, TrendingUp, Package } from 'lucide-react';

interface Stats {
    totalUsers: number;
    totalOrders: number;
    totalRevenue: number;
    avgOrderValue: number;
}

interface Order {
    _id: string;
    userId: { firstName: string; lastName: string; email: string };
    totalAmount: number;
    status: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            const [statsRes, ordersRes] = await Promise.all([
                api.get('/admin/stats'),
                api.get('/admin/recent-orders?limit=5'),
            ]);
            setStats(statsRes.data);
            setRecentOrders(ordersRes.data);
        } catch (error) {
            console.error('Failed to load dashboard data', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const statCards = [
        {
            name: 'Total Revenue',
            value: `$${stats?.totalRevenue.toFixed(2) || '0.00'}`,
            icon: DollarSign,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            name: 'Total Orders',
            value: stats?.totalOrders || 0,
            icon: ShoppingBag,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            name: 'Total Users',
            value: stats?.totalUsers || 0,
            icon: Users,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100',
        },
        {
            name: 'Avg Order Value',
            value: `$${stats?.avgOrderValue.toFixed(2) || '0.00'}`,
            icon: TrendingUp,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
    ];

    return (
        <div className="space-y-6 sm:space-y-8">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Overview of your e-commerce platform</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.name}
                            className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-gray-100"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                                        {stat.value}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100">
                <div className="p-5 sm:p-6 border-b border-gray-200">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 hidden sm:table-header-group">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No orders yet
                                    </td>
                                </tr>
                            ) : (
                                recentOrders.map((order) => (
                                    <tr key={order._id} className="hover:bg-gray-50 flex flex-col sm:table-row border-b sm:border-0 p-4 sm:p-0">
                                        <td className="px-4 sm:px-6 py-2 sm:py-4">
                                            <span className="sm:hidden font-semibold text-gray-700">Order ID: </span>
                                            <span className="text-sm text-gray-900">#{order._id.substring(0, 8)}...</span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-2 sm:py-4">
                                            <span className="sm:hidden font-semibold text-gray-700">Customer: </span>
                                            <div className="text-sm">
                                                <p className="font-medium text-gray-900">
                                                    {order.userId.firstName} {order.userId.lastName}
                                                </p>
                                                <p className="text-gray-500">{order.userId.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-2 sm:py-4">
                                            <span className="sm:hidden font-semibold text-gray-700">Amount: </span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                ${order.totalAmount.toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-2 sm:py-4">
                                            <span className="sm:hidden font-semibold text-gray-700">Status: </span>
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.status === 'delivered'
                                                        ? 'bg-green-100 text-green-800'
                                                        : order.status === 'shipped'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : order.status === 'processing'
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-gray-100 text-gray-800'
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-2 sm:py-4">
                                            <span className="sm:hidden font-semibold text-gray-700">Date: </span>
                                            <span className="text-sm text-gray-500">
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
