import React from "react";
//import logo from '../logo.svg';
import './POPOSSpace.css';

function POPOSSpace(props) {
    const {name, address, image, hours } = props;
    return (
        <div>
             <h3>{name}</h3>
            <img src={`${process.env.PUBLIC_URL}images/ole2.jfif`}
                width="300"
                height="300"
                alt="50 Califonia St."
            /> 
            <div>{address}</div>
            <div>{hours}</div>
        </div>
    )
}

export default POPOSSpace;