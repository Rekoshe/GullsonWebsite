import React from "react";
import Styles from './features.module.css'

export default function FeatureCard(props) {
    return (
        <div className={['row', Styles.cardItem].join(" ")}>
            <div>
                <div className={["col-sm-2", "material-icons-outlined", Styles.cardIcon].join(" ")}>check_circle</div>
            </div>
            <div className="col-sm-10">
                <h1 className={Styles.titleText}>{props.title}</h1>
                <p className={Styles.paragraphText}>{props.paragraph}</p>
            </div>
        </div>
    )
}