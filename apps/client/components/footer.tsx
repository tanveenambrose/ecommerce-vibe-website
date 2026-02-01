import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">About ShopHub</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Your trusted e-commerce platform for quality products at great prices. Shop with confidence.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-700 hover:bg-pink-600 rounded-full transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="/category/electronics" className="text-gray-400 hover:text-white transition-colors">Electronics</Link></li>
                            <li><Link href="/category/fashion" className="text-gray-400 hover:text-white transition-colors">Fashion</Link></li>
                            <li><Link href="/category/home-garden" className="text-gray-400 hover:text-white transition-colors">Home & Garden</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Newsletter</h3>
                        <p className="text-sm text-gray-400">Subscribe for exclusive deals and updates!</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-sm whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2026 ShopHub. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
