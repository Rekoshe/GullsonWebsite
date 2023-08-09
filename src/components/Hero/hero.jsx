import React, { useState } from "react";
import Image from "next/image";
import styles from './hero.module.scss';
import HeroTextAnim from './heroTextAnim';
import { Prosto_One } from "next/font/google";


export default function Hero(props) {


    return (
        <div className={styles.heroContainer} style={{ minHeight: props.sectionHeight }} >
            <div className={styles.heroTextContainer}>
                <div>
                    <HeroTextAnim className={[styles.heroTextsmall].join(" ")} small >{props.what}</HeroTextAnim>
                    <HeroTextAnim>{props.firstSentence}</HeroTextAnim>
                    <HeroTextAnim>{props.secondSentence}</HeroTextAnim>
                    <HeroTextAnim>{props.thirdSentence}</HeroTextAnim>
                </div>
            </div>
            <Image className={styles.background} src={props.background} alt="image" fill></Image>
        </div>
    )
}