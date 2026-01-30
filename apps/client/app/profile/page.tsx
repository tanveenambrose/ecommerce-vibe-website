"use client";

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User, Mail, Shield, Edit2, Save, X, Lock, Eye, EyeOff } from 'lucide-react';
import api from '@/lib/axios';

export default function ProfilePage() {
    const { user, isAuthenticated, setUser } = useAuth();
    const router = useRouter();

    // Edit states
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    // Form states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // UI states
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        } else if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }
    }, [isAuthenticated, router, user]);

    if (!user) {
        return null;
    }

    const handleUpdateName = async () => {
        if (!firstName.trim() || !lastName.trim()) {
            setError('First name and last name are required');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await api.put('/auth/profile', {
                userId: user.id,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
            });

            // Update auth context with new user data
            setUser(response.data.user);

            // Update localStorage
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            const updatedUser = { ...storedUser, ...response.data.user };
            localStorage.setItem('user', JSON.stringify(updatedUser));

            setSuccess('Name updated successfully!');
            setIsEditingName(false);
            setTimeout(() => setSuccess(''), 3000);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to update name');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async () => {
        setError('');
        setSuccess('');

        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All password fields are required');
            return;
        }

        if (newPassword.length < 8) {
            setError('New password must be at least 8 characters');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        setLoading(true);

        try {
            await api.post('/auth/change-password', {
                userId: user.id,
                currentPassword,
                newPassword,
            });

            setSuccess('Password changed successfully!');
            setIsEditingPassword(false);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to change password');
        } finally {
            setLoading(false);
        }
    };

    const cancelNameEdit = () => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setIsEditingName(false);
        setError('');
    };

    const cancelPasswordEdit = () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setIsEditingPassword(false);
        setError('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-3xl font-bold mb-4">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                        {success}
                    </div>
                )}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                        {error}
                    </div>
                )}

                {/* Profile Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information - EDITABLE */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <User className="h-6 w-6 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                            </div>
                            {!isEditingName && !isEditingPassword && (
                                <button
                                    onClick={() => setIsEditingName(true)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <Edit2 className="h-5 w-5 text-gray-600" />
                                </button>
                            )}
                        </div>

                        {isEditingName ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleUpdateName}
                                        disabled={loading}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                                    >
                                        <Save className="h-4 w-4" />
                                        {loading ? 'Saving...' : 'Save'}
                                    </button>
                                    <button
                                        onClick={cancelNameEdit}
                                        disabled={loading}
                                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">First Name</label>
                                    <p className="text-lg text-gray-900 font-semibold">{user.firstName}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Last Name</label>
                                    <p className="text-lg text-gray-900 font-semibold">{user.lastName}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Account Details */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Mail className="h-6 w-6 text-purple-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Account Details</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Email Address</label>
                                <p className="text-lg text-gray-900 font-semibold break-all">{user.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">User ID</label>
                                <p className="text-sm text-gray-600 font-mono">{user.id}</p>
                            </div>
                        </div>
                    </div>

                    {/* Password Change - EDITABLE */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <Lock className="h-6 w-6 text-red-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                            </div>
                            {!isEditingPassword && !isEditingName && (
                                <button
                                    onClick={() => setIsEditingPassword(true)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    Change Password
                                </button>
                            )}
                        </div>

                        {isEditingPassword ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Current Password</label>
                                    <div className="relative">
                                        <input
                                            type={showCurrentPassword ? "text" : "password"}
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">Min. 8 characters</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-3 flex gap-2">
                                    <button
                                        onClick={handleChangePassword}
                                        disabled={loading}
                                        className="flex items-center justify-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
                                    >
                                        <Save className="h-4 w-4" />
                                        {loading ? 'Updating...' : 'Update Password'}
                                    </button>
                                    <button
                                        onClick={cancelPasswordEdit}
                                        disabled={loading}
                                        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600">Click "Change Password" to update your account password. You'll need to provide your current password for security.</p>
                        )}
                    </div>

                    {/* Account Status */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Account Status</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Role</label>
                                <p className="text-lg text-gray-900 font-semibold capitalize">{user.role}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Status</label>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    ✓ Active
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Info */}
                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-semibold text-blue-900 mb-1">Secure Account</h3>
                            <p className="text-sm text-blue-700">
                                Your account is protected with industry-standard security practices. All sensitive data is encrypted and your password is securely hashed. We recommend using a strong, unique password and changing it periodically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
