import React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../../assets/doctors.svg';
import yarysaLogo from '../../assets/yarysaLogo.svg';
import Union from '../../assets/Union.svg';
import medicalEquipment from '../../assets/medicalEquipment.svg';
import styles from './Login.module.css';

function Login() {
  return (
    <section className={styles.container}>
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
          <h1>Sign In</h1>
          <p>Get access to the Yarysa panel using your username and password</p>
        </div>
        <div className={styles.sign__in__form}>
          <form>
            <input type="email" placeholder="Enter username here" required />
            <input type="password" placeholder="Enter password here" required />
            <input type="submit" value="Sign In" />
          </form>
        </div>
        <span>
          <Link to="*" className="general__font__color underline">
            Download credentials
          </Link>
        </span>
        <div className={styles.terms__conditions}>
          <Link to="*">Terms & Conditions</Link>
          <Link to="*">Privacy Policy</Link>
          <Link to="*">Help</Link>
        </div>
        <div className={styles.allright_reverse}>
          <span>All rights Reserved</span>
          <p>
            &copy;
            {' '}
            <span>Devdex Software</span>
            {' '}
            2021
          </p>
        </div>
      </div>
      <div className={styles.right__side}>
        <div className={styles.right__side__content}>
          <img src={doctors} alt="doctors" width="1175px" height="730px" />
        </div>
      </div>
    </section>
  );
}

export default Login;
