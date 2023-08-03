import React, { useState } from "react";
import Image from "next/image";
import styles from './hero.module.scss';
import HeroTextAnim from './heroTextAnim';
import { Prosto_One } from "next/font/google";


export default function Hero(props) {


    return (
        <div className={styles.heroContainer} style={{minHeight: props.sectionHeight}} >
            <div className={styles.heroTextContainer}>
                <span className={styles.heroTextsmall} >{props.what}</span>
                <br></br>
                {props.firstSentence}
                <br></br>
                {props.secondSentence}
                <br></br>
                {props.thirdSentence}
            </div>
            <Image className={styles.background} src={props.background} alt="image" fill></Image>
        </div>
    )
}