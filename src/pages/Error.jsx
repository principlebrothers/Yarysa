import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Error.module.css';

function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <section className={styles.container}>
      <h1>Page Under Construction</h1>
      <h2>Page will be live soon</h2>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </section>
  );
}

export default Error;
