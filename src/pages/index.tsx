
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layouts/layout'
import Hero from '@/components/Hero/hero'
import Tracking from '@/components/Email Tracking/tracking'
import Services from '@/components/Services/services'
import Inquiry from '@/components/Inquiry/inquiry'
import Features from '@/components/Features/features'
import Solution from '@/components/Solution/solution'
import Head from 'next/head'

import {basePath} from '../../next.config';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <Layout>
      <Head>
        <title>GullSun</title>
      </Head>

      <div className='row'>
        <div className="col-*-*">
          <Hero background={`${basePath}/images/slider3.jpg`} what='what we do' 
          firstSentence={'world class'}
          secondSentence={'trucking &'}
          thirdSentence={'logistics'}></Hero>
        </div>

      </div>

      <div className='row'>
        <div className="col-*-*">
          <Tracking></Tracking>
        </div>

      </div>

      <div className='row'>
        <div className="col-*-*">
          <Services></Services>
        </div>

      </div>

      <div className='row'>
        <div className="col-*-*">
          <Inquiry></Inquiry>
        </div>

      </div>

      <div className='row'>
        <div className="col-*-*">
          <Features></Features>
        </div>

      </div>

      <div className='row'>
        <div className="col-*-*">
          <Solution></Solution>
        </div>

      </div>

    </Layout>
  )
}
