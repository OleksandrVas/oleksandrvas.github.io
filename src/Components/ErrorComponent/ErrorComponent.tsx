import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../Styles/ErrorComponent.scss"

const ErrorComponent = () => {
    const navigate = useNavigate()
    return (
        <div className="errorComponentContainer">
            <h1> Invalid path</h1>
            <button onClick={() => {
                navigate("/")
            }}>Click on me to redirect
            </button>
        </div>
    );
};

export default ErrorComponent;