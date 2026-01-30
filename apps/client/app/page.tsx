"use client";


import { ProductCard } from '@/components/product-card';
import { TrendingUp, Zap, Shield, Star, Users, Gift, Truck, Award } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { products } from '@/lib/products-data';

export default function Home() {
  // Get featured products (mix from different categories)
  const featuredProducts = products
    .sort(() => 0.5 - Math.random()) // Randomize
    .slice(0, 8);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section with Typing Effect */}
      <section className="relative overflow-hidden">
        {/* Animated RGB Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <TypeAnimation
                sequence={[
                  'Discover Amazing Products',
                  2000,
                  'Shop Latest Tech Gadgets',
                  2000,
                  'Unbeatable Prices',
                  2000,
                  'Premium Quality',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="block mt-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Your One-Stop Shopping Destination
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Free shipping on orders over $50 • 30-day returns • 24/7 support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                View Categories
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-20">
            <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
                <p className="text-sm text-gray-600">Free delivery on $50+</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% protected</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-full group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Best Deals</h3>
                <p className="text-sm text-gray-600">Great prices daily</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full group-hover:scale-110 transition-transform">
                <Gift className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Rewards</h3>
                <p className="text-sm text-gray-600">Earn points</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Featured Products
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked collection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div className="space-y-2">
              <Users className="h-12 w-12 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <Star className="h-12 w-12 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="space-y-2">
              <Zap className="h-12 w-12 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div className="space-y-2">
              <Award className="h-12 w-12 mx-auto mb-3 opacity-90" />
              <div className="text-4xl font-bold">100%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and discover amazing deals today!
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl">
            Browse All Products
          </button>
        </div>
      </section>
    </main>
  );
}
