'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '@/lib/products-data';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

interface CartItemProps {
    item: {
        product: Product;
        quantity: number;
    };
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();
    const { product, quantity } = item;

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            {/* Image */}
            <Link href={`/product/${product.id}`} className="w-full sm:w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </Link>

            {/* Product Details */}
            <div className="flex-1 w-full text-center sm:text-left">
                <Link href={`/product/${product.id}`} className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                    {product.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <p className="font-bold text-gray-900 mt-2">${product.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                >
                    <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold w-8 text-center">{quantity}</span>
                <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                >
                    <Plus className="h-4 w-4" />
                </button>
            </div>

            {/* Remove Button */}
            <button
                onClick={() => removeFromCart(product.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-500 transition-colors sm:ml-4"
                title="Remove from cart"
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    );
}
