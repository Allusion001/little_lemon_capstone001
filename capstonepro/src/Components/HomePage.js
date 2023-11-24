import React from 'react'
import Header from "./Header.js"
import Hero from "./Hero.js"
import Specials from "./Specials.js"

function HomePage() {
  return (
    <div>
      <Header highlight=""></Header>
      <Hero></Hero>
      <Specials></Specials>
    </div>
  )
}

export default HomePage