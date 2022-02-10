import React, { useRef } from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const ContactForm = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9i33rcg', 'template_s2i72li', form.current, 'user_XahECptLwZO05hjr0ZwRz')
      .then((result) => {
          console.log(result.text);
          swal("Success", "Your message has been sent!", "success");
      }, (error) => {
          console.log(error.text);
      });
    }
  
    return (
        <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact-form bg-dark"
        >
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="name">Name</label>
                <input type="text" className="form-input " placeholder="Your name" name="from_name" required />
            </div>
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="email">Email</label>
                <input type="email" className="form-input" placeholder="Email" name="email" required />
            </div>
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="message">Message</label>
                <textarea placeholder="Your message" className="form-input" name="message" required />
            </div>
            <div className="bg-dark">
                <button type="submit" className="submit-btn"> Send a message </button>
            </div>
        </form>
    );
};

export default ContactForm;