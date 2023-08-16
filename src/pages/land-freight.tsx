import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import {basePath} from '../../next.config';

export default function LandFrieght() {
    return (
        <Layout>
            <Hero background={`${basePath}/images/land-background.jpg`} sectionHeight='500px'>
                land freight
            </Hero>
        </Layout>
    )
}