import React, { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import IntroImage from '../../../assets/IntroImage.png';
import britannia from '../../../assets/britannia.png';
import namaata from '../../../assets/namaata.png';
import logo from '../../../assets/logo.png';
import westside from '../../../assets/westside.png';
import westview from '../../../assets/westview.png';
import empatlogo from '../../../assets/empatlogo.png';
import Form from '../form/Form';

import styles from './Intro.module.css';

function Intro() {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <section className={styles.main}>
      <div className={styles.intro_text}>
        <span className="small__font secondary__font__color">
          <Fade delay={1e3} cascade damping={1e-1}>
            Yarysa Electronic Medical Record
          </Fade>
        </span>
        <h1 className={styles.intro__head__text}>
          THE NEW WORLD OF HEALTHCARE DIGITALIZATION
          {' '}
        </h1>
      </div>
      <div className={styles.sub__container}>
        <div className={styles.left_side}>
          <p>
            Yarysa EMR&apos;s is building a robust and efficient operating
            system for medical facilities and patients. We are using blockchain
            technology to accelerate the transistion of the health sector to a
            digitalize system.
          </p>
          <div className={styles.call__to__action}>
            <button
              type="button"
              className={styles.btn}
              onClick={handleOpenModal}
            >
              REQUEST DEMO
            </button>
          </div>
          <Form modalRef={modalRef} handleCloseModal={handleCloseModal} />
          <div className={styles.partner__logos}>
            <p>TRUSTED BY TOP FACILITIES IN HEALTHCARE</p>
            <figure className={styles.partner_logos_container}>
              <img src={britannia} alt="britania" height="70px" />
              <img src={westview} alt="westview" height="70px" />
              <img src={westside} alt="westside" height="60px" />
              <img src={logo} alt="logo" height="60px" />
              <img src={empatlogo} alt="empatcaiquo" height="70px" />
              <img src={namaata} alt="namaata" height="70px" />
            </figure>
          </div>
        </div>
        <section className={styles.right__side}>
          <figure className={styles.intro_image}>
            <img src={IntroImage} alt="Dasboard" width="631" height="623" />
          </figure>
        </section>
      </div>
    </section>
  );
}

export default Intro;
