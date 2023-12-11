import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import yarysaLogo from '../../assets/yarysaLogo.svg';
import { navLinks } from '../utils/Utils';
import Form from '../main/form/Form';

import 'animate.css';
import styles from './Navbar.module.css';

function Navbar() {
  const modalRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleLinksDisplay = () => {
    setIsActive(!isActive);
  };

  const handleOpenModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <nav>
      <div className={styles.mobile__menu}>
        <figure className={styles.logo__container}>
          <img src={yarysaLogo} alt='logo' width='225' height='33' />
        </figure>
        <AiOutlineMenu
          className={`${styles.nav__menu}`}
          onClick={handleLinksDisplay}
        />
      </div>
      <section
        id='nav'
        className={`${styles.nav} ${isActive ? styles.active : ''}`}
      >
        <figure
          className={`${styles.desktop__logo__container} animate__animated animate__shakeY`}
        >
          <img src={yarysaLogo} alt='logo' width='170' height='33' />
        </figure>
        <div className={`${styles.nav__links}`}>
          {navLinks.map((link) =>
            link.id === 'about' ? (
              <a
                href={link.path}
                key={link.id}
                className={styles.nav__font}
                target='_blank'
                rel='noreferrer'
              >
                {link.page}
              </a>
            ) : link.id === 'onboard_hospital' ? (
              <Link to={link.path} key={link.id} className={styles.nav__font}>
                {link.page}
              </Link>
            ) : (
              <a href={link.path} key={link.id} className={styles.nav__font}>
                {link.page}
              </a>
            )
          )}
        </div>
        <div className={`${styles.nav__action__container} `}>
          <Link
            to='https://demo.yarysa.com/users/sign_in'
            target='_blank'
            className={`${styles.nav__font}`}
          >
            LOG IN
          </Link>
          <button
            type='button'
            className={styles.nav_btn}
            onClick={handleOpenModal}
          >
            REQUEST DEMO
          </button>
          <Form handleCloseModal={handleCloseModal} modalRef={modalRef} />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
