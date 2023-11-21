import React, { useRef } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import promoLogo from '../../assets/sign-up-cover.jpeg';
import yarysaLogo from '../../assets/yarysaLogo.svg';
import Union from '../../assets/Union.svg';
import medicalEquipment from '../../assets/medicalEquipment.svg';
import styles from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const promoForm = useRef();

  const submitPromoForm = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_YARYSA_SERVICE_ID;
    const templateID = import.meta.env.VITE_YARYSA_ONBORDING_TEMPLATE_ID;
    const userID = import.meta.env.VITE_YARYSA_USER_ID;

    emailjs.sendForm(serviceID, templateID, promoForm.current, userID).then(
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
    <section className={styles.container}>
      <div className={styles.back__btn}>
        <a href="/">
          <RiArrowGoBackFill />
        </a>
      </div>
      <div className={styles.left__side}>
        <img src={Union} alt="Union" className={styles.union} />
        <div className={styles.sign__in__info}>
          <div className={styles.logo__container}>
            <img src={yarysaLogo} alt="yarysaLogo" />
          </div>
          <img
            src={medicalEquipment}
            alt="medicalEquipment"
            className={styles.equipment}
            width="504px"
            height="511px"
          />
          <h1>Onboard Hospital</h1>
          <p>Experience the Difference with a Free 3-Month Trial</p>
        </div>
        <div className={styles.sign__in__form}>
          <form ref={promoForm} onSubmit={submitPromoForm}>
            <input
              type="text"
              name="hospital_name"
              placeholder="Enter hospital name"
              required
            />
            <input
              type="text"
              name="contact_person_name"
              placeholder="Enter contact fullname "
              required
            />
            <input
              type="email"
              name="contact_person_email"
              placeholder="Enter contact email"
              required
            />
            <input
              type="number"
              name="contact_person_phone"
              placeholder="Enter contact phone number"
              required
            />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
        <div className={styles.allright_reverse}>
          <span>All rights Reserved</span>
          <p>
            &copy;
            {' '}
            <span>Devdex Software</span>
            {' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <div className={styles.right__side}>
        <div className={styles.right__side__content}>
          <img src={promoLogo} alt="Promo-flyer" />
        </div>
      </div>
    </section>
  );
}

export default Login;
