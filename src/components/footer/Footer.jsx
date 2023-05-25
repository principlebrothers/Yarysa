import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { IoLogoTwitter } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr';
import yarysaLogo from '../../assets/yarysaLogo.svg';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={`${styles.left}`}>
        <a href="#nav">
          <img src={yarysaLogo} alt="logo" width="225" height="33" />
        </a>
        <span> &copy; {new Date().getFullYear()} Devdex Software Inc</span>
        <div className={styles.social}>
          <SiFacebook />
          <IoLogoTwitter />
          <GrInstagram />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
