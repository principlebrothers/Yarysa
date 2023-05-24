import React, { useRef } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import nurse from '../../../assets/nurse.png';
import { aboutData } from '../../utils/Utils';
import 'animate.css'

import styles from './About.module.css';

function About() {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <section className={styles.portfolio__container}>
      <div className={styles.top__content}>
        <div className={styles.section__logo}>
          <p>
            <HiOutlineLightBulb className='updaged__secondary__color medium__font' />
          </p>
        </div>
        <section className={styles.section__title}>
          <span className='updaged__secondary__color'>
            MEDICAL BILLING DEVELOPMENT PLATFORM
          </span>
          <h2 className='general__font__color'>
            Complete Toolkit for patient records and healthcare prescriptions
          </h2>
          <p>
            Experience the Future of Healthcare with Yarysa EMR&apos;s Complete
            Toolkit for Patient Records and Prescriptions - Transform Your
            Practice with Cutting-Edge Technology and Streamlined Workflows.
          </p>
        </section>
      </div>
      <div className={styles.middle__content}>
        <div className={styles.left_content}>
          <img src={nurse} alt='portfolio' height='300px' width='416px' />
        </div>
      </div>
      <div className={styles.buttom__content}>
        <div className={styles.portfolio__data}>
          {aboutData.map((data) => (
            <div className={styles.portfolio__data__items} key={data.id}>
              <h3>{data.title}</h3>
              <div className={styles.data__item}>
                <p>{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className={styles.final__container} id='contact'>
        <h3 className='primary__color large__font'> Contact Us</h3>
        <article className={styles.contact__action__container}>
          <div className={styles.contact__details}>
            <p>
              Phone:
              <a href='tel:+233556624118'> +233556624118</a>
            </p>
            <p>
              Tel:
              <a href='tel:+233556624118'> +233276113371</a>
            </p>
            <p>
              Email:&nbsp;
              <a href='mailto:project@devdexsoftware.com'>
                project@devdexsoftware.com
              </a>
            </p>
          </div>
          <div className={styles.contact__form__container}>
            <p className='primary__color medium__font'>
              Start protecting patients and improve healthcare today
            </p>
            <button
              type='button'
              className={`${styles.btn} flex gap justify__center `}
              data-open-modal
              onClick={handleOpenModal}
            >
              CONTACT US
            </button>
            <dialog
              ref={modalRef}
              className={`${styles.modal__container} animate__animated animate__bounceIn`}
            >
              <section className={styles.modal__header}>
                <h3
                  className={`${styles.form__title} updaged__secondary__color`}
                >
                  Contact Us
                </h3>
                <button
                  type='button'
                  className={styles.close__btn}
                  data-close-modal
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </section>
              <form>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  required
                />
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  required
                />
                <textarea
                  name='message'
                  id='message'
                  placeholder='Enter your message'
                  required
                />
                <div className={styles.form__group}>
                  <button
                    type='submit'
                    className={`${styles.submit__btn} flex gap justify__center `}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </article>
      </section>
    </section>
  );
}

export default About;
