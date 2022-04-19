import React, { useEffect, useState } from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Link,
  useNavigate 
} from "react-router-dom";
import PropTypes from 'prop-types';

import { createUser, resetTypeValue } from "../../Redux/actions";
import { requestResponseSelector } from "../../Redux/selectors";

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

function SignUpForm(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const { createUserAction, requestResponse, resetTypeValueAction } = props;

  useEffect(() => {
    if (requestResponse === true) {
      navigate("/login");
      resetTypeValueAction();
    } 
    else if (requestResponse === false) {
      setResponseMessage("The username is already taken!")
    }
  }, [requestResponse, navigate, resetTypeValueAction]);  

  // Set state for Redux
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  // Set state for Form validation errors
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");
  const [responseMessage, setResponseMessage] = useState("");


  // Methods to validate Input Fields for Username, Email, Password and Confirmation Password
  const validateUsername = (username) => {
    const validUsername = new RegExp("^(?:.*[A-Za-z0-9])$");
    const isValid = validUsername.test(username);
    setResponseMessage("");
    if (!isValid) {
      setUsernameErrorMsg("The username can only contain letters and numbers");
    } else if (username.length < 3 || username.length > 30) {
      setUsernameErrorMsg(
        "Username should contain between 3 and 30 characters!"
      );
    } else {
      setUsernameErrorMsg("");
      setUserName(username);
    }
  };

  const validateEmail = (email) => {
    const validEmail = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const isValid = validEmail.test(email);
    if (!isValid) {
      setEmailErrorMsg("Not a valid email");
    } else {
      setEmailErrorMsg("");
      setEmail(email);
    }
  };

  const validatePassword = (password) => {
    const validPassword = new RegExp(
      "^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"
    );
    const isValid = validPassword.test(password);
    if (!isValid) {
      setPasswordErrorMsg(
        "Password should contain at least one letter and one number!"
      );
    } else if (password.length < 6 || password.length > 60) {
      setPasswordErrorMsg(
        "Password should contain between 6 and 60 characters!"
      );
    } else {
      setPasswordErrorMsg("");
      setPassword(password);
    }
  };

  const validateConfrimPassword = (confirmPassword) => {
    const isSame = password === confirmPassword ? true : false;
    if (!isSame) {
      setConfirmPasswordErrorMsg("Passwords don't match!");
    } else {
      setConfirmPasswordErrorMsg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserAction(username, email, password);
  };

  return (
      <div className="formBox">
        <form className="formDiv" onSubmit={handleSubmit} >
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
                  onChange={(e) => validateUsername(e.target.value)}
              />
              <div className="errorMsg">{usernameErrorMsg}</div>
              <TextField
                  id="standard-required"
                  required
                  label="Email"
                  className="textField"
                  onChange={(e) => validateEmail(e.target.value)}
              />
              <div className="errorMsg">{emailErrorMsg}</div>
              <TextField
                  id="standard-password-input"
                  required
                  type="password"
                  label="Password"
                  className="textField"
                  onChange={(e) => validatePassword(e.target.value)}
              />
              <div className="errorMsg">{passwordErrorMsg}</div>
              <TextField
                  id="standard-password-input"
                  required
                  type="password"
                  label="Confirm password"
                  className="textField"
                  onChange={(e) => validateConfrimPassword(e.target.value)}
              />
              <div className="errorMsg">{confirmPasswordErrorMsg}</div>
          </div>
          <div className="errorMsg">{responseMessage}</div>
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

SignUpForm.propTypes = {
  createUserAction: PropTypes.func,
  requestResponse: PropTypes.bool,
  resetTypeValueAction: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createUserAction: createUser,
  resetTypeValueAction: resetTypeValue,
}, dispatch);

const mapStateToProps = (state) => ({
  requestResponse: requestResponseSelector(state) ? requestResponseSelector(state) : '',
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux(SignUpForm));