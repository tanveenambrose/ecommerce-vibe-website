'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import Footer from './footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');
    const isHomePage = pathname === '/';

    return (
        <>
            {!isAdminPage && !isHomePage && <Navbar />}
            {children}
            {!isAdminPage && !isHomePage && <Footer />}
        </>
    );
}
