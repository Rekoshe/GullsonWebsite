import React from "react";
import styles from './hero.module.scss';
import {motion} from 'framer-motion';

export default function HeroTextAnim({ children }) {
    return (
        <motion.span initial={{ clipPath: 'polygon(99.99% 0%, 100% 0%, 100% 100%, 99.99% 100%)' }}
         whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            className={styles.heroText}>{children}</motion.span>
    )
}