'use client';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import Picture1 from '@/assets/elements/star2.svg';
import Picture2 from '@/assets/elements/star2.svg';
import Image from 'next/image';
import { useRef } from 'react';

export default function TextParalaxEffect() {
    const container = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    return (
        <main className="overflow-hidden relative">
            {/* <SectionBackgrpound1 /> */}
            <div ref={container}>
                <Slide src={Picture1} direction={'left'} left={'-40%'} progress={scrollYProgress} />
                <Slide
                    src={Picture2}
                    direction={'right'}
                    left={'-25%'}
                    progress={scrollYProgress}
                />
            </div>
        </main>
    );
}

// Define the props for the Slide component
interface SlideProps {
    src: string; // Image source
    direction: 'left' | 'right'; // Animation direction
    left: string; // CSS left position
    progress: MotionValue<number>; // Corrected type for scroll progress
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
    const directionMultiplier = direction === 'left' ? -1 : 1;
    const translateX = useTransform(
        progress,
        [0, 1],
        [150 * directionMultiplier, -150 * directionMultiplier]
    );

    return (
        <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
            <Phrase src={src} />
            <Phrase src={src} />
            <Phrase src={src} />
            <Phrase src={src} />
        </motion.div>
    );
};

// Define the props for the Phrase component
interface PhraseProps {
    src: string; // Image source
}

const Phrase: React.FC<PhraseProps> = ({ src }) => {
    return (
        <div className={'px-5 flex gap-5 items-center'}>
            <p className="text-[5vw] leading-[5vw]">Web Developer</p>
            <span className="relative h-[4vw] aspect-[1/1]  overflow-hidden">
                <Image
                    style={{ objectFit: 'cover' }}
                    src={src}
                    alt="image"
                    fill
                    className="brightness-[2] dark:brightness-[4.5]"
                />
            </span>
        </div>
    );
};
