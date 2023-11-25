import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Nav({highlight}) {
  const style={fontWight:"bold"}
  const [click,setClick]=useState(false);
  const [selected,setSelected]=useState("Home")

  return (
    <>
        <ul className={click?"navigation active2":"navigation"}>
            <li className={selected==="Home"?"active":"a"} onClick={(e)=>{e.preventDefault();setSelected(()=>"Home")}}><Link to="/">Home</Link></li>

            <li className={selected==="About"?"active":"a"} onClick={(e)=>{e.preventDefault();setSelected(()=>"About")}}><Link to="/">About</Link></li>
            <li className={selected==="Menu"?"active":"a"} onClick={()=>setSelected("Menu")}><Link to="/">Menu</Link></li>
            <li className={selected==="Reservations"?"active":"a"} onClick={()=>setSelected(()=>"Reservations")}><Link to="/form"> Reservations</Link></li>
            <li className={selected==="Order Online"?"active":"a"} onClick={()=>setSelected("Order Online")}><Link to="/">Order Online</Link></li>
            <li className={selected==="Login"?"active":"a"} onClick={()=>setSelected("Login")}><Link to="/">Login</Link></li>
        </ul>
        <div className="mobile" onClick={()=>click?setClick(false):setClick(true)}>
          <i className={click?"fas fa-times":"fas fa-bars"}/>
        </div>
    </>
  )
}

export default Nav