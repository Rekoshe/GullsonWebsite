import { Layout } from '@/components/Layouts/layout';
import React from 'react';
import Hero from '@/components/Hero/hero';
import {basePath} from '../../next.config';

export default function ContactUs() {
    return (
        <Layout>
            <Hero background={`${basePath}/images/Career.jpg`} sectionHeight='500px'>
                contact us
            </Hero>
        </Layout>
    )
}