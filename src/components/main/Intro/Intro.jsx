import React from 'react';
import laptopImage from '../../../assets/laptopImage.png';
import KoreoPng from '../../../assets/KoreoPng.png';
import NationalInstitutesHealth from '../../../assets/NationalInstitutesHealth.svg';
import UnitedHealthcare from '../../../assets/UnitedHealthcare.svg';
import OscarHealth from '../../../assets/OscarHealth.svg';
import OmadaHealth from '../../../assets/OmadaHealth.svg';

import styles from './Intro.module.css';

function Intro() {
  return (
    <section className={styles.main}>
      <div className={styles.intro_text}>
        <span className="small__font secondary__font__color">
          Electronic Medical Record
        </span>
        <h1 className={styles.intro__head__text}>
          THE NEW WORLD OF HEALTHCARE DIGITALIZATION
          {' '}
        </h1>
      </div>
      <div className={styles.sub__container}>
        <div className={styles.left_side}>
          <p>
            Improve health care efficiency with the world’s first block-chain
            system YARYSA EMR&apos;s.
          </p>
          <p>
            Yarysa Electronic Medical Record(EMR), is a digital version of a
            patient&apos;s medical history that is stored in a computer system
            and cloud base. It stores a comprehensive collection of a
            patient&apos;s health information, including medical and surgical
            history, medications, allergies, immunizations, laboratory test
            results, and radiology images. YARYSA EMR is used by healthcare
            providers to track patient care, to communicate with other providers
            involved in a patient&apos;s care, and to make informed decisions
            about diagnosis and treatment.
          </p>
          <div className={styles.call__to__action}>
            <button type="button" className={styles.btn}>
              GET STARTED
            </button>
            <div className={`${styles.input__container} flex gap`}>
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <input
                type="checkbox"
                id="checkbox-id"
                name="checkbox-name"
                checked
                readOnly
              />
              <label htmlFor="checkbox-id" className="tertiary__color">
                No credit card required
              </label>
            </div>
          </div>
          <div className={styles.partner__logos}>
            <p>TRUSTED BY TOP DEVELOPERS IN HEALTHCARE</p>
            <div className={styles.partner_logos_container}>
              <img src={OscarHealth} alt="OscarHealth" height="35px" />
              <img src={OmadaHealth} alt="OmadaHealth" height="35px" />
              <img src={UnitedHealthcare} alt="UnitedHealthcare" />
              <img src={KoreoPng} alt="KoreoPng" height="45px" />
              <img
                src={NationalInstitutesHealth}
                alt="NationalInstitutesHealth"
              />
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.intro_image}>
            <img src={laptopImage} alt="intro" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
