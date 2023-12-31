import React from "react";
import './Button.css';
import { Link } from "react-router-dom";
const STYLES=['btn--primary','btn--outline', 'btn--test']
const SIZES=['btn--medium','btn--large']
export const Button=({children,onClick,buttonStyle,buttonSize,type})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize=STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/sign-up' className="btn-mobile">
            <button onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </button>
        </Link>
    )
}