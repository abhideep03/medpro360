import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import '../assets/patientlayout.css'
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { CiTimer } from "react-icons/ci";
import logo from '../assets/logo.png';
import { FaHome } from "react-icons/fa";
import '../assets/doctorlayout.css'

class DoctorLayout extends React.Component {
    render() {
      return (<>
  <Link src="/"><img class="sidenav" src={logo} alt="logo"/></Link>
  <div class="sidenav">
  <button class="sidenav-div">
    <Link to="/doctor/messages">Messages<FiMessageSquare /></Link>
  </button>
  <button class="sidenav-div">
    <Link to="/doctor/appointments">Appointments<CiTimer /></Link>
  </button>
  <button class="sidenav-div">
    <Link to="/doctor/profile">Profile<CgProfile /></Link>
  </button>
</div>
<Outlet/> 
      </>);
    }
  }
  
  export default DoctorLayout;