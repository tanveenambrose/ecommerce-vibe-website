'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import {
    Package,
    Edit,
    Trash2,
    Plus,
    Search,
    Filter,
    Download,
    Upload,
    ToggleLeft,
    ToggleRight
} from 'lucide-react';

export default function AdminProductsPage() {
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Management</h1>
                    <p className="text-gray-600 mt-1">Manage your product inventory</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md">
                    <Plus className="h-5 w-5" />
                    Add Product
                </button>
            </div>

            {/* Admin-Only Notice */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-purple-900">Admin Exclusive Access</h3>
                        <p className="text-sm text-purple-700 mt-1">
                            Only administrators can create, edit, or delete products. Regular customers cannot access this page.
                        </p>
                    </div>
                </div>
            </div>

            {/* Admin Controls */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Admin Controls</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors border border-green-200">
                        <Upload className="h-4 w-4" />
                        <span className="font-medium">Bulk Import</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
                        <Download className="h-4 w-4" />
                        <span className="font-medium">Export Data</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200">
                        <ToggleLeft className="h-4 w-4" />
                        <span className="font-medium">Bulk Enable</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors border border-red-200">
                        <Trash2 className="h-4 w-4" />
                        <span className="font-medium">Bulk Delete</span>
                    </button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, SKU, or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category Filter</label>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Garden</option>
                            <option value="sports">Sports & Outdoors</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">Product Inventory</h2>
                    <p className="text-sm text-gray-600 mt-1">Currently using static product data. Integrate with database for full CRUD operations.</p>
                </div>

                <div className="p-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-900">🚧 Feature In Development</h3>
                        <p className="text-sm text-yellow-700 mt-2">
                            Product management is currently read-only. To enable full CRUD operations:
                        </p>
                        <ul className="list-disc list-inside text-sm text-yellow-700 mt-2 space-y-1">
                            <li>Create a Products module with MongoDB schema</li>
                            <li>Add product CRUD endpoints to the backend</li>
                            <li>Implement image upload with Cloudinary</li>
                            <li>Add form validation and error handling</li>
                        </ul>
                        <p className="text-sm text-yellow-700 mt-3">
                            <strong>For now, products are managed via:</strong> <code className="bg-yellow-100 px-2 py-1 rounded">apps/client/lib/products-data.ts</code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Admin Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Products</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">1,247</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                            <Package className="h-6 w-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">In Stock</p>
                            <p className="text-2xl font-bold text-green-600 mt-1">1,089</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-full">
                            <ToggleRight className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Out of Stock</p>
                            <p className="text-2xl font-bold text-red-600 mt-1">158</p>
                        </div>
                        <div className="p-3 bg-red-100 rounded-full">
                            <ToggleLeft className="h-6 w-6 text-red-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
