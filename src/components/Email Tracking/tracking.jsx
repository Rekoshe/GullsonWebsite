import React from "react";
import Styles from './tacking.module.css'

export default function Tracking() {
    return (
        <div className={Styles.background}>
            <p className={Styles.trackingText}>Enter your email and tracking #</p>
            <form>
                <input className={Styles.formItem} type="text" id="fname" name="fname" defaultValue="Email"></input>
                <input className={Styles.formItem} type="text" id="lname" name="lname" defaultValue="Tracking Number"></input>
                <button className={Styles.trackButton}>
                    <span>track your cargo</span>
                </button>
            </form>

        </div>
    )
}