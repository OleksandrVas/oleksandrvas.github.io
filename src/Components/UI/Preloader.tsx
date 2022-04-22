import React from 'react';
// @ts-ignore
import preloader from "../../assets/preloader.svg"



const Preloader = () => {
    return (
        <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , minHeight : "600px" }}>
           <img src= {preloader}/>
        </div>
    );
};

export default Preloader;