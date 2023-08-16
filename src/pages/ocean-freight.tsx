import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import {basePath} from '../../next.config';

export default function OceanFrieght() {
    return (
        <Layout>
            <Hero background={`${basePath}/images/ocean-background.jpg`} sectionHeight='500px'>
                Ocean Frieght
            </Hero>
        </Layout>
    )
}