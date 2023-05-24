import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import yarysaLogo from '../../assets/yarysaLogo.svg';
import { navLinks } from '../utils/Utils';

import 'animate.css';
import styles from './Navbar.module.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleLinksDisplay = () => {
    setIsActive(!isActive);
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
          <img src={yarysaLogo} alt='logo' width='225' height='33' />
        </figure>
        <div className={`${styles.nav__links}`}>
          {navLinks.map((link) =>
            link.id === 'about' ? (
              <a
                href={link.path}
                key={link.id}
                className={styles.nav__font}
                target='_blank'
              >
                {link.page}
              </a>
            ) : (
              <a href={link.path} key={link.id} className={styles.nav__font}>
                {link.page}
              </a>
            )
          )}
        </div>
        <div className={`${styles.nav__action__container} `}>
          <Link to='/login' className={`${styles.nav__font}`}>
            LOG IN
          </Link>
          <button type='button'>REQUEST DEMO</button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
