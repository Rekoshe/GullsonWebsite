import React from "react";
import Styles from './services.module.scss';
import { motion } from 'framer-motion';
import Link from "next/link";



export default function serviceCard(props) {


    return (
        <motion.div whileInView={{transform: 'translateY(0)',opacity: 1}}
         className={[Styles.cardItem, 'col-sm-4'].join(" ")}
         transition={{delay: 0.3, duration: 0.5}}
         viewport={{ once: true}}>
            <span className={['material-icons', Styles.cardIcon].join(" ")}>{props.icon}</span>
            <h1 className={Styles.cardTitle}>{props.title}</h1>
            <p className={Styles.cardParagraph}>{props.paragraph}</p>
            <div className={Styles.buttonContainer}>
                <Link href={props.href} className={Styles.cardButton}><span style={{ color: 'red', fontWeight: '700' }}>——&emsp;</span>READ MORE<span style={{ color: 'red', fontWeight: '700' }}>&emsp;——</span></Link>
            </div>
        </motion.div>
    )
}