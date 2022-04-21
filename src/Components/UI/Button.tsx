import React from 'react';
import "./Button.scss"

interface Props {
    children: string,
    onHandleClick : any,
}

const Button: React.FC<Props> = ({children , onHandleClick}) => {
    return (
        <button className="styledButton" onClick={onHandleClick} >
            {children}
        </button>
    );
};

export default Button;