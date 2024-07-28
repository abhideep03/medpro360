import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../assets/contact.css'

class Contact extends React.Component {
    render() {
      return (
        <>
        <h1 class="contact">Contact Us</h1>
        <div class="contact-flex">
        <div class="contact-container">
          <dl>
          <dt class="contact-dt"><a class="contact-a" href="/"><FaWhatsapp/> 7801002139</a></dt>
          <dt class="contact-dt"><a class="contact-a" href=""><FaXTwitter/> Twitter</a></dt>
          </dl>
          </div>
          <div class="contact-container">
          <dl>
          <dt class="contact-dt"><a class="contact-a" href="/"><FaLinkedin/> LinkedIn</a></dt>
          <dt class="contact-dt"><a class="contact-a" href=""><FaInstagram/> Instagram</a></dt>
          </dl>
          </div>
                  <div class="contact-container">
          <dl>
          <dt class="contact-dt"><a class="contact-a" href="/"><FaWhatsapp/> Whatsapp</a></dt>
          <dt class="contact-dt"><a class="contact-a" href=""><FaInstagram/> Instagram</a></dt>
          </dl>
          </div>
          </div>
        </>
      );
    }
  }
  
  export default Contact;