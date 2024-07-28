import React, { Component } from 'react'
import '../assets/patientprofile.css'

class Patientprofile extends Component {
  render() {
    return (
      <div class="profile-flex">
        <div class="profile-container-1">
          <div class="profile-container-1-1">
            {/* <img class="profile" src="" alt="Display picture"/> */}
            <h1 class="heading">Mandapati Abhideep</h1>
          </div>
          <div class="profile-container-1-2">
            <h1 class="heading">Contact:</h1>
            <div class="container2-flex">
            <dl class="hhhh">
              <dt>Email: abhideep.2004.3@gmail.com</dt>
              <dt>Phone number 1: 7801002139</dt>
              <dt>Phone number 2: </dt>
              <dt>Address: Beeramguda, Hyderabad.</dt>
            </dl>
            </div>
          </div>
          <div class="profile-container-1-3">
          <h1 class="heading">Personal Details</h1>
            <dl class="hhhh">
              <dt>Occupation: Student</dt>
              <dt>DOB: 18-02-2004</dt>
              <dt>Age: 19 </dt>
              <dt>Marital status: Single</dt>
              <dt>Blood group: A+</dt>
            </dl>            </div>
        </div>
        <div class="profile-container-2">
          <div class="profile-container-2-2">
            <h1 class="heading">Medical Breif</h1>
            <dl class="hhhh">
              <h3>Allergies:</h3>
              <dt>Drugs Reaction(if any):None</dt>
              <dt>Environment Reaction(if any):None</dt>
              <dt>Adverse Reactions(if any): None</dt>
            <h3>Addictions:</h3>
              Tobacco use: NA<br/>
              Alcohol use: NA<br/>
              Caffeine use(tea/coffee): Yes<br/>
              Other recreational use: NA<br/>
              <h3>Immunization</h3>
              Diptheria: NA<br/>
              Flu: NA<br/>
              HIB: NA<br/>
              Measles: NA<br/>
              Pertussis: NA<br/>
              Polio: NA<br/>
              Rubella: NA<br/>
              Tetanus: NA<br/>
              Covid: Yes<br/>
              Other:<br/>
              </dl>
              </div>
          </div>
      </div>
    )
  }
}

export default Patientprofile;