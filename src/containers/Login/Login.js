import React from "react";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
    return (
      <div className="app">
        <div className="header">
          <p>Mini Twit ITU</p>
        </div>
        <div className="body">
          <Grid className="grid" container spacing={1}>
              <Grid item xs={6} sm={8}></Grid>
              <Grid item xs={6} sm={2}>
                  <LoginForm />
              </Grid>
              <Grid item xs={6} sm={2}></Grid>
          </Grid>
        </div>
        {/* <div className="footer">
          <p>Footer</p>
        </div> */}
    </div>
    );
}