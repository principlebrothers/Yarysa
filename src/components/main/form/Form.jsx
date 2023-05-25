import React from 'react';

import 'animate.css';
import styles from './Form.module.css';

function Form({ handleCloseModal, modalRef }) {

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
    </>
  );
}

export default Form;
