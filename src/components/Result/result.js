import React from 'react';
import styles from "./result.module.css";

function Result() {
  return (
    <>
      <main>
        <div className={styles.resultMain}>
        <h3>Result Page</h3>
        <img src={require('../images/result.png')} alt='result' className={styles.resultImg}/>
        </div>
      </main>
    </>
  );
}

export default Result;