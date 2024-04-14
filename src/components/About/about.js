import React from "react";
import styles from './about.module.css'

function About(){
  return(
    <main>
      <div className={styles.aboutMain}>
        <h3> Follow the instructions to use this software :</h3>
        <ul>
           <li> Enter your admission number</li>
           <li> Enter the pin from the scratch card</li>
           <li> Select the session you want to check result for</li>
           <li> select the term you want to check result for</li>
           <li> Click on Submit</li>
       </ul>
      </div>
    </main>
  );
}

export default About;