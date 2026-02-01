'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import {
    Package,
    Edit,
    Trash2,
    Plus,
    Search,
    Filter,
    Download,
    Upload,
    MoreVertical,
    CheckCircle,
    XCircle,
    AlertCircle
} from 'lucide-react';

interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    inStock: boolean;
    image?: string;
    description: string;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [categoryFilter]); // Refetch when filter changes

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (categoryFilter) params.category = categoryFilter;

            const response = await api.get('/admin/products', { params });
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                await api.delete(`/admin/products/${id}`);
                setProducts(products.filter(p => p._id !== id));
            } catch (error) {
                alert('Failed to delete product');
            }
        }
    };

    const toggleStock = async (product: Product) => {
        try {
            const updatedStatus = !product.inStock;
            await api.patch(`/admin/products/${product._id}/stock`, { inStock: updatedStatus });
            setProducts(products.map(p => p._id === product._id ? { ...p, inStock: updatedStatus } : p));
        } catch (error) {
            alert('Failed to update stock status');
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Management</h1>
                    <p className="text-gray-600 mt-1">Manage your product inventory</p>
                </div>
                <button
                    onClick={() => alert('Create Product Modal - Coming Next Step!')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Plus className="h-5 w-5" />
                    Add Product
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-full md:w-48">
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Garden</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Product Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Category</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Stock Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        Loading products...
                                    </td>
                                </tr>
                            ) : filteredProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        <Package className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                                        <p>No products found {searchTerm && `matching "${searchTerm}"`}</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredProducts.map((product) => (
                                    <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{product.name}</div>
                                            {product.stock <= 5 && product.inStock && (
                                                <span className="text-xs text-orange-600 font-medium">Low stock: {product.stock}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 capitalize">{product.category}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleStock(product)}
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${product.inStock
                                                    ? 'bg-green-50 text-green-700 border-green-200'
                                                    : 'bg-red-50 text-red-700 border-red-200'
                                                    }`}
                                            >
                                                {product.inStock ? (
                                                    <>
                                                        <CheckCircle className="h-3 w-3" /> In Stock
                                                    </>
                                                ) : (
                                                    <>
                                                        <XCircle className="h-3 w-3" /> Out of Stock
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                align="right"
                                                onClick={() => handleDelete(product._id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
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
