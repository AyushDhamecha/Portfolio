'use client';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

// Define the props for the AnimatedText component
interface AnimatedTextProps {
    text: string; // The text to animate
    containerClass?: string; // Custom class for the container
    wordClass?: string; // Custom class for each word
    motionClass?: string; // Custom class for motion styling
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    containerClass = '',
    wordClass = '',
    motionClass = '',
}) => {
    const container = useRef<HTMLDivElement | null>(null); // Typed as HTMLDivElement
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.9', 'start 0.25'],
    });

    const words = text.split(' ');

    return (
        <div ref={container} className={`flex flex-wrap leading-tight p-0 ${containerClass}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                        wordClass={wordClass}
                        motionClass={motionClass}
                    >
                        {word}
                    </Word>
                );
            })}
        </div>
    );
};

// Define the props for the Word component
interface WordProps {
    children: React.ReactNode; // Content of the word (text)
    progress: MotionValue<number>; // Scroll progress value
    range: [number, number]; // Range for scroll progress to apply opacity
    wordClass: string; // Word-specific class
    motionClass: string; // Class for motion styling
}

const Word: React.FC<WordProps> = ({ children, progress, range, wordClass, motionClass }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className={`relative mr-1 mt-0 ${wordClass}`}>
            <span className={`absolute opacity-70 ${wordClass}`}>{children}</span>
            <motion.span style={{ opacity }} className={`${motionClass}`}>
                {children}
            </motion.span>
        </span>
    );
};

export default AnimatedText;
