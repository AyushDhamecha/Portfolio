'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react'; // Keep the motion import as it is
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Section from '@/components/HomePage/Section';

export default function ParalaxSection() {
    const container = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            // Cleanup Lenis instance if needed
        };
    }, []);

    return (
        <Section>
            <main ref={container} className="w-full relative h-[200vh]">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </main>
        </Section>
    );
}

// Define the props for Section1 and Section2
interface SectionProps {
    scrollYProgress: MotionValue<number>; // Use the correct type for scrollYProgress
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div
            style={{ scale, rotate }}
            className="sticky top-20 h-screen bg-[#C72626]"
        ></motion.div>
    );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.div
            style={{ scale, rotate }}
            className="sticky top-20 h-screen bg-primary"
        ></motion.div>
    );
};
