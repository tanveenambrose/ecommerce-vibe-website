"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';
import { useAuth } from '@/lib/auth-context';
import { Mail, Lock, User, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const { login, setUser } = useAuth();
    const [step, setStep] = useState<'form' | 'otp'>('form'); // Two steps: form and OTP
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOTPChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOTP = [...otp];
            newOTP[index] = value;
            setOtp(newOTP);

            // Auto-focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleOTPKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await api.post('/auth/register/initiate', formData);
            setStep('otp');
            setLoading(false);
        } catch (err: any) {
            console.error('Registration initiation failed', err);
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
            setLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setError('Please enter the complete 6-digit OTP');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await api.post('/auth/register/verify', {
                email: formData.email,
                otp: otpCode,
            });

            // Register successful
            console.log('Registration successful', response.data);

            // Log in user automatically if token is present
            if (response.data.access_token && response.data.user) {
                // Use login method to update context and localStorage
                login(response.data.access_token, response.data.user);
            } else {
                // Fallback for just updating user if no token returned (unlikely for verified registration)
                setUser(response.data.user);
            }

            // Redirect to home page
            router.push('/');
        } catch (err: any) {
            console.error('OTP verification failed', err);
            setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Decorative */}
            <div className="hidden lg:block lg:flex-1 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center p-12">
                    <div className="text-white max-w-lg">
                        <h3 className="text-4xl font-bold mb-6">Join ShopHub Today</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-300" />
                                <p className="text-lg text-blue-100">Exclusive member discounts</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-300" />
                                <p className="text-lg text-blue-100">Free shipping on all orders</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-300" />
                                <p className="text-lg text-blue-100">Early access to new products</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-300" />
                                <p className="text-lg text-blue-100">24/7 customer support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form/OTP */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
                            <ArrowRight className="h-5 w-5 rotate-180" />
                            Back to Shop
                        </Link>
                        {step === 'form' ? (
                            <>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">Create account</h2>
                                <p className="text-gray-600">Start your shopping journey today</p>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-center mb-4">
                                    <ShieldCheck className="h-16 w-16 text-blue-600" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">Verify Your Email</h2>
                                <p className="text-gray-600 text-center">We've sent a 6-digit code to<br /><strong>{formData.email}</strong></p>
                            </>
                        )}
                    </div>

                    {step === 'form' ? (
                        <form className="mt-8 space-y-5" onSubmit={handleSubmitForm}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 block mb-2">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                                            placeholder="John"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 block mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                                        placeholder="Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                                        placeholder="you@example.com"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                {loading ? 'Sending OTP...' : 'Continue'}
                                {!loading && <ArrowRight className="h-5 w-5" />}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700">
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    ) : (
                        <div className="mt-8 space-y-6">
                            <div className="flex justify-center gap-3">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOTPChange(index, e.target.value)}
                                        onKeyDown={(e) => handleOTPKeyDown(index, e)}
                                        className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                ))}
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleVerifyOTP}
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                {loading ? 'Verifying...' : 'Verify & Create Account'}
                                {!loading && <CheckCircle className="h-5 w-5" />}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                Didn't receive the code?{' '}
                                <button
                                    onClick={() => handleSubmitForm(new Event('submit') as any)}
                                    className="font-medium text-blue-600 hover:text-blue-700"
                                >
                                    Resend OTP
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
