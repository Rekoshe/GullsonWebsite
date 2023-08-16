import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import {basePath} from '../../next.config';

export default function ProjectGullsun() {
    return (
        <Layout>
            <Hero background={`${basePath}/images/slider3.jpg`} sectionHeight='500px'>
                project-gullsun
            </Hero>
        </Layout>
    )
}