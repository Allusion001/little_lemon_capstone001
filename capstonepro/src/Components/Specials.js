import React from 'react'
import Card from './Cards'
import './Specials.css'
import img1 from  "../greek_salad.jpg"
import img2 from "../lemon_dessert.jpg"
import img3 from "../dish3.jpg"



function Specials() {
  return (
    <div className='Specials'>
      <div className='header_Specials'>
          <h2 style={{fontFamily:"karla"}}>Specials</h2>
          <button>Order Online</button>
      </div>
      <div className='Cards_Specials'>
          <Card img={img1} name="greek salad" price="$12.99" details="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." ></Card>
          <Card img={img3} name="Bruchetta" price="$5.99" details="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "></Card>
          <Card img={img2} name="Lemon Dessert" price="$5.00" details="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."></Card>


      </div>
    </div>
  )
}

export default Specials