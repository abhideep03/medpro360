import React, { Component } from 'react'
import '../assets/patientform.css'

import { useState } from 'react';
function PatientForm() {
  const [form,setForm]=useState({});
  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'radio' ? (checked ? 'Yes' : 'No') : value;
    setForm({
      ...form,
      [name]: updatedValue,
    });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:8080/patientform",{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const result =await response.json();
    console.log(result)
  }
  return (<>
    <div className="PatientForm">
        <form onSubmit={handleSubmit}>
        <div class="form-flex">
        <div class="form-container2">
        <h1 class="patient-form">Basic Details</h1>
          First Name: <br/><input type='text' name="FirstName" required onChange={handleForm}/><br/><br/>
          Last Name: <br/><input type='text'  name="SecondName"required onChange={handleForm}/><br/><br/>
          Email: <br/><input type='email' name="Email"required onChange={handleForm}/><br/><br/>
          Phone Number: <br/><input type="text" name="Mobilenumber"required onChange={handleForm}/><br/><br/>

          </div>
          <div class="form-container2">
          <h1 class="patient-form">Personal Details #1</h1>

          Occupation: <br/><input type="text" name="Occupation" required onChange={handleForm}/><br/><br/>
          Marital status: <br/>
        <input type='radio' id="single" name="Married" onChange={handleForm}/>
        <label for="single">Single</label>
        <input type='radio' id="married" name="Married" onChange={handleForm}/>
        <label for="married">Married</label><br/><br/>
          Address: <br/><input type="text" name="Address" required onChange={handleForm}></input><br/><br/>

          </div>
        <div class="form-container2">
        <h1 class="patient-form">Personal Details #2</h1>

        Gender: <br/>
        <input type='radio' id="male" name="Gender" onChange={handleForm}/>
        <label for="male">Male</label>
        <input type='radio' id="female" name="Gender" onChange={handleForm}/>
        <label for="female">Female</label>
        <input type='radio' id="others" name="Gender" onChange={handleForm}/>
        <label for="others">Others</label><br/><br/>
        Age: <input type="number" name="Age" required onChange={handleForm}/><br/><br/>
        Blood Group:
        <select required name="BloodGroup" onChange={handleForm} >
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        </select><br/><br/>
        Weight: <br/><input type='number' name="Weight" required onChange={handleForm}/>kgs<br/><br/>
        Height: <br/><input type='number' name="Height" required onChange={handleForm}/>cms<br/><br/>

        </div>
        </div>
  
        <div class="form-flex">
          <div class="form-container3">
          <h1 class="patient-form">Medical Details #1</h1>

              <dl>
              <h3>Allergies:</h3>
              <dt>Drugs Reaction(if any):<br/> <input type="text" name="DrugAllergy" required onChange={handleForm}></input></dt>
              </dl>
              <h3>Addictions:</h3>
              Tobacco use:<br/>
              <input type="radio"  name="Tobacco" onChange={handleForm}/>Yes
              <input type="radio" name="Tobacco" onChange={handleForm}/>No<br/><br/>
              Alcohol use:<br/>
              <input type="radio" name="Alcohol" onChange={handleForm}/>Yes
              <input type="radio" name="Alcohol" onChange={handleForm}/>No<br/><br/>
              Caffeine use(tea/coffee):<br/>
              <input type="radio"  name="Caffeine" onChange={handleForm}/>Yes
              <input type="radio" name="Caffeine" onChange={handleForm}/>No<br/><br/>
              Other recreational use:<br/><input/>

          </div>
          <div class="form-container3">
          <h1 class="patient-form">Medical Details #2</h1>

              <h3>Immunization</h3>
              Diptheria:
              <input type="radio" name="Diptheria" onChange={handleForm}/>Yes
              <input type="radio" name="Diptheria" onChange={handleForm}/>No<br/><br/>
              Flu:
              <input type="radio" name="Flu" onChange={handleForm}/>Yes
              <input type="radio" name="Flu" onChange={handleForm}/>No<br/><br/>
              HIB:
              <input type="radio" name="HIB" onChange={handleForm}/>Yes
              <input type="radio" name="HIB" onChange={handleForm}/>No<br/><br/>
              Measles:
              <input type="radio" name="Measles" onChange={handleForm}/>Yes
              <input type="radio" name="Measles" onChange={handleForm}/>No<br/><br/>
              Pertussis:
              <input type="radio" name="Pertussis" onChange={handleForm}/>Yes
              <input type="radio" name="Pertussis" onChange={handleForm}/>No<br/><br/>
              Polio:
              <input type="radio" name="Polio" onChange={handleForm}/>Yes
              <input type="radio" name="Polio" onChange={handleForm}/>No<br/><br/>
              Rubella:
              <input type="radio" name="Rubella" onChange={handleForm}/>Yes
              <input type="radio" name="Rubella" onChange={handleForm}/>No<br/><br/>
              Tetanus:
              <input type="radio" name="Tetanus" onChange={handleForm}/>Yes
              <input type="radio" name="Tetanus" onChange={handleForm}/>No<br/><br/>
              Covid:
              <input type="radio" name="Covid" onChange={handleForm}/>Yes
              <input type="radio" name="Covid" onChange={handleForm}/>No<br/><br/>
              Other:<br/><input type="text" name="Other" onChange={handleForm}/>

          </div>
          <div class="form-container3">
          <h1 class="patient-form">Medical Details #3</h1>

              <h3>Select all that apply:</h3>
              Diabetic:
              <input type="radio" name="Diabetic" onChange={handleForm}/>Yes
              <input type="radio" name="Diabetic" onChange={handleForm}/>No<br/><br/>
              Blood Pressure:
              <input type="radio" name="BP" onChange={handleForm}/>Yes
              <input type="radio" name="BP" onChange={handleForm}/>No<br/><br/>
              Arthritis:
              <input type="radio" name="Arthritis" onChange={handleForm}/>Yes
              <input type="radio" name="Arthritis" onChange={handleForm}/>No<br/><br/>
              Epilepsy:
              <input type="radio" name="Epilepsy" onChange={handleForm}/>Yes
              <input type="radio" name="Epilepsy" onChange={handleForm}/>No<br/><br/>
              Heart attack:
              <input type="radio" name="heartattack" onChange={handleForm}/>Yes
              <input type="radio" name="heartattack" onChange={handleForm}/>No<br/><br/>
              Hyper tension:
              <input type="radio" name="hypertension" onChange={handleForm}/>Yes
              <input type="radio" name="hypertension" onChange={handleForm}/>No<br/><br/>
              Kidney disease:
              <input type="radio" name="kidneydisease" onChange={handleForm}/>Yes
              <input type="radio" name="kidneydisease" onChange={handleForm}/>No<br/><br/>
              Migrane:
              <input type="radio" name="migrane" onChange={handleForm}/>Yes
              <input type="radio" name="migrane" onChange={handleForm}/>No<br/><br/>
              Tuberculosis:
              <input type="radio" name="Tuberculosis" onChange={handleForm}/>Yes
              <input type="radio" name="Tuberculosis" onChange={handleForm}/>No<br/><br/>
              Other:<br/><input type="text" name="OtherDisease" onChange={handleForm}/><br/><br/>
          </div>
        </div>
        <input class="patient-form" type="submit"/>
        </form>
    </div>
    </>
  );
}
export default PatientForm;