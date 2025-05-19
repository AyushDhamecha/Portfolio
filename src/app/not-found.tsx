import React from 'react';
import NotFound404 from '@/assets/images/404.svg';
import Image from 'next/image';
import Section from '@/components/HomePage/Section';
import Link from 'next/link';
const NotFound: React.FC = () => {
    return (
        <Section className="flex justify-center items-center text-center relative">
            <Image src={NotFound404} alt="404" width={500} height={500} />

            <Link href="/">Go back to home</Link>
        </Section>
    );
};

export default NotFound;
