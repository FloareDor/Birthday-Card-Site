import React from 'react';
import styles from '../styles/birthday-card.module.css';
const BirthdayCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.outside}>
        <div className={styles.front}>
          <p>Happy Birthday Lorem!</p>
          <div className={styles.cake}>
            <div className={styles.topLayer}></div>
            <div className={styles.middleLayer}></div>
            <div className={styles.bottomLayer}></div>
            <div className={styles.candle}></div>
          </div>
        </div>
        <div className={styles.back}></div>
      </div>
      <div className={styles.inside}>
        <p>
          Happy birthday, Lorem!
        </p>
        <h1>🎂</h1>
      </div>
    </div>
  );
};

export default BirthdayCard;