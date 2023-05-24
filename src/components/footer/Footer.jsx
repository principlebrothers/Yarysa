import React from 'react';
import { Link } from 'react-router-dom';
import { SiFacebook } from 'react-icons/si';
import { IoLogoTwitter } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr';
import yarysaLogo from '../../assets/yarysaLogo.svg';
import { footerData } from '../utils/Utils';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={`${styles.left}`}>
        <a href="#nav">
          <img src={yarysaLogo} alt="logo" width="225px" height="33px" />
        </a>
        <span> &copy; 2021 Devdex Software Inc</span>
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
