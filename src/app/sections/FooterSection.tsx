import React from 'react';
import Section from '@/components/HomePage/Section';

const FooterSection: React.FC = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <Section className={'border-t border-border'}>
            <div className="text-center">
                <p>Made by Ayush Dhamecha @ All rights reserved | {currentYear}</p>
            </div>
        </Section>
    );
};

export default FooterSection;
