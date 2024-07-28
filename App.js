import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Aboutus from "./pages/about";
import Contact from "./pages/contact";
import PatientLayout from "./pages/patientlayout";
import PatientSearch from "./pages/patientsearch";
import Patientprofile from "./pages/patientprofile";
import Patientform from "./pages/patientform";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />        
          <Route path="aboutus" element={<Aboutus />} />        
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Routes>
      <Route index element={<Patientform />}/>
        <Route path="patient" element={<PatientLayout />}>
        <Route path="search" element={<PatientSearch />} />
        <Route path="profile" element={<Patientprofile />} />
        </Route>
      </Routes>
</BrowserRouter>
  );
}
