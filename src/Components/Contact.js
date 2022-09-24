import React from 'react'
import PackageContext from "./Context";
import "./Home.css"
function Contact() {
  return (
    <PackageContext.Consumer>
        {
           (value)=>{
            return (
              <div className='home'>
                <h1 style={{color:"red"}}>Contact us</h1>
                 <div className="intro">
                   <h2>My name is  {value.data.name}</h2>
                   <h2>My contact number :6376096067</h2>
                   <h2>My Linkedin id :- Harshitjain</h2>
                   <h2>My Github id  :-HarshJain</h2>
                   <h2>My email :-hj9782400589@gmail.com</h2>
                 </div>
              </div>
            )
           }
        }
    </PackageContext.Consumer>
  )
}

export default Contact