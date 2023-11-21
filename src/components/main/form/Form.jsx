/* eslint react/prop-types: 0 */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'animate.css';
import styles from './Form.module.css';

function Form({ handleCloseModal, modalRef }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_YARYSA_SERVICE_ID;
    const templateID = import.meta.env.VITE_YARYSA_MSG_TEMPLATE_ID;
    const userID = import.meta.env.VITE_YARYSA_USER_ID;

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      () => {
        toast.success('Message sent successfully', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        e.target.reset();
      },
      () => {
        toast.error('Message not sent', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      },
    );
  };

  return (
    <>
      <dialog
        ref={modalRef}
        className={`${styles.modal__container} animate__animated animate__bounceIn`}
      >
        <section className={styles.modal__header}>
          <h3 className={`${styles.form__title} updaged__secondary__color`}>
            Contact Us
          </h3>
          <button
            type="button"
            className={styles.close__btn}
            data-close-modal
            onClick={handleCloseModal}
          >
            &times;
          </button>
        </section>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
          <div className={styles.form__group}>
            <button
              type="submit"
              className={`${styles.submit__btn} flex gap justify__center `}
            >
              Send Message
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Form;
