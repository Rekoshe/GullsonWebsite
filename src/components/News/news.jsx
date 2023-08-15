import React from "react";
import Styles from './news.module.scss';
import AnimatedText from './animatedText';

export default function News() {
    return (
        <div className={Styles.section}>
            <div className={Styles.content}>
                <div className={'col-sm-7'}>
                    <div className={Styles.smallText}>gullson news<span style={{ color: 'red', fontWeight: '700' }}>&emsp;——</span></div>
                    <p className={Styles.textContent}>
                        <AnimatedText classes={Styles.bigText}>Don’t miss GULLSUN latest news and events</AnimatedText>
                    </p>
                </div>
                <div className={[Styles.content, 'col-sm-5'].join(" ")}></div>
            </div>
        </div>
    )
}