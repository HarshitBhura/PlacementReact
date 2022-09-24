import React from 'react'
import "./Home.css"
import PackageContext from "./Context";

function Home() {

  return (
    <PackageContext.Consumer>
        {
           (value)=>{
            return (
              <div className='home'>
                 <div className="intro">
                   <h2>My name is  {value.data.name}</h2>
                   <h2>My age is {value.data.age}</h2>
                   <h2>i am Fullstack Developer</h2>
                   <h2>i am intern at Hoping Minds</h2>
                 </div>
              </div>
            )
           }
        }
    </PackageContext.Consumer>
)
}

export default Home