import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            VibeShop
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Your trusted destination for quality products across electronics, fashion, home, beauty, and more.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-400 flex items-center justify-center transition-all hover:scale-110">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/category/electronics-and-gadgets" className="text-gray-300 hover:text-blue-400 transition-colors">Shop</Link></li>
                            <li><Link href="/deals" className="text-gray-300 hover:text-blue-400 transition-colors">Deals</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                            <li><Link href="/shipping" className="text-gray-300 hover:text-blue-400 transition-colors">Shipping Info</Link></li>
                            <li><Link href="/returns" className="text-gray-300 hover:text-blue-400 transition-colors">Returns Policy</Link></li>
                            <li><Link href="/track" className="text-gray-300 hover:text-blue-400 transition-colors">Track Order</Link></li>
                            <li><Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">123 Commerce Street, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                <a href="mailto:support@vibeshop.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    support@vibeshop.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="font-semibold text-lg mb-2">Subscribe to Our Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Get the latest updates on new products and exclusive deals!</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p className="flex items-center gap-1">
                            © {year} VibeShop. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Vibe Team
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
