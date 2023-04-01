import React from 'react';
import laptop_image from '../../../assets/laptop_image.png';
import Koreo_png from '../../../assets/Koreo_png.png';
import National_Institutes_Health from '../../../assets/National_Institutes_Health.svg';
import UnitedHealthcare from '../../../assets/UnitedHealthcare.svg';
import Oscar_Health from '../../../assets/Oscar_Health.svg';
import Omada_Health from '../../../assets/Omada_Health.svg';

import styles from './Intro.module.css';

function Intro() {
  return (
    <section className={styles.main}>
      <div className={styles.intro_text}>
        <span className={`small__font secondary__font__color`}>
          Electronic Medical Record
        </span>
        <h1 className={styles.intro__head__text}>
          THE NEW WORLD OF HEALTHCARE DIGITALIZATION{' '}
        </h1>
      </div>
      <div className={styles.sub__container}>
        <div className={styles.left_side}>
          <p>
            Yarysa’s EMR feature is the best in the world for medical records
            and information
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lacinia nec enim nam
            aliquam. Lacus viverra sit adipiscing
          </p>
          <div className={styles.call__to__action}>
            <button className={styles.btn}>GET STARTED</button>
            <div className={`${styles.input__container} flex gap`}>
              <input
                type='checkbox'
                id='checkbox-id'
                name='checkbox-name'
                checked={true}
                readOnly
              />
              <label htmlFor='checkbox-id' className={`tertiary__color`}>
                No credit card required
              </label>
            </div>
          </div>
          <div className={styles.partner__logos}>
            <p>TRUSTED BY TOP DEVELOPERS IN HEALTHCARE</p>
            <div className={styles.partner_logos_container}>
              <img src={Oscar_Health} alt='Oscar_Health' height='35px' />
              <img src={Omada_Health} alt='Omada_Health' height='35px' />
              <img src={UnitedHealthcare} alt='UnitedHealthcare' />
              <img src={Koreo_png} alt='Koreo_png' height='45px' />
              <img
                src={National_Institutes_Health}
                alt='National_Institutes_Health'
              />
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.intro_image}>
            <img src={laptop_image} alt='intro' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;