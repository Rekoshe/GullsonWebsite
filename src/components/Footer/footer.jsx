import React from "react";
import Styles from './footer.module.scss';
import Image from "next/image";
import { basePath } from '../../../next.config';
import Link from "next/link";


export default function Footer() {
    return (
        <footer className={Styles.section}>
            <div className={Styles.footerContent}>
                <div className={['row', Styles.footerNav].join(" ")}>
                    <div className={["col-sm-6", Styles.footerNavItems].join(" ")}>
                        <Link href='#' className={Styles.navItem}>home</Link>
                        <Link href='#' className={Styles.navItem}>Land freight</Link>
                        <Link href='#' className={Styles.navItem}>Ocean freight</Link>
                        <Link href='#' className={Styles.navItem}>About us</Link>
                    </div>
                    <div className={["col-sm-6", Styles.socialItems].join(" ")}>
                        <Link href='#' className={["fa", "fa-google-plus", Styles.socialItem].join(" ")}></Link>
                        <Link href='#' className={["fa", "fa-facebook", Styles.socialItem].join(" ")}></Link>
                        <Link href='#' className={["fa", "fa-twitter", Styles.socialItem].join(" ")}></Link>
                        <Link href='#' className={["fa", "fa-linkedin", Styles.socialItem].join(" ")}></Link>
                    </div>
                </div>
                <div className="row" style={{marginTop: '4rem'}}>
                    <div className={["col-sm-3", Styles.locationCol].join(" ")}>
                        <Image src={`${basePath}/images/logoProper.jpg`} width='70' height='20' className={[Styles.logo].join(" ")}></Image>
                        <div className={[ Styles.paragraph].join(" ")}>
                            7th Circle ,RJ Passengers Complex Ibn Mada St B13,
                            1st Floor, Office 115
                        </div>
                        <button className={Styles.locationButton}>get location</button>
                    </div>
                    <div className={["col-sm-3", Styles.locationCol].join(" ")}>
                        <span>OFFICES</span>
                        <span style={{color: 'blue'}}>&emsp;——</span>
                        <p style={{marginTop: '5rem'}}>Jordan - Amman</p>
                    </div>
                    <div className={["col-sm-6", Styles.locationCol].join(" ")}>
                        <span>SUBSCRIBE</span>
                        <span style={{color: 'blue'}}>&emsp;——</span>
                        <p style={{marginTop: '5rem'}}>Don’t miss GullSun Logistics latest news and events. Subscribe to our newsletter channel and be informed</p>
                        <form style={{marginTop: '6rem'}}>
                            <input style={{padding: '1.5rem', width: '70%'}} placeholder="Enter Email"></input>
                            <button className={Styles.subscribeButton} >SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#121212', height: '100%', marginTop: '3rem', textAlign: 'center'}}>
                    <div className="col-sm-6" style={{marginTop: '2rem'}}>© 2021 GullSun</div>
                    <div className="col-sm-6" style={{marginTop: '2rem'}}>GullSun</div>
                </div>

            </div>
            <Image className={Styles.background} src={`${basePath}/images/footer.jpg`} fill alt="globe image"></Image>
        </footer>
    )
}