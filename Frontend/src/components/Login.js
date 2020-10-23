import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link, Redirect, Route } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/user/login", user)
      .then(() => setIsLogged(true))
      .catch((err) => {
        // console.error(err);
        alert(err);
      });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: email,
      password: password,
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Route
        render={() => {
          if (isLogged) {
            return <Redirect to="/home" />;
          }
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bee3db"
          fillOpacity="1"
          d="M0,128L24,122.7C48,117,96,107,144,122.7C192,139,240,181,288,165.3C336,149,384,75,432,69.3C480,64,528,128,576,133.3C624,139,672,85,720,101.3C768,117,816,203,864,234.7C912,267,960,245,1008,197.3C1056,149,1104,75,1152,37.3C1200,0,1248,0,1296,21.3C1344,43,1392,85,1416,106.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.form}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={handleEmailChange} type="email" />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <button type="submit">SIGN IN</button>
          <p>
            Not Registered yet? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.svgBottom}
      >
        <path
          fill="rgb(190, 227, 219)"
          fillOpacity="1"
          d="M0,64L24,64C48,64,96,64,144,69.3C192,75,240,85,288,117.3C336,149,384,203,432,202.7C480,203,528,149,576,149.3C624,149,672,203,720,224C768,245,816,235,864,202.7C912,171,960,117,1008,122.7C1056,128,1104,192,1152,208C1200,224,1248,192,1296,176C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Login;
