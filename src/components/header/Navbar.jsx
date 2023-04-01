import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import yarysa_logo from '../../assets/yarysa_logo.svg';
import { navLinks } from '../utils/Utils';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './Navbar.module.css';


function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinksDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      {width < 1024 ? (
        <AiOutlineMenu
          className={`${styles.nav__menu}`}
          onClick={handleLinksDisplay}
        />
      ) : (
          ''
      )}
        <section
          id='nav'
          className={`${styles.nav} ${isActive ? styles.active : ''}`}
        >
          <div className='logo__container'>
            <img src={yarysa_logo} alt='logo' width='225' height='33' />
          </div>
          <div
            className={`${styles.nav__links}`}
          >
            {navLinks.map((link) => (
              <Link to={link.path} key={link.id} className={styles.nav__font}>
                {link.page}
              </Link>
            ))}
          </div>
          <div
            className={`${styles.nav__action__container} `}
          >
            <Link to='/login' className={`${styles.nav__font}`}>
              LOG IN
            </Link>
            <button type='button'>GET STARTED</button>
          </div>
        </section>
    </nav>
  );
}

export default Navbar;