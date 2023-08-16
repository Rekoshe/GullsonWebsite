import React, { useEffect, useState } from "react";
import NavbarItem from './navbarItem';
import Styles from './navbar.module.scss';
import Image from 'next/image';
import NavbarText from './navbarText';
import Link from "next/link";
import { basePath } from '../../../next.config';


export default function Navbar() {

    const [animation, setAnimaton] = useState('');

    return (
        <nav className={Styles.section}>
            <div className={Styles.container}>
                <div className={Styles.blackSection}>
                    <div className={Styles.blackSectionContent}>

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
                <div className={Styles.whiteSection}>
                    <div className={Styles.whiteSectionContent}>
                        <div className={Styles.logo}>
                            <a href="#">
                                <Image src={`${basePath}/images/logoProper.jpg`} alt="gullson logo" height='75' width='75'></Image>
                            </a>
                        </div>
                        <div className={Styles.navItem}>
                            <NavbarItem href='/' name={'home'}></NavbarItem>
                            <div>
                                <NavbarItem href='' onMouseLeave={() => { setAnimaton(Styles.popOut) }} onMouseEnter={() => setAnimaton(Styles.popIn)} name={'services'}></NavbarItem>
                                <div key={Math.random()} onAnimationEnd={() => { if (animation == Styles.popOut) { setAnimaton(" ") } }} onMouseEnter={() => setAnimaton(Styles.popIn)} onMouseLeave={() => { setAnimaton(Styles.popOut) }} className={[Styles.dropdownContainer, animation].join(" ")}>
                                    <Link href='/ocean-freight' className={Styles.dropdownMenuItem}>Ocean Freight</Link>
                                    <Link href='/air-freight' className={Styles.dropdownMenuItem}>Air Freight</Link>
                                    <Link href='/land-freight' className={Styles.dropdownMenuItem}>Land Freight</Link>
                                    <Link href='/cleanrance' className={Styles.dropdownMenuItem}>Clearance</Link>
                                </div>
                            </div>
                            <NavbarItem href='/project-gullsun' name={'projects'}></NavbarItem>
                            <NavbarItem href='/contact-us' name={'contact us'}></NavbarItem>
                            <NavbarItem href='#about' name={'about us'}></NavbarItem>
                            <button className={[Styles.navButton, 'material-icons'].join(" ")}>search</button>
                            <button className={[Styles.navButton, 'material-icons'].join(" ")}>menu</button>
                            <button className={['material-icons', Styles.mobileNavButton].join(" ")}>menu</button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}