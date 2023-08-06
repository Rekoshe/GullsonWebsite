import React from "react";
import Image from "next/image";
import Styles from './inquiry.module.scss'
import { styled } from "styled-components";
import {basePath} from '../../../next.config';

export default function Inquiry() {
    return(
        <div className={Styles.section}>
            <div className={Styles.content}>
                <p className={Styles.smalltext}>Fast & reliable</p>
                <h1 className={Styles.bigText}>Transport  <br></br> inquiry</h1>
                <p className={Styles.paragraph}>Send us your transport inquiry – we are pleased to send you an offer without obligation. Our solutions are tailored on your individual requirements.</p>
                <button className={Styles.requestButton}>send request</button>
            </div>
            <Image className={Styles.background} src={`${basePath}/images/section_back_1.jpg`} alt="image" fill></Image>
        </div>
    )
}