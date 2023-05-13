import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

import styles from './Blog.module.css';

function Blog() {
  return (
    <section className={styles.blog__container}>
      <div className={styles.blog__content}>
        <div className={styles.blog__briefing__container}>
          <div className={styles.blog__briefing__left}>
            <h3 className='primary__color'>CASE STUDY</h3>
            <p className='primary__color'>
              Yarysa EMR has a very user-friendly template and flow that is easy
              for most to use including those who are novices or people
              unfamiliar with electronic medical records in general.
            </p>
            <span>
              <Link
                to='/blog'
                className='flex align__center gap primary__color'
              >
                read blog post <MdArrowForwardIos className='arrow' />
              </Link>
            </span>
          </div>
          <div className={styles.blog__briefing__right}>
            <p className='primary__color'>
              The following video show Dr. Biney at Britannia Medical Center
              sharing his experience after using the yarysa EMR system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
