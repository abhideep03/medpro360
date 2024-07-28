import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import '../assets/patientlayout.css'
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png';
import { FaWpforms } from "react-icons/fa";

class PatientLayout extends Component {
  render() {

    return (<>
  <a href=""><img class="sidenav" src={logo} alt="logo"/></a>
  <div class="sidenav">
  <button class="sidenav-div">
    <Link to="/patient/search">Search<AiOutlineSearch /> </Link>
  </button>
  <button class="sidenav-div">
    <Link to="/patient">Form<FaWpforms /></Link>
  </button>
  <button class="sidenav-div">
    <Link to="/patient/profile">Profile<CgProfile /></Link>
  </button>
</div>

<Outlet/>
</> )
  }
}

export default PatientLayout;