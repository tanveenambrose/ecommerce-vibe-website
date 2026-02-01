'use client';

import { useAuth } from '@/lib/auth-context';

export default function AdminDebugPage() {
    const { user, isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Access Debug</h1>

                <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Authentication Status</h2>
                        <p className="text-gray-700">
                            <span className="font-medium">Is Authenticated:</span> {isAuthenticated ? 'Yes' : 'No'}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">User Object</h2>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto">
                            {JSON.stringify(user, null, 2)}
                        </pre>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Role Check</h2>
                        <p className="text-gray-700">
                            <span className="font-medium">Role value:</span> "{user?.role || 'undefined'}"
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Is Admin? (role === 'admin'):</span> {user?.role === 'admin' ? 'Yes' : 'No'}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Is Admin? (role === 'ADMIN'):</span> {user?.role === 'ADMIN' ? 'Yes' : 'No'}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Is Customer? (role === 'customer'):</span> {user?.role === 'customer' ? 'Yes' : 'No'}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Is Customer? (role === 'CUSTOMER'):</span> {user?.role === 'CUSTOMER' ? 'Yes' : 'No'}
                        </p>
                    </div>

                    <div className="pt-4 border-t">
                        <h2 className="text-lg font-semibold mb-2">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li>Go to MongoDB Atlas</li>
                            <li>Find your user in the database</li>
                            <li>Check the current value of the "role" field</li>
                            <li>Change it to exactly: <code className="bg-gray-200 px-2 py-1 rounded">admin</code> (lowercase)</li>
                            <li>Save the change</li>
                            <li>Logout and login again to refresh your session</li>
                            <li>Then visit <code className="bg-gray-200 px-2 py-1 rounded">/admin</code></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
