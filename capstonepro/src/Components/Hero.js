import React from 'react'
import image from '../restauranfood.jpg';
import "./Hero.css"


function Hero() {
  return (
    <div className="Hero">
      <div className="TextArea">
          <div>
            <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
            <h3 style={{color: "#F4CE14"}}>Chicago</h3>
            <p style={{color: "#FFFFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
         <button style={{backgroundColor: "#F4CE14" ,padding:"20px"}}>Reseve a Table</button>
     
      </div>
      <div className="imgArea">
          <img src={image} height="340px" className="flip"  width="340px" object-fit="fill" ></img>
      </div>
    </div>
  )
}

export default Hero