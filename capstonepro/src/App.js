import Header from "./Components/Header.js"
import Hero from "./Components/Hero.js"
import Footer from "./Components/Footer.js"
import Specials from "./Components/Specials.js"
import CustomersSay from "./Components/CustomersSay.js"
import { Helmet } from 'react-helmet';
import './App.css';
import Chicago from "./Components/Chicago.js"
import { Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon.</title>
        <meta name="description" content="Little Lemon Restaturant .Restaurant for the loved ones."/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:image" content="./greek_salad.jpg"/>
      </Helmet>

     
      <Routes>
          <Route path="/c" element={<Chicago/>}/>
      </Routes>


      <Header></Header>
      <Hero></Hero>
      <Specials></Specials>
      <CustomersSay></CustomersSay>
      <Chicago></Chicago>
      <Footer></Footer>
    </>
  );
}

export default App;
