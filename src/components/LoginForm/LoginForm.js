import React, { useState } from "react";
import {
    Link,
  } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './LoginForm.css';

const useStyles = makeStyles(() => ({
    primaryButton: {
        background: "#439cb8",
        "&:hover": {
        background: "rgba(67,156,184, 0.5)",
        },
        color: "white",
        borderRadius: "15px",
        width: "150px",
    },
}));

// Login functionality
async function loginUser(credentials) {
  // return fetch("https://localhost:5001/users/authenticate", {
  return fetch("https://localhost:5001/login/{username}/{password}", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function LoginForm(props) {
  const classes = useStyles();

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [responseMsg, setResponseMsg] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      login,
      password,
    });
    // const isSuccessful = await setToken(token);
    const isSuccessful = true;
    if (!isSuccessful) {
      setResponseMsg("Not a valid username/email and password combination!");
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <div className="titleText">Login</div>
          <div className="descriptionText">
            <div>Don't have an account?</div>
            <div>
              <Link to="/sign-up" className="link">Sign Up</Link>
            </div>
          </div>
          <div>
              <TextField
                  id="standard-required"
                  required
                  label="Username"
                  className="textField"
                  onChange={(e) => setLogin(e.target.value)}
              />
              <TextField
                  id="standard-password-input"
                  required
                  type="password"
                  label="Password"
                  className="textField"
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="errorMsg">{responseMsg}</div>
          <div className="button">
            <Button
              variant="contained"
              className={classes.primaryButton}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
  );
}