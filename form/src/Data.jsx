import React from "react";
import { useLocation } from "react-router-dom";
function Data(){
  const location =useLocation();
  const {Name,Email,Massege}=location.state;
     return(
       <>
         <div className="datacontainer">
        <p> Name:{Name}</p>
        <p> Email:{Email}</p>
        <p> Massege:{Massege}</p>
    
     </div>
       </>
     )
}
export default Data;


