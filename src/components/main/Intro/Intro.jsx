import React from 'react';
import KoreoPng from '../../../assets/KoreoPng.png';
import NationalInstitutesHealth from '../../../assets/NationalInstitutesHealth.svg';
import UnitedHealthcare from '../../../assets/UnitedHealthcare.svg';
import OscarHealth from '../../../assets/OscarHealth.svg';
import OmadaHealth from '../../../assets/OmadaHealth.svg';
import IntroImage from '../../../assets/IntroImage.png';
import { Fade } from 'react-awesome-reveal';

import styles from './Intro.module.css';

function Intro() {
  return (
    <section className={styles.main}>
      <div className={styles.intro_text}>
        <span className='small__font secondary__font__color'>
          <Fade delay={1e3} cascade damping={1e-1}>
            Yarysa Electronic Medical Record
          </Fade>
        </span>
        <h1 className={styles.intro__head__text}>
          THE NEW WORLD OF HEALTHCARE DIGITALIZATION{' '}
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
            <button type='button' className={styles.btn}>
              REQUEST DEMO
            </button>
          </div>
          <div className={styles.partner__logos}>
            <p>TRUSTED BY TOP FACILITIES IN HEALTHCARE</p>
            <figure className={styles.partner_logos_container}>
              <img src={OscarHealth} alt='OscarHealth' height='35px' />
              <img src={OmadaHealth} alt='OmadaHealth' height='35px' />
              <img src={KoreoPng} alt='KoreoPng' height='45px' />
              <img src={UnitedHealthcare} alt='UnitedHealthcare' />
              <img
                src={NationalInstitutesHealth}
                alt='NationalInstitutesHealth'
              />
            </figure>
          </div>
        </div>
        <section className={styles.right__side}>
          <figure className={styles.intro_image}>
            <img src={IntroImage} alt='Dasboard' width='631' height='623' />
          </figure>
        </section>
      </div>
    </section>
  );
}

export default Intro;
