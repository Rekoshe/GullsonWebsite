import React from "react";
import Styles from './navbar.module.scss';

export default function NavbarText(props) {
    return (
        <div className={Styles.navbarText}>
            <span className="material-icons" style={{color: "orangered", verticalAlign: 'middle'}}>
                {props.icon}
            </span>
            <span>
                {props.text}
            </span>
        </div>
    )
}