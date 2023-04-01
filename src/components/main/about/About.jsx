import React from 'react';
import nurses from '../../../assets/nurses.png';
import { MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { aboutData } from '../../utils/Utils';

import styles from './About.module.css';

function About() {
  return (
    <section className={styles.portfolio__container}>
      <div className={styles.top__content}>
        <div className={styles.section__logo}>
          <p>
            <HiOutlineLightBulb className='updaged__secondary__color medium__font' />
          </p>
        </div>
        <div className={styles.section__title}>
          <span className={`updaged__secondary__color`}>
            MEDICAL BILLING DEVELOPMENT PLATFORM
          </span>
          <h2 className='general__font__color'>
            The complete Toolkit for patient records and healthcare
            prescriptions
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam morbi et tellus
            malesuada sed maecenas. Nisl cursus ipsum pretium ultrices at.
            Ullamcorper nibh ridiculus vestibulum aliquet. Suscipit nisl purus
            nunc elementum ultricies. Duis tristique et amet convallis
            fermentum. A sed amet orci vulputate sed blandit dolor pharetra.
          </p>
          <span className='flex align__center gap updaged__secondary__color small__font'>
            Check our pricing <MdArrowForwardIos className='arrow' />
          </span>
        </div>
      </div>
      <div className={styles.middle__content}>
        <div className={styles.left_content}>
          <img src={nurses} alt='portfolio' height='300px' width='416px' />
        </div>
      </div>
      <div className={styles.buttom__content}>
        <div className={styles.portfolio__data}>
          {aboutData.map((data) => (
            <div className={styles.portfolio__data__items} key={data.id}>
              <h3>{data.title}</h3>
              <div className={styles.data__item}>
                <p>{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.final__container}>
        <p className='primary__color padding'>
          Start protecting patients and improve healthcare today
        </p>
        <button
          type='button'
          className={`${styles.btn} flex gap justify__center `}
        >
          GET STARTED <IoIosArrowRoundForward className='arrow' />
        </button>
      </div>
    </section>
  );
}

export default About;