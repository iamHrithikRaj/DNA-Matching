import React from "react";
// import {Router, Link, Route} from 'react-router-dom';
import Image from "../assets/home.png";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgba(244,162,97,0.3)"
          fillOpacity="1"
          d="M0,320L80,282.7C160,245,320,171,480,149.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.content}>
        <h1 className={styles.heading}>DNA PATHLABS</h1>
        <p className={styles.desc}>
          DNA PathLabs Limited is an international service provider of
          diagnostic and related healthcare tests. Based in Delhi, the company
          offers a broad range of tests on blood, urine and other human body
          viscera.
        </p>
        <div className={styles.btns}>
          <Link to="/login" className={`${styles.btn} ${styles.loginBtn}`}>
            LOGIN
          </Link>
          <Link
            to="/register"
            className={`${styles.btn} ${styles.registerBtn}`}
          >
            REGISTER
          </Link>
        </div>
      </div>
      <img className={styles.home} src={Image} alt="doctors" />

      <svg
        className={styles.svgBottom}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="rgba(244,162,97,0.3)"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default LandingPage;
