import React, { useState } from "react";
import styles from "./Lab.module.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";
// import user_img from "../assets/user.jpg";
import Nav from "./Nav";

function longestCommonSubsequence(s1, s2) {
  // string to array
  const arr1 = [...s1];
  const arr2 = [...s2];

  // define n x m sized array filled with 0's
  let matrix = [...Array(arr1.length + 1)].map((e) =>
    Array(arr2.length + 1).fill(0)
  );

  // fill the matrix
  for (let i = 1; i <= arr1.length; i++) {
    for (let j = 1; j <= arr2.length; j++) {
      // eslint-disable-next-line
      if (arr1[i - 1] == arr2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j] + 1;
      } else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }

  // return the max which is at the right bottom corner of the matrix
  return matrix[matrix.length - 1][matrix[0].length - 1];
}

const Lab = () => {
  // eslint-disable-next-line
  const [percent1, setPercent1] = useState(0);
  // eslint-disable-next-line
  const [percent2, setPercent2] = useState(0);

  const calculate = () => {
    const one = "GATAGCTAGGGGTTAACGGTACTTAACGTTACTTGATTTTTTAACGTGT";
    const two = "AACGTAAGCTTTAACGTTACTTGATTTTTTAAGTAGT";
    const max = longestCommonSubsequence(one, two);
    console.log(max);
    setPercent1(Math.floor((one.length / max)*100));
    setPercent2(Math.floor((two.length / max)*100));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Nav />
        <div className={styles.addCard}>
          <div className={styles.form1}>
            <form action="">
              <label htmlFor="name">Patient Name</label>
              <input type="text" />
              <label htmlFor="id">Patient ID</label>
              <input type="number" />
              <label htmlFor="dna">DNA Sequence</label>
              <input type="file" />
            </form>
            <h1>{percent1}%</h1>
          </div>
          <div className={styles.form2}>
            <form action="">
              <label htmlFor="name">Patient Name</label>
              <input type="text" />
              <label htmlFor="id">Patient ID</label>
              <input type="number" />
              <label htmlFor="dna">DNA Sequence</label>
              <input type="file" />
            </form>
            <h1>{percent2}%</h1>
          </div>
          <button onClick={calculate} type="submit">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lab;
