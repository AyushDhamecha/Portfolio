import React from 'react';

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
