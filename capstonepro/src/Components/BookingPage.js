import React, { useState } from 'react'
import Header from './Header'
import BookingForm from './BookingForm.js'



function BookingPage({AvailableTimes,updateTimes,submitHandler,disCondition}) {
  return (
    <>
    <Header/>
    <BookingForm AvailableTimes={AvailableTimes} updateTimes={updateTimes} submitHandler={submitHandler} disCondition={disCondition}/>
    </>
  )
}

export default BookingPage