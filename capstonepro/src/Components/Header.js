import React from 'react'
import logo from "../Logo .svg"
import Nav from "./Nav.js"
import "./Header.css";

function Header() {
  return (
    <div className="Header">
    <img src={logo}/>
    <Nav highlight={"home"}/>
    </div>
  )
}

export default Header