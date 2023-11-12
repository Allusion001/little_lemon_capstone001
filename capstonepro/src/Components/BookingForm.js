import React, { useState } from 'react'
import "./BookingForm.css";
import logo from "../Logo .svg"

function BookingForm({AvailableTimes,updateTimes}) {

  const AvailableTime=AvailableTimes;

  const [inputDate,setInputDate]=useState('01/01/2023');
  const [inputTime,setInputTime]=useState('17:00');
  const [inputGuests,setInputGuests]=useState(1);
  const [inputOccasion,setInputOccasion]=useState("Birthday");

  const handleDateChange=e=>{
      setInputDate(e.target.value)
      updateTimes({type:"testing"});
  }

  const handleTimeChange=e=>{
      setInputTime(e.target.value)
  }

  const handleGuestsChange=e=>{
      setInputGuests(e.target.value)
  }

  const handleOccasionChange=e=>{
    setInputOccasion(e.target.value)
  }

  return (
    <div className="BookingForm">
        <form className='form' style={{display:'flex', maxWidth:'500px',gap:'20px'}}>
             <img src={logo} height="60px" width="200px"/>
             <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={inputDate} onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={inputTime} onChange={handleTimeChange}>
                {AvailableTime.map(opt=>{return(<option >{opt}</option>)})}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={inputGuests} onChange={handleGuestsChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={inputOccasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </div>
  )
}

export default BookingForm