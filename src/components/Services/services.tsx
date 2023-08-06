import React from "react";
import Styles from './services.module.css';
import ServiceCard from './serviceCard';
import Image from 'next/image'
import {basePath} from '../../../next.config';

export default function Services() {
    return (
        <div className={Styles.services}>

            <div className={Styles.servicesContent}>
                <span className={Styles.servicesTextSmall}>Gullson Services</span>
                <div className={Styles.servicesText}>
                    You have a need, we <br></br> have the <span style={{ color: '#FC2F0F' }}>SOLUTION</span>
                </div>
                <div className={[Styles.servicesGrid, 'container-fluid'].join(" ")}>

                    <div className='row'>
                        <ServiceCard icon='directions_boat' title='sea freight' paragraph='GullSun cover different equipment types and consolidation services to ensure your cargo reaches the right place, at the right time in a cost-efficient way.'></ServiceCard>
                        <ServiceCard icon='flight' title='air freight' paragraph='GullSun understands the costs and benefits of air transport and it shouldn’t be wasted or compromised when fast delivery is crucial.Fast but not rough.'></ServiceCard>
                        <ServiceCard icon='local_shipping' title='land transport' paragraph='GullSun covers  Full Truck load (FTL) and Less Than Truckload (LTL).'></ServiceCard>
                    </div>
                    <div className="row">
                        <ServiceCard icon='recycling' title='custom solutions' paragraph='GullSun Customs Clearance is well-known for its fast and reliable import & export customs clearance services. The division has established strong rapport with all the Sea and Air Customs Clearance points in the Middle East.'></ServiceCard>
                    </div>

                </div>
            </div>
            <Image className={Styles.background} src={`${basePath}/images/world.jpg`} alt="background image of the world map" fill></Image>
        </div>
    )
}