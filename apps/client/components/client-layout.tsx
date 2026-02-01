'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import EnhancedNav from './home/enhanced-nav';
import Footer from './footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');
    const isHomePage = pathname === '/';

    return (
        <>
            {!isAdminPage && <EnhancedNav />}
            {children}
            {!isAdminPage && !isHomePage && <Footer />}
        </>
    );
}
