import React from 'react'
import image from '../restauranfood.jpg';
import "./Hero.css"

function Hero() {
  return (
    <div className="Hero">
      <div className="TextArea">
          <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
          <h6 style={{color: "#F4CE14"}}>Chicago</h6>
          <p style={{color: "#FFFFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button style={{backgroundColor: "#F4CE14" ,padding:"20px"}}>Reseve a Table</button>
      </div>
      <div className="imgArea">
          <img src={image} height="355px" className="flip"  width="372px" object-fit="fill" ></img>
      </div>
    </div>
  )
}

export default Hero