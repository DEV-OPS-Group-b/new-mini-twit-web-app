import React from "react";
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

export default function LoginForm(props) {
    const classes = useStyles();

    return (
        <div className="formBox">
          <form /* onSubmit={handleSubmit} */ >
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
                    // onChange={(e) => validateUsername(e.target.value)}
                />
                {/* <div className="errorMsg">{usernameErrorMsg}</div> */}
                <TextField
                    id="standard-password-input"
                    required
                    type="password"
                    label="Password"
                    className="textField"
                    // onChange={(e) => validatePassword(e.target.value)}
                />
                {/* <div className="errorMsg">{passwordErrorMsg}</div> */}
            </div>
            {/* <div className="errorMsg">{responseMessage}</div> */}
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