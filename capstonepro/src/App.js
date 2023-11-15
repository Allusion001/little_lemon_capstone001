import { Helmet } from 'react-helmet';
import React, { useReducer, useState } from 'react'
import './App.css';
import HomePage from "./Components/HomePage.js"
import { Route,Routes, useNavigate } from 'react-router-dom'
import BookingPage from "./Components/BookingPage.js"
import { fetchAPI,seededRandom,submitAPI } from './API';
import ConfirmedBooking from './ConfirmedBooking';


function App() {
  let newDate = new Date();
  const availableTimes=fetchAPI(newDate)

   
  //const availableTimes=fetch(x)
   

  const reducer=(state,action)=>{
      
      return(state);
  }
  const navigate=useNavigate();
  const submitHandler=(data)=>{
      localStorage.setItem("Date",JSON.stringify(data[0]));
      localStorage.setItem("Time",JSON.stringify(data[1]));
      localStorage.setItem("Guests",JSON.stringify(data[2]));
      localStorage.setItem("Occasions",JSON.stringify(data[3]));

      if(submitAPI(data)){

           navigate("/confirmation")}
      
      
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
        <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
      </Helmet>

      
      <Routes>
           <Route path="/" element={<HomePage/>}/>
          <Route path="/form" exact element={<BookingPage AvailableTimes={availableTimes} updateTimes={updateTimes} submitHandler={submitHandler}/>}/>
          <Route path="/confirmation" exact element={<ConfirmedBooking/>}/>
      </Routes>


      
     
    </>
  );
}

export default App;
