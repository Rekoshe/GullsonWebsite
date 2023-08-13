import React from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from '../../../next.config';
import Styles from './solution.module.scss';



export default function Solution() {
    return (
        <div className={[Styles.section].join(" ")}>
            <div className={[Styles.content, "row"].join(" ")}>
                <div className={[Styles.sender, 'col-sm-6'].join(" ")}>
                    <div className={Styles.textContainer}>
                        <p className={Styles.smallText}>we have the solution</p>
                        <p className={Styles.bigText}>are you a sender?</p>
                        <p className={Styles.bracket}>{'⎵'}</p>
                    </div>
                    <Image className={Styles.senderImg} src={`${basePath}/images/sender.jpg`} height='480' width='960'></Image>
                </div>
                <div className={[Styles.shipper, 'col-sm-6'].join(" ")}>
                    <div className={Styles.textContainer}>
                        <p className={Styles.bracket}>{'⎴'}</p>
                        <p className={Styles.smallText}>we have the solution</p>
                        <p className={Styles.bigText}>are you a shipper?</p>
                    </div>
                    <Image className={Styles.shipperImg} src={`${basePath}/images/shipper.jpg`} height='480' width='960'></Image>
                </div>
            </div>
        </div>
    )
}