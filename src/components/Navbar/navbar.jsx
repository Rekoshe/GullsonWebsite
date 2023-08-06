import React from "react";
import NavbarItem from './navbarItem';
import Styles from './navbar.module.scss';
import Image from 'next/image';
import NavbarText from './navbarText';
import Link from "next/link";
import {basePath} from '../../../next.config';


export default function Navbar() {

    

    return (
        <nav className={Styles.container}>
            <div className={Styles.blackSection}>
                <div className={Styles.blackSectionContent}>
                    <div className={Styles.text}>
                        <NavbarText icon='location_on' text='7th Circle ,RJ Passengers Complex'></NavbarText>
                        <NavbarText icon='call' text='Tel: +962 6 5821019'></NavbarText>
                        <NavbarText icon='email' text='Email: info@gullsun.com'></NavbarText>

                        <a className={Styles.socialIcon}> Langauge</a>
                        <a href="#" className={["fa", "fa-facebook", Styles.socialIcon].join(" ")}></a>
                        <a href="#" className={["fa", "fa-twitter", Styles.socialIcon].join(" ")}></a>
                        <a href="#" className={["fa", "fa-youtube", Styles.socialIcon].join(" ")}></a>
                        <a href="#" className={["fa", "fa-envelope", Styles.socialIcon].join(" ")}></a>

                        <button className={Styles.button}>get a qoute</button>
                    </div>


                </div>
            </div>
            <div className={Styles.whiteSection}>
                <div className={Styles.whiteSectionContent}>
                    <div className={Styles.logo}>
                        <a href="#">
                            <Image src={`${basePath}/images/logoProper.jpg`} alt="gullson logo" height='75' width='75'></Image>
                        </a>
                    </div>
                    <div className={Styles.navItem}>
                        <NavbarItem href='/' name={'home'}></NavbarItem>
                        <NavbarItem href='#' name={'services'}>
                            
                        </NavbarItem>
                        <NavbarItem href='#' name={'projects'}></NavbarItem>
                        <NavbarItem href='#' name={'contact us'}></NavbarItem>
                        <NavbarItem href='#' name={'about us'}></NavbarItem>
                        <button className={[Styles.navButton, 'material-icons'].join(" ")}>search</button>
                        <button className={[Styles.navButton, 'material-icons'].join(" ")}>menu</button>
                        <div className={Styles.dropdownContent}>
                            <Link href='/ocean-freight'className={Styles.dropdownItem}>ocean freight</Link>
                            <Link href='#'className={Styles.dropdownItem}>air freight</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}