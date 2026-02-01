'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import { DollarSign, ShoppingBag, Users, TrendingUp, Package, ArrowUp, ArrowDown } from 'lucide-react';

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
                api.get('/admin/recent-orders?limit=8'),
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
                                    </tr >
                                ))
                            )
    }
                        </tbody >
                    </table >
                </div >
            </div >
        </div >
    );
}
