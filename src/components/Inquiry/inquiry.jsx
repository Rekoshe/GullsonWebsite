import React from "react";
import Image from "next/image";
import Styles from './inquiry.module.scss'
import { motion } from 'framer-motion'
import { basePath } from '../../../next.config';

export default function Inquiry() {


    return (
        <div className={Styles.section}>
            <div className={Styles.content}>
                <div className={Styles.contentGrid}>
                    <motion.div whileInView={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
                    transition={{duration: 1,}}
                    viewport={{once: true}}
                     className={Styles.bracket}>{'['}</motion.div>
                    <div className={Styles.text}>
                        <p className={Styles.smalltext}>Fast & reliable</p>
                        <motion.h1 whileInView={{ transform: 'translateX(0)', opacity: 1 }}
                            transition={{delay: 1, duration: 1}}
                            viewport={{ once: true }}
                         className={Styles.bigText}>Transport inquiry</motion.h1>
                        <p className={Styles.paragraph}>Send us your transport inquiry – we are pleased to send you an offer without obligation. Our solutions are tailored on your individual requirements.</p>
                        <button className={Styles.requestButton}>send request</button>
                    </div>
                </div>
            </div>
            <Image className={Styles.background} src={`${basePath}/images/section_back_1.jpg`} alt="image" fill></Image>
        </div>
    )
}