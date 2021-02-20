import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <h1>Welcome to Crypto compare React application!</h1>
        <Link
          to='/currencies'
          className={styles.link}
        >Lets encrypt!</Link>
      </div>
    </div>
  );
};

export default Home;