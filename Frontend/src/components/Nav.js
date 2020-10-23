import React from "react";
import styles from "./Nav.module.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import user_img from "../assets/user.jpg";

const Nav = ({noOfPatients}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <img src={user_img} alt="" />
          <h2>Dr. Mojo Jojo</h2>
        </div>
        <ul className={styles.infoListContainer}>
          <li className={styles.infoList}>
            <strong>ID</strong>: DR23723875
          </li>
          <li className={styles.infoList}>
            <strong>NO_OF_PATENT</strong>:&nbsp;
            {noOfPatients}
          </li>
          <li className={styles.infoList}>
            <strong>APPOINTMENTS</strong>:&nbsp;
            {noOfPatients}
          </li>
        </ul>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/home" className={styles.navLink}>
            <i class="fas fa-home"></i> &nbsp;HOME
          </Link>
        </li>
        <li>
          <Link to="/lab" className={styles.navLink}>
            <i class="fas fa-flask"></i> &nbsp;LAB
          </Link>
        </li>
        <li>
          <Link className={styles.navLink}>
            <i class="fas fa-cogs"></i> &nbsp; SETTINGS
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/">
            <i class="fas fa-sign-out-alt"></i>&nbsp;LOGOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
