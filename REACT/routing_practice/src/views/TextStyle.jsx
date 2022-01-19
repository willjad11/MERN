import React from 'react';
import { useParams } from 'react-router-dom'

const TextStyle = () => {
    const {desiredString, textColor, bgColor} = useParams();
    const outputDisplay = isNaN(desiredString) 
        ? "Your word is: " + desiredString + " in " + textColor + " and " + bgColor + "!"
        : "Your number is: " + desiredString + " in " + textColor + " and " + bgColor + "!";
    return (
        <h1 style={{ color: textColor, backgroundColor: bgColor }}>{outputDisplay}</h1>
    );
}

export default TextStyle;
