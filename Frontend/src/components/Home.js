import React, { useState } from "react";
import styles from "./Home.module.css";
import { PatientProvider } from "./PatientContext";
// eslint-disable-next-line
import { Link } from "react-router-dom";
// import user_img from "../assets/user.jpg";
import Nav from "./Nav";
// import axios from "axios";

import Card from "./Card";
const Home = () => {
  const [noOfCards, setNoOfCards] = useState([
    {
      name: "Hrithik Raj",
      status: "visited",
    },
    {
      name: "Sahil Chaudhary",
      status: " not visited",
    },
    {
      name: "Rishab Gautam",
      status: "visited",
    },
    {
      name: "Saksham",
      status: "visited",
    },
    {
      name: "Harsh Pawar",
      status: "not visited",
    },
  ]);
  // const [patient, setPatient] = useState({});
  const handleClick = () => {
    setNoOfCards([
      ...noOfCards,
      {
        name: "New Patient",
        status: "not visited",
      },
    ]);
  };
  // useEffect(()=>{

  // },[])
  return (
    <PatientProvider>
      <div className={styles.container}>
        <div className={styles.card}>
          <Nav noOfPatients={noOfCards.length}/>
          <div className={styles.addCard}>
            {noOfCards.map((card) => {
              return <Card name={card.name} status={card.status} />;
            })}
            <button onClick={handleClick} className={styles.addBtn}>
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </PatientProvider>
  );
};

export default Home;
