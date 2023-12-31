import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const form = useRef(); 

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_0xasanq', 'template_9wmizz6', form.current, 'RiUmQ5fRcKA56W0Ar')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
           
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset(); 

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" placeholder="Name" name="user_name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder = "Email" name="user_email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder = "Phone Number" name="user_PhoneNumber" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message" ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}