import React from "react";
import { motion } from 'framer-motion';

export default function AnimatedText(props) {

    let letters = String(props.children).split(" ");
    let elements = new Array();
    let delay = 0.5;

    for (let i = 0; i < letters.length; i++){

        delay = delay + 0.05;
        letters[i] = letters[i]

        elements.push(React.createElement(motion.span, 
            {className:props.classes, transition:{ delay: delay }, viewport:{ once: true }, whileInView:{opacity: 1, transform: 'translateY(0)'}, style:{marginRight: '1.2rem'}}, letters[i]))
    }

    return (
        elements
    )
}