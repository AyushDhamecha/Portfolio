'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useTransform, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { SquareArrowOutUpRight, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { StaticImageData } from 'next/image'; // Correct type for static images

// Define the type for a project
interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData; // Use StaticImageData for imported images
    color: string;
    logo: StaticImageData; // Use StaticImageData for imported logos
    techUsed: string[];
    demoLink: string;
    codeLink: string;
}

// Define the props for the ParallaxStack component
interface ParallaxStackProps {
    projects: Project[]; // Array of projects
}

export default function ParallaxStack({ projects }: ParallaxStackProps) {
    const containerRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={containerRef}>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.03; // Smooth scaling effect
                return (
                    <Card
                        key={project.id}
                        index={i}
                        project={project}
                        progress={scrollYProgress}
                        range={[i * 0.15, 1]} // Adjusted range for smooth transition
                        targetScale={targetScale}
                    />
                );
            })}
        </main>
    );
}

// Define the props for the Card component
interface CardProps {
    project: Project; // Project data
    progress: MotionValue<number>; // Corrected type for progress
    range: [number, number]; // Range for the animation
    targetScale: number; // Target scale for the card
    index: number; // Index of the card
}

const Card: React.FC<CardProps> = ({ project, progress, range, targetScale, index }) => {
    const cardRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

    // Slight initial up-scale for effect (applied to the card, not the image)
    const scale = useTransform(progress, range, [1, targetScale]);

    // Moves cards up smoothly
    const translateY = useTransform(progress, [0, 1.5], [index * 50, 15]);

    return (
        <motion.div ref={cardRef} className="sticky w-full top-20 h-screen" style={{ translateY }}>
            <motion.div
                className={`w-full max-tablet-lg:min-h-[50vh] max-mobile-lg:min-h-[60vh] rounded-2xl overflow-hidden bg-card relative shadow-lg hover:shadow-[0px_5px_20px] hover:shadow-muted border border-border ${project.color} origin-top z-10`}
                style={{ scale }}
            >
                <div className="flex max-mobile-lg:flex-col justify-between w-full relative z-20">
                    {/* Image Section */}
                    <div className="basis-4/6 rounded-3xl p-4 max-mobile-sm:p-2 overflow-hidden">
                        <div className="w-full h-full overflow-hidden rounded-xl border border-border">
                            <Image
                                src={project.image}
                                width={1400}
                                height={1000}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="basis-2/6 flex flex-col gap-3 justify-between p-4 max-mobile-sm:p-2 max-mobile-sm:pt-0 relative">
                        <div>
                            <h2 className="max-mobile-sm:text-2xl">{project.title}</h2>
                            <p className="max-mobile-sm:text-md max-mobile-sm:max-h-[20vh] max-mobile-sm:overflow-y-auto max-mobile-sm:text-ellipsis">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techUsed.map(tech => (
                                    <Badge
                                        className="rounded-sm text-sm shadow-lg text-nowrap"
                                        key={tech}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex gap-2 items-end justify-between">
                            <div className="flex gap-2">
                                <Button>
                                    Code
                                    <Code className="translate-y-[-2.5px]" />
                                </Button>
                                <Link
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground no-underline"
                                >
                                    <Button
                                        variant="outline"
                                        className="flex items-center font-bold"
                                    >
                                        Demo
                                        <SquareArrowOutUpRight className="translate-y-[-2.5px]" />
                                    </Button>
                                </Link>
                            </div>
                            <Image
                                src={project.logo}
                                alt="project logo"
                                className="absolute right-2 bottom-2 w-20"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
