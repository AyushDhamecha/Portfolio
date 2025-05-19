import React from 'react';
import bg from '@/assets/images/backgrounds/background2.svg';
import Image from 'next/image';

const SectionBackgrpound1: React.FC = () => {
    return (
        <div className="absolute top-0 inset-0 -z-10">
            <Image
                src={bg}
                alt="Background"
                className="sticky top-0 h-screen w-full object-cover -z-10 opacity-10 dark:brightness-50"
                priority // Add priority if this image is above the fold
            />
        </div>
    );
};

export default SectionBackgrpound1;
