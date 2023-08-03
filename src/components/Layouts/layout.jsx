import React from "react";
import Header from "../Header/header";
import Styles from './layout.module.css';
import Head from "next/head";

const navbarHeight = '10rem'

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Header height={navbarHeight}></Header>
            <div className={['container-fluid', Styles.pageContent].join(" ")} >{children}</div>
        </>
    )
}