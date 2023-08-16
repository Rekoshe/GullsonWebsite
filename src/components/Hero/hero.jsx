import React, { Children } from "react";
import Image from "next/image";
import styles from './hero.module.scss';
import HeroTextAnim from './heroTextAnim';


export default function Hero(props) {

    let sentences = new Array();

    Children.forEach(props.children, (child) => {
        sentences.push(React.createElement(HeroTextAnim, null, child));
    });

    return (
        <div className={styles.heroContainer} style={{ minHeight: props.sectionHeight }} >
            <div className={styles.heroTextContainer}>
                <div>
                    <HeroTextAnim className={[styles.heroTextsmall].join(" ")} small >{props.what}</HeroTextAnim>
                    {sentences}
                </div>
            </div>
            <Image className={styles.background} src={props.background} alt="image" fill></Image>
        </div>
    )
}