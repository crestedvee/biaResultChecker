import React, { useState } from "react";
import styles from './home.module.css'
import ValidateLogin from "./validateLogin";
//import Result from "../Result/result";
import { useNavigate } from "react-router-dom";




function Home() {
  const [values, setValues] = useState({
    admNum: "",
    pnCode: "",
    selSess: "",
    selTerm: ""
  });

  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({

  });

  const handleInput = event => {
    const names = event.target.name;
    const values = event.target.value;
    setValues(prev => ({ ...prev, [names]: values }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(ValidateLogin(values));
    setSubmitting(true);
    if (submitting) {
      navigate("../result");
    }
  }


  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formMain}>
          <div className={styles.loginImgDiv}>
            <img src={require('../images/signup-image.jpg')} alt='login' />
          </div>
          <form className={styles.loginMain} onSubmit={handleSubmit}>
            <div className={styles.formDivs}>
              <div>
                <input type='text' placeholder='Student Admission Number' className={styles.userId} id='admNum' name='admNum' onChange={handleInput} required minLength={6} maxLength={6} />
                {errors.admNum && <span className={styles.errText}>{errors.admNum}</span>}
              </div>
              <div>
                <input type='password' placeholder='Pin Code' className={styles.userId} id='pnCode' name="pnCode" onChange={handleInput} required minLength={4} maxLength={4} />
                {errors.admNum && <span className={styles.errText}>{errors.pnCode}</span>}
              </div>
              <div>
                <select className={styles.selectNow} name="Sexion">
                  <optgroup>
                    <option value="sess"> Select Session</option>
                    <option value="2020/2021"> 2020/2021</option>
                    <option value="2021/2022"> 2021/2022</option>
                    <option value="2022/2023"> 2022/2023</option>
                    <option value="2023/2024"> 2023/2024</option>
                    <option value="2024/2025"> 2024/2025</option>
                    <option value="2025/2026"> 2025/2026</option>
                    <option value="2026/2027"> 2026/2027</option>
                    <option value="2027/2028"> 2027/2028</option>
                    <option value="2028/2029"> 2028/2029</option>
                    <option value="2029/2030"> 2029/2030</option>
                  </optgroup>
                  {errors.selSess && <span className={styles.errText}>{errors.selSess}</span>}
                </select>
              </div>
              <div>
                <select className={styles.selectNow} name="Termly">
                  <optgroup>
                    <option value="ter"> Select Term</option>
                    <option value="1"> First Term</option>
                    <option value="2"> Second Term</option>
                    <option value="3"> Third Term</option>
                  </optgroup>
                  {errors.selTerm && <span className={styles.errText}>{errors.selTerm }</span>}
                </select>
              </div>
              <input type='submit' className={styles.formSubmit} />
            </div>
            {submitting}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Home;