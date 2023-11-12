import React, { useState } from 'react'
import Header from './Header'
import BookingForm from './BookingForm.js'



function BookingPage({AvailableTimes,updateTimes}) {
  return (
    <>
    <Header/>
    <BookingForm AvailableTimes={AvailableTimes} updateTimes={updateTimes}/>
    </>
  )
}

export default BookingPage