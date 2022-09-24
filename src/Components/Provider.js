import PackageContext from "./Context";
import React,{useState} from "react";

const Provider=(props)=>{

    const [coder,setCoder]=useState({
        name:"Harshit Bhura Jain",
        age:20
    })
  
    return(
        <PackageContext.Provider
        value={
            {
                data:coder
                
            }
        }  
        >
        {props.children}
        </PackageContext.Provider>
    )
    
}
export default Provider;