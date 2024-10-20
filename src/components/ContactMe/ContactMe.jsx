import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm';
const ContactMe = () => {
  return (
    <section className="contact-container" id='contact'>
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={"/assets/gmail.svg"}
            text={"dsak.official@gmail.com"}
            link={"mailto:dsak.official@gmail.com"}
          />
          <ContactInfoCard
            iconUrl={"/assets/github.svg"}
            text={"https://github.com/dsak789"}
            link={"https://github.com/dsak789"}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default ContactMe