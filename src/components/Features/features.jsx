import React from "react";
import FeatureCard from "./featureCard";
import Styles from './features.module.scss'

export default function Features() {
    return (
        <div className={["container-fluid", Styles.section].join(" ")}>
            <div className={["row", Styles.content].join(" ")}>

                <div className="col-sm-6">
                    <span className={Styles.keyText}>Key features</span>
                    <div className="container-fluid">
                        <FeatureCard title='100% Safe Delivery' paragraph='Our capacities give us the freedom of executing project of various sizes. From small personal projects to building mega build of grand scale.'></FeatureCard>
                        <FeatureCard title='Weather Insurance' paragraph='GullSun ensures that compensations are paid in case of damage due to unfavorable weather conditions or due to other risk factors occurs'></FeatureCard>
                        <FeatureCard title='Fast & On Time' paragraph='We ensure the delivery of your products in a minimum time.'></FeatureCard>
                    </div>
                </div>

                <div id="about" className="col-sm-6" style={{marginTop: '2rem'}}>
                    <span className={Styles.smallText} >about us <span style={{color: 'red', fontWeight: '700'}}>&emsp;——</span></span>
                    <h1 className={Styles.bigText }>Between the point of departure and destination there is <span style={{color: "orangered"}}> GULLSUN </span></h1>
                    <h2 className={Styles.subText}>GULLSUN Transport & Logistics keeps your business in motion and your cargo on track.</h2>
                    <p className={Styles.paragraphText}>We offer dedicated transport, logistics and warehousing solutions in Europe and across the world with customised personal service and guaranteed quality. We are one of the leading transport and logistics companies.</p>
                </div>

            </div>
        </div>
    )
}