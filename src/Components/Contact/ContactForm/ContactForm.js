import React, { useRef, useState } from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useTranslation } from "react-i18next";
import Loader from '../../Loader/Loader';

const ContactForm = () => {

    const [isMakingRequest, setIsMakingRequest] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsMakingRequest(true);

        emailjs.sendForm('service_9i33rcg', 'template_s2i72li', form.current, 'user_XahECptLwZO05hjr0ZwRz')
        .then((result) => {
            setIsMakingRequest(false);
            swal("Success", "Your message has been sent!", "success");
      }, (error) => {
            console.log(error.text);
      });
    }

    const {t} = useTranslation();

    const getButtonInfo = () => {
        if (isMakingRequest) {
            return <Loader />
        } else {
            return t('contact.form.button');
        }
    }
  
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
                <button type="submit" className="submit-btn">{getButtonInfo()}</button>
            </div>
        </form>
    );
};

export default ContactForm;