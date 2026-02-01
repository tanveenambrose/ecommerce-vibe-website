'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import ProductModal from '@/components/admin/product-modal';
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
    AlertCircle,
    ToggleLeft,
    ToggleRight
} from 'lucide-react';

interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    inStock: boolean;
    featured: boolean;
    image?: string;
    images?: string[];
    description: string;
    brand: string;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

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

    // Calculate Stats
    const totalProducts = products.length;
    const inStockCount = products.filter(p => p.inStock).length;
    const outOfStockCount = totalProducts - inStockCount;

    const handleCreate = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        fetchProducts(); // Refresh list after save
    };

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
            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                product={editingProduct}
            />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Management</h1>
                    <p className="text-gray-600 mt-1">Manage your product inventory</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                >
                    <Plus className="h-5 w-5" />
                    Add Product
                </button>
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
                    <p className="text-sm text-gray-600 mt-1">Manage all products in your catalog.</p>
                </div>

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
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
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

            {/* Products Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Products</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{totalProducts}</p>
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
                            <p className="text-2xl font-bold text-green-600 mt-1">{inStockCount}</p>
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
                            <p className="text-2xl font-bold text-red-600 mt-1">{outOfStockCount}</p>
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
