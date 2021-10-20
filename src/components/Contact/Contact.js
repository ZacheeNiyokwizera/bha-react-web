import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section class="contact" id="contactForm">
      <div class="contact-wrapper">
        <div class="contact-left"></div>
        <div class="contact-right">
          <h1 class="contact-heading">Contact Us</h1>
          <form>
            <div class="input-group">
              <input type="text" id="myName" class="field" />
              <label class="input-label">Full Name</label>
            </div>
            <div class="input-group">
              <input type="text" id="myPhone" class="field" />
              <label class="input-label">Phone number</label>
            </div>
            <div class="input-group">
              <input type="email" id="myEmail" class="field" />
              <label class="input-label">Email</label>
            </div>
            <div class="input-group">
              <textarea id="myMessage" class="field"></textarea>
              <label class="message">Message</label>
            </div>
            <input type="submit" class="submit-btn" value="Submit" />
            <div class="alertMessage">Your message has been sent !</div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
