import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import HeroTextAnim from '@/components/hero/heroTextAnim'

export default function OceanFrieght() {
    return (
        <Layout>
            <Hero background={'/images/ocean-background.jpg'} firstSentence={<HeroTextAnim>ocean freight</HeroTextAnim>} sectionHeight='500px'></Hero>
        </Layout>
    )
}