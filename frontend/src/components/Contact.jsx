import React from "react";
import Hero from "./Hero.jsx";
import { BsHeartPulseFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Map from "./Map.jsx";
import "../Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Contact() {
  return (
    <div>
      <Hero
        title="Elérhetőségek"
        body="Lépjünk kapcsolatba!"
        icon={<IoIosContact className="hero-icon" />}
        showButton={true}
        buttonText="Hívj fel!"
        href="tel:+36703143697"
      />
      <div className="contact-container-outer">
        <div className="contact-container-inner">
          <div className="map cont">
            <Map />
          </div>
          <div className="contact cont">
            <span className="contact-label">Kontakt</span>
            <div className="credential">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="text">
                <a href="tel:+36703143697">+36 70 314 3697</a>
              </div>
            </div>
            <div className="credential">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="text">example@example.com</div>
            </div>
            <div className="credential">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="text">Bartos Brigitta</div>
            </div>
            <div className="credential">
              <div className="icon">
                <IoLocation />
              </div>
              <div className="text">2600 Vác, Nárcisz köz 5/a</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
