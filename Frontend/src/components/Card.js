import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardStyle}>
      <h2>{props.name}</h2>
      <h3>
        {props.status === "visited" ? (
          <i class="far fa-check-circle fa-2x"></i>
        ) : (
          <i class="far fa-times-circle fa-2x"></i>
        )}
      </h3>
    </div>
  );
};

export default Card;
