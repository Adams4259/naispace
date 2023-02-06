import React from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import './POPOSLIst.css'
import data from '../POPOSList/my-data.json';

const spaces = data.map((obj) =>{
  const {title, image , address, hours} = obj
  return (
    <POPOSSpace
      key = {title}
      name={obj.title}
      address={obj.address}
      image={obj.images[0]}
      hours ={obj.hours}
    />
  )
})
function POPOSList() {
    return (
        <div className="POPOSList">
           {spaces}
        </div>
    )
}

export default POPOSList;