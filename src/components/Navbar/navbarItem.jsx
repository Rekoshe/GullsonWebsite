import React from "react";
import Styles from './navbar.module.scss';
import Link from "next/link";

export default function NavbarItem( props) {

    let classes;

    if(props.name == 'services'){
        classes = [Styles.navbarItem, Styles.services].join(" ");
    }else{
        classes = Styles.navbarItem;
    }


    return (
        <Link onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter} href={props.href} className={[classes, props.classes].join(" ")}>
            {props.name}
            {props.children}
        </Link>
    )
}