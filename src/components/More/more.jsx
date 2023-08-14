import React from "react";
import Link from "next/link";
import Styles from './more.module.scss';
import NavbarItem from "../Navbar/navbarItem";

export default function More() {
    return (
        <div className={Styles.section}>
            <div className={Styles.content}>
                <div className={Styles.background}>
                    <p className={Styles.backgroundText}>More</p>
                </div>
                <p className={Styles.bigText}>Looking for more?
                </p>
                <p className={Styles.bigText}>Here are a few places to explore.</p>
                <div className={Styles.nav}>
                    <NavbarItem classes={Styles.navItem} href='#'>About us {'>'}</NavbarItem>
                    <NavbarItem classes={Styles.navItem} href='#'>Project forwarding {'>'}</NavbarItem>
                    <NavbarItem classes={Styles.navItem} href='#'>Services {'>'}</NavbarItem>
                    <NavbarItem classes={Styles.navItem} href='#'>Contact us {'>'}</NavbarItem>
                </div>
            </div>
        </div>
    )
}