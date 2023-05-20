import React from 'react';
// import checklist from '../../../assets/checklist.png';
import { portfolioData } from '../../utils/Utils';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={styles.portfolio__container}>
      <div className={styles.top__content}>
        <div className={styles.section__logo}>
          <p>{'</>'}</p>
        </div>
        <section className={styles.section__title}>
          <span className='updaged__secondary__color'>BUILT FOR HOSPITALS</span>
          <h2 className='general__font__color'>
            Build magical automations for medical billings with Yarysa{' '}
          </h2>
          <article className={styles.section__briefing}>
            <p>
              Perfectly engineered for health facilities in emerging markets.
              Maximize revenue collection and minimize manual work with our
              conprehensive billing that addressses your hospital needs.
            </p>
            <ul>
              <li>
                <IoMdCheckmarkCircleOutline className={styles.check__mark} />
                Payment Processing
              </li>
              <li>
                <IoMdCheckmarkCircleOutline className={styles.check__mark} />
                Claims submission
              </li>
              <li>
                {' '}
                <IoMdCheckmarkCircleOutline className={styles.check__mark} />
                Financial Analytics
              </li>
              <li>
                {' '}
                <IoMdCheckmarkCircleOutline className={styles.check__mark} />
                Quickbooks Integration
              </li>
              <li>
                {' '}
                <IoMdCheckmarkCircleOutline className={styles.check__mark} />
                Detailed financial report
              </li>
            </ul>
          </article>
        </section>
      </div>
      <article className={styles.buttom__container}>
        {portfolioData.map((data, index) => (
          <div
            className={`${styles.module__items} ${
              index % 2 === 1 ? styles.reverse__order : ''
            } ${index % 2 === 0 ? styles.background__color : ''} ${
              data.id === 'laboratory' || data.id === 'pharmacy'
                ? styles.reversed__module
                : ''
            }`}
            key={data.id}
          >
            <figure className={styles.module_left}>
              <img
                src={data.image}
                alt='portfolio'
                
              />
            </figure>
            <div className={styles.module__right}>
              <div className={styles.data__item}>
                <span className='padding__right'>
                  <data.icon className='updaged__secondary__color ' />
                </span>
                <h3 className='updaged__secondary__color large__font'>
                  {data.title}
                </h3>
              </div>
              <div className={styles.module__right__details}>
                <p>{data.details}</p>
                <ul>
                  {data.features.map((feature) => (
                    <li key={feature}>
                      <IoCheckmarkCircleSharp className={styles.check__mark} />{' '}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Portfolio;
