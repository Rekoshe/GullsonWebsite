import React from "react";
import Image from "next/image";
import { basePath } from '../../../next.config';
import Styles from './message.module.scss';
import FeatureCard from "../Features/featureCard";

export default function message() {
    return (
        <div className={Styles.section}>
            <div className={Styles.content}>
                <div className={[Styles.ceo, 'col-sm-6'].join(" ")}>
                    <div className={Styles.smallText}>
                        <p>Message From CEO<span style={{ color: 'red' }}>&emsp;——</span></p>
                    </div>
                    <div className={Styles.imageRow}>
                        <div className={[Styles.imageCol, 'col-sm-4'].join(" ")}>
                            <Image className={Styles.img} src={`${basePath}/images/ceo1.jpg`} width='150' height='150'></Image>
                        </div>
                        <div className={[Styles.imageCol, 'col-sm-4'].join(" ")}>
                            <Image className={Styles.img} src={`${basePath}/images/ceo2.jpg`} width='150' height='150'></Image>
                        </div>
                        <div className={[Styles.imageCol, 'col-sm-4'].join(" ")}>
                            <Image className={Styles.img} src={`${basePath}/images/ceo3.jpg`} width='150' height='150'></Image>
                        </div>
                    </div>
                    <div className={Styles.messageRow}>
                        <p className={Styles.paragraph}>After spending the past several years with shipping Companies
                            as simple employee I feel very privileged to be writing this message as the chief executive officer.</p>
                        <p className={Styles.paragraph}>We, at Gullsun Cargo Company, offer a convenient layout of standard freight management services,
                            including all possible routes, i.e. Air, Sea, and Road to balance urgency and cost effectiveness for your everyday shipments.</p>
                        <p className={Styles.paragraph}>While many things will change, what will remain constant, are our Principles,
                            which are instilled in every one of our employees, ensuring we stay focused on our goal of excellence in customer satisfaction. Assuring you of our best services always, we remain.</p>
                    </div>
                </div>
                <div className={[Styles.why, 'col-sm-6'].join(" ")}>
                    <div className={Styles.whyLabel}>why choose us?</div>
                    <FeatureCard title='Worldwide locations'
                    paragraph='We are a dedicated, full-service provider of third-party logistics specializing in both domestic and international freight cargo. We will take care of all your needs and make sure your shipment is delivered on time!'></FeatureCard>
                    <FeatureCard title='Quality and commitment'
                    paragraph='Plans to develop information management system and integrate all processes thought applying supply chain management system under our mission.'></FeatureCard>
                    <FeatureCard title='End-to-end solution available'
                    paragraph='The goods management includes thereby different services provided by AS GULLSUN Logistics from the stock management up to transport.'></FeatureCard>
                    <FeatureCard title='24/7 customer support'
                    paragraph='We can be your great business partner and help you growth strongly.'></FeatureCard>
                </div>
            </div>
        </div>
    )
}