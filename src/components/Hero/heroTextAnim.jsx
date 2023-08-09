import React from "react";
import styles from './hero.module.scss';
import { motion } from 'framer-motion';

export default function HeroTextAnim(props) {
    if (props.small){
        return (
            <h1 className={styles.heroTextSmall}>{props.children}</h1>
        )
    }

    return (
        <h1 style={{marginTop: '3rem'}}><motion.span initial={{ clipPath: 'polygon(99.99% 0%, 100% 0%, 100% 100%, 99.99% 100%)' }}
            whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            className={[styles.heroText].join(" ")}>{props.children}</motion.span></h1>
    )
}