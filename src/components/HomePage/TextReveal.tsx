import React from 'react';
import * as motion from 'motion/react-client';

interface TextRevealProps {
    children: React.ReactNode; // Type for children
    className?: string; // Optional className prop
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
    return (
        <div>
            <div className="relative w-fit h-full overflow-hidden inline-block">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: ['-100%', '0%', '110%'] }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={`absolute inset-0 w-full h-full bg-foreground z-10 ${className}`}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 0.1, duration: 0.3, ease: 'easeInOut' }}
                    className="relative"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default TextReveal;
