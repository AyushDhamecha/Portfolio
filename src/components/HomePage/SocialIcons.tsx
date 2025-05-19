import React from 'react';
import * as motion from 'motion/react-client';

// Define the type for a social link
interface SocialLink {
    href: string; // URL of the social link
    icon: React.ReactNode; // Icon component
}

// Array of social links
const socialLinks: SocialLink[] = [
    {
        href: 'https://www.linkedin.com/in/ayush-dhamecha/',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                className="w-10 h-10 text-primary hover:scale-105 hover:text-primary/90"
            >
                <g fill="currentColor">
                    <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                    <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                </g>
            </svg>
        ),
    },
    {
        href: 'https://github.com/AyushDhamecha',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-primary hover:scale-105 hover:text-primary/90"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
                    <path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.2 2.2 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.2 3.2 0 0 0-.06-2.448s-.787-.227-2.607.961a9.15 9.15 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.2 3.2 0 0 0 7 8.464a3.48 3.48 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.2 2.2 0 0 0-.496.773a2.1 2.1 0 0 0-.13.902V19" />
                    <path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948" />
                </g>
            </svg>
        ),
    },
    {
        href: 'mailto:ayushdhamecha02@gmail.com',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-primary hover:scale-105 hover:text-primary/90"
            >
                <path
                    fill="currentColor"
                    d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
                />
            </svg>
        ),
    },
];

export default function SocialIcons() {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-2 z-30">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    );
}
