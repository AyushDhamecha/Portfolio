import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import { Geist, Geist_Mono, Oxanium } from 'next/font/google';
import LenisProvider from '@/components/utils/LenisProvider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header/Header';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const oxanium = Oxanium({
    subsets: ['latin'],
    variable: '--font-oxanium',
});

export const metadata = {
    title: 'Ayush Dhamecha',
    description: 'Ayush Dhamecha - Portfolio',
};

// Define Props Type
interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={` ${oxanium.variable} ${geistSans.variable} ${geistMono.variable} font-oxanium  bg-background  antialiased`}
            >
                <LenisProvider />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
