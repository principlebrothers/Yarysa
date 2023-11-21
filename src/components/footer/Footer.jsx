import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { IoLogoTwitter } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';
import yarysaLogo from '../../assets/yarysaLogo.svg';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={`${styles.left}`}>
        <a href="#nav">
          <img src={yarysaLogo} alt="logo" width="225" height="33" />
        </a>
        <span>
          {' '}
          &copy;
          {new Date().getFullYear()}
          {' '}
          Devdex Software Inc
        </span>
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/yarysaemr"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <SiFacebook />
          </a>
          <a
            href="https://twitter.com/YarysaEMR"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://www.instagram.com/yarysaemr"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yarysa-emr-1b84a8208"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
