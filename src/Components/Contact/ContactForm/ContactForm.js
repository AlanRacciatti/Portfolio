import React, { useRef } from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useTranslation } from "react-i18next";

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

    const {t} = useTranslation();
  
    return (
        <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact-form bg-dark"
        >
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="name">{t('contact.form.name.label')}</label>
                <input type="text" className="form-input " placeholder={t('contact.form.name.placeholder')} name="from_name" required />
            </div>
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="email">{t('contact.form.email.label')}</label>
                <input type="email" className="form-input" placeholder={t('contact.form.email.placeholder')} name="email" required />
            </div>
            <div className="bg-dark">
                <label className="bg-dark form-label" htmlFor="message">{t('contact.form.message.label')}</label>
                <textarea placeholder={t('contact.form.message.placeholder')} className="form-input" name="message" required />
            </div>
            <div className="bg-dark">
                <button type="submit" className="submit-btn">{t('contact.form.button')}</button>
            </div>
        </form>
    );
};

export default ContactForm;