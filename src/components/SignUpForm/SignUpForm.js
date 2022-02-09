import React from "react";
import {
    Link,
  } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './SignUpForm.css';

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

export default function SignUpForm(props) {
    const classes = useStyles();

    return (
        <div className="formBox">
          <form /* onSubmit={handleSubmit} */ >
            <div className="titleText">Sign Up</div>
            <div className="descriptionText">
              <div>Already have an account?</div>
              <div>
                <Link to="/login" className="link">Login</Link>
              </div>
            </div>
            <div>
                <TextField
                    id="standard-required"
                    required
                    label="Username"
                    className="textField"
                    // onChange={(e) => validateUsername(e.target.value)}
                />
                {/* <div className="errorMsg">{usernameErrorMsg}</div> */}
                <TextField
                    id="standard-required"
                    required
                    label="Email"
                    className="textField"
                    // onChange={(e) => validateEmail(e.target.value)}
                />
                {/* <div className="errorMsg">{emailErrorMsg}</div> */}
                <TextField
                    id="standard-password-input"
                    required
                    type="password"
                    label="Password"
                    className="textField"
                    // onChange={(e) => validatePassword(e.target.value)}
                />
                {/* <div className="errorMsg">{passwordErrorMsg}</div> */}
                <TextField
                    id="standard-password-input"
                    required
                    type="password"
                    label="Confirm password"
                    className="textField"
                    // onChange={(e) => validateConfrimPassword(e.target.value)}
                />
                {/* <div className="errorMsg">{confirmPasswordErrorMsg}</div> */}
            </div>
            {/* <div className="errorMsg">{responseMessage}</div> */}
            <div className="button">
              <Button
                variant="contained"
                className={classes.primaryButton}
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
    );
}