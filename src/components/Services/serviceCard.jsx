import React from "react";
import Styles from './services.module.css';



export default function serviceCard(props) {


    return (
        <div className={[Styles.cardItem, 'col-sm-4'].join(" ")}>
            <span className={['material-icons', Styles.cardIcon].join(" ")}>{props.icon}</span>
            <h1 className={Styles.cardTitle}>{props.title}</h1>
            <p className={Styles.cardParagraph}>{props.paragraph}</p>
            <button className={Styles.cardButton}>READ MORE</button>
        </div>
    )
}