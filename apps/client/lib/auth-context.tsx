"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    setUser: (user: User | null) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for existing user session
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('access_token');

        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            } catch (error) {
                console.error('Failed to parse user data', error);
                localStorage.removeItem('user');
                localStorage.removeItem('access_token');
            }
        }
        setIsLoading(false);
    }, []);

    const login = (newToken: string, newUser: User) => {
        localStorage.setItem('access_token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        setUser(null);
        setToken(null);
        window.location.href = '/';
    };

    if (isLoading) {
        return null; // Or a loading spinner
    }

    return (
        <AuthContext.Provider value={{ user, token, login, setUser, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
