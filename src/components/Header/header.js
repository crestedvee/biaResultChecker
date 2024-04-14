import React from 'react';
import styles from './header.module.css';
import Menu from '../Menu/menu';
import BIAlogo from '../images/BIAlogo.jpeg';

function Header() {
  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.logo}>
          <img src={BIAlogo} alt='login' className={styles.logoImg}/>
          <p>BIA</p>
        </div>
        <div className={styles.heading}>
          <div>
            <h3>Brisk International Academy</h3>
          </div>
          <div>
            <h4>Morals, Integrity for Academic
              Excellence</h4>
          </div>
        </div>
        <div className={styles.button}>
          <h3>You okay</h3>
        </div>
      </div >
      <Menu />
    </>
  );
}

export default Header;