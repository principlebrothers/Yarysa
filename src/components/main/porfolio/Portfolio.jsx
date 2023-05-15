import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import checklist from '../../../assets/checklist.png';
import { portfolioData } from '../../utils/Utils';

import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={styles.portfolio__container}>
      <div className={styles.top__content}>
        <div className={styles.section__logo}>
          <p>{'</>'}</p>
        </div>
        <div className={styles.section__title}>
          <span className="updaged__secondary__color">BUILT FOR HOSPITALS</span>
          <h2 className="general__font__color">
            Build magical automations for medical billings with Yarysa
            {' '}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam morbi et tellus
            malesuada sed maecenas. Nisl cursus ipsum pretium ultrices at.
            Ullamcorper nibh ridiculus vestibulum aliquet. Suscipit nisl purus
            nunc elementum ultricies. Duis tristique et amet convallis
            fermentum. A sed amet orci vulputate sed blandit dolor pharetra.
          </p>
          <span className="flex align__center gap updaged__secondary__color small__font pointer">
            Check our pricing
            {' '}
            <MdArrowForwardIos className="arrow" />
          </span>
        </div>
      </div>
      <div className={styles.buttom__content}>
        <figure className={styles.left_content}>
          <img src={checklist} alt="portfolio" width="600px" />
        </figure>
        <div className={styles.right_content}>
          <div className={styles.portfolio__data}>
            {portfolioData.map((data) => (
              <div className={styles.portfolio__data__items} key={data.id}>
                <h3 className="updaged__secondary__color">{data.title}</h3>
                <div className={styles.data__item}>
                  <p>{data.details}</p>
                  <span className="padding">
                    <data.icon className="updaged__secondary__color " />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
