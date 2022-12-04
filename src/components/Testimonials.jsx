import React from "react";
import "../styles/Testimonials.css";
import image from "../assets/image.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Testimonials = () => {
  const [error, setError] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const form = useRef();
  const transition = { type: "spring", duration: 3 };

  setTimeout(() => {
    setSendMessage(false);
  }, 5000);

  const handleChange = (event) => {
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      event.target.value
    );
    if (!isValidEmail) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!error) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
          },
          process.env.REACT_APP_EMAILJS_PRODUCT_KEY
        )
        .then(
          (result) => {
            setSendMessage(true);
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
          },
          (error) => {
            setSendMessage(false);
          }
        );
    }
  };

  return (
    <div className="Testinomials" id="testinomials">
      <div className="blur contact-blur1"></div>
      <div className="blur contact-blur2"></div>
      <div className="left-t">
        <hr />
        <div className="text">
          <span className="stroke-text">GET</span>
          <span>IN</span>
          <span className="stroke-text">TOUCH</span>
        </div>
        <span>Contact Me</span>
        <div>
          <form
            ref={form}
            className="email-container get-in-touch"
            onSubmit={sendEmail}
          >
            <label>Name *</label>
            <input
              type="name"
              id="user_name"
              placeholder="Name"
              required="required"
              autoComplete="off"
            />
            <label>Email *</label>
            <input
              type="email"
              id="user_email"
              placeholder="Email"
              required="required"
              autoComplete="off"
              onChange={handleChange}
            />
            <label>Message *</label>
            <input
              type="message"
              id="user_message"
              placeholder="Enter your message"
              required="required"
              autoComplete="off"
            />
            {error ? <span>*Please enter a valid email address.</span> : null}
            {sendMessage ? (
              <span className="success">Message sent sucessfully.</span>
            ) : null}
            <button className="btn btn-t">Send</button>
          </form>
        </div>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          src={image}
          transition={transition}
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
