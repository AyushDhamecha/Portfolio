'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface NavLink {
    link: string;
    name: string;
}

export default function NavMenu() {
    const links: NavLink[] = [
        { link: '#home', name: 'Home' },
        { link: '#about', name: 'About' },
        { link: '#skills', name: 'Skills' },
        { link: '#projects', name: 'Projects' },
        { link: '#contact', name: 'Contact' },
    ];

    // Function to handle smooth scrolling
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.querySelector(href); // Find the section by ID
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };

    return (
        <div className="flex items-center max-tablet-lg:flex-col">
            {links.map(link => (
                <Link href={link.link} key={link.name} onClick={e => handleScroll(e, link.link)}>
                    <Button variant="ghost" className="max-tablet-lg:text-start">
                        {link.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
