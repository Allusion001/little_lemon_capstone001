import React from 'react'
import img from  "../greek_salad.jpg"
import "./Cards.css";

function Cards({img,name,price,details}) {
  return (
    <div className='Cards'>
        
        <img object-fit="contain" width="300px" height="182px" src={img}></img>

        <div className="card_heading">
            <div className="price_Section">
                <h3>{name}</h3>
                <h5 style={{color:"#EE9972"}}>{price}</h5>
            </div>
            <p>{details}</p>
            <p style={{fontWeight:'bold'}}>Order a delivery</p>
        
        </div>
    </div>
  )
}

export default Cards