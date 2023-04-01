import React from 'react';
import { Link } from 'react-router-dom';
import { SiFacebook } from 'react-icons/si';
import { IoLogoTwitter } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr';
import yarysa_logo from '../../assets/yarysa_logo.svg'
import { footerData } from '../utils/Utils';

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={`${styles.left}`}>
        <a href='#nav'>
          <img src={yarysa_logo} alt='logo' width='225px' height='33px' />
        </a>
        <span> &copy; 2021 Devdex Software Inc</span>
        <div className={styles.social}>
          <SiFacebook />
          <IoLogoTwitter />
          <GrInstagram />
        </div>
      </div>
      <div className={`${styles.right}`}>
        {footerData.map((item) => {
          const { id, title, details } = item;
          return (
            <div key={id} className={`${styles.details__cover}`}>
              <Link to={`/${id}`}>{title}</Link>
              <ul>
                {details.map((data, index) => {
                  return <li key={index}>{data.toUpperCase()}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;