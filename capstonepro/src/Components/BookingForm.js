import React, { useState } from 'react'
import "./BookingForm.css";
import logo from "../Logo .svg"
import { submitAPI } from '../API';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

function BookingForm({AvailableTimes,updateTimes,submitHandler,disCondition}) {
  const [inputDate,setInputDate]=useState('01/01/2023');
  const [inputTime,setInputTime]=useState('17:00');
  const [inputGuests,setInputGuests]=useState(1);
  const [inputOccasion,setInputOccasion]=useState("Birthday");

  const handleDateChange=e=>{
      setInputDate(e.target.value)
      updateTimes({type:"testing"});
      console.log(e.target.value)
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

  const submissionHandler=(e)=>{
        e.preventDefault();
        submitHandler([inputDate,inputTime,inputGuests,inputOccasion]);
  }

  

  return (

    <div className="BookingForm">
        <Formik initialValues={{date:"",guests:0,tee:""}} 
                
                
                validationSchema={Yup.object({
                    date:Yup.string().required("req"),
                    guests:Yup.number().required("Enter guests"),
                    tee:Yup.string().required("Required")
                })}
                
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }} >
            {({isValid, dirty ,props}) => ( 
            <Form className='form' onSubmit={submissionHandler} style={{display:'flex', maxWidth:'500px',gap:'20px'}}>
                <img src={logo} height="60px" width="200px"/>
                <label htmlFor="res-date">Choose date</label>
                <Field type="date" name="datee" id="res-date" value={inputDate} onChange={handleDateChange}/>
                <ErrorMessage name="datee"/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={inputTime} onChange={handleTimeChange}>
                    {AvailableTimes && AvailableTimes['afternoon'].map(option1=><option key={option1}>{option1}</option>)}
                    {AvailableTimes && AvailableTimes['evening'].map(option1=><option key={option1}>{option1}</option>)}
                    {AvailableTimes && AvailableTimes['morning'].map(option1=><option key={option1}>{option1}</option>)}
        
        
                </select>
                <label htmlFor="guests">Number of guests</label>
                <Field type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={inputGuests} onChange={handleGuestsChange}/>
                <ErrorMessage name="guests"/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={inputOccasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <label htmlFor="tee">inside/Outside</label>
                <Field name="tee" type="text"/>
                <ErrorMessage name="tee"/>
                <input type="submit" disabled={ !dirty} value="Make Your reservation" />
            </Form>)}

        </Formik>
    </div>
  )
}

export default BookingForm