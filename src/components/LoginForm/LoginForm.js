import React, { useState, useEffect } from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Link,
    useNavigate 
  } from "react-router-dom";
import PropTypes from 'prop-types';

import { loginUser, resetTypeValue } from "../../Redux/actions";
import { requestResponseSelector } from "../../Redux/selectors";

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

function LoginForm(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const { loginUserAction, requestResponse, resetTypeValueAction } = props;

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [responseMsg, setResponseMsg] = useState(""); 

  useEffect(() => {
    if (requestResponse === true) {
      navigate("/profile/" + login);
      resetTypeValueAction();
      setResponseMsg("");
    } else if (requestResponse === false) {
      setResponseMsg("Invalid credentials!");
    }
  }, [requestResponse, login, navigate, resetTypeValueAction]);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUserAction(login, password)
  };  

  return (
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <div className="titleText">Login</div>
          <div className="descriptionText">
            <div>{"Don't have an account?"}</div>
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

LoginForm.propTypes = {
  loginUserAction: PropTypes.func,
  requestResponse: PropTypes.bool,
  resetTypeValueAction: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUserAction: loginUser,
  resetTypeValueAction: resetTypeValue,
}, dispatch);

const mapStateToProps = (state) => ({
  requestResponse: requestResponseSelector(state) ? requestResponseSelector(state) : '',
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux(LoginForm));