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
            <h3 className="primary__color">CASE STUDY</h3>
            <p className="primary__color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut ultricies tincidunt, nisl nisl aliquam nisl,
              ut
            </p>
            <span>
              <Link
                to="/blog"
                className="flex align__center gap primary__color"
              >
                read blog post
                {' '}
                <MdArrowForwardIos className="arrow" />
              </Link>
            </span>
          </div>
          <div className={styles.blog__briefing__right}>
            <p className="primary__color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut ultricies tincidunt, nisl nisl aliquam nisl,
              ut
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
