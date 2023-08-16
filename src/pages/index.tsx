
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layouts/layout'
import Hero from '@/components/Hero/hero'
import Tracking from '@/components/Email Tracking/tracking'
import Services from '@/components/Services/services'
import Inquiry from '@/components/Inquiry/inquiry'
import Features from '@/components/Features/features'
import Solution from '@/components/Solution/solution'
import Message from '@/components/Message/message'
import More from '@/components/More/more'
import News from '@/components/News/news'
import Head from 'next/head'

import { basePath } from '../../next.config';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GullSun</title>
      </Head>
      <Hero background={`${basePath}/images/slider3.jpg`} what='what we do' >
        <span>world class</span>
        <span>shipping &</span>
        <span>logistics</span>
      </Hero>
      <Tracking></Tracking>
      <Services></Services>
      <Features></Features>
      <Solution></Solution>
      <Message></Message>
      <More></More>
      <News></News>
    </Layout>
  )
}
