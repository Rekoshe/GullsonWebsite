import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import {basePath} from '../../next.config';

export default function AirFrieght() {
    return (
        <Layout>
            <Hero background={`${basePath}/images/air-background.jpeg`} sectionHeight='500px'>
                air freight
            </Hero>
        </Layout>
    )
}