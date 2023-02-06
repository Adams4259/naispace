import React from "react";
import logo from '../logo.svg';

function POPOSSpace(props) {
    const {name, address, image } = props;
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}images/ole2.jfif`}
                width="300"
                height="300"
                alt="50 Califonia St."
            />           
             <h3>{name}</h3>
            <div>{address}</div>
        </div>
    )
}

export default POPOSSpace;