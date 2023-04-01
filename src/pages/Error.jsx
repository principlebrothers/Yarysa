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
      <h1>404</h1>
      <h2>Page not found</h2>
      <button onClick={handleClick}>Go back</button>

    </section>
  )
}

export default Error;