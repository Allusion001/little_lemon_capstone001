import { Helmet } from 'react-helmet';
import React, { useReducer, useState } from 'react'
import './App.css';
import HomePage from "./Components/HomePage.js"
import { Route,Routes } from 'react-router-dom'
import BookingPage from "./Components/BookingPage.js"

function App() {

  const availableTimes=["17:00",'18:00','19:00','20:00','21:00','22:00'];


  const reducer=(state,action)=>{
      return(state);
  }

  const updateTimes=()=>{
      dispatch({type:"testing"});
  }

  const [state,dispatch]=useReducer(reducer,availableTimes);
  

  return (
    <>
      <Helmet>
        <title>Little Lemon.</title>
        <meta name="description" content="Little Lemon Restaturant .Restaurant for the loved ones."/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:image" content="./greek_salad.jpg"/>
      </Helmet>

      
      <Routes>
           <Route path="/" element={<HomePage/>}/>
          <Route path="/form" exact element={<BookingPage AvailableTimes={availableTimes} updateTimes={updateTimes}/>}/>
      </Routes>


      
     
    </>
  );
}

export default App;
