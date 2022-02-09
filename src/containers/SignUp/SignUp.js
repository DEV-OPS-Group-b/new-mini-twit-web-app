import Grid from "@material-ui/core/Grid";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUp() {
    return (
        <div className="app">
      {/* <SignUpForm /> */}
      <div className="header">
        <p>Mini Twit ITU</p>
      </div>
      <div className="body">
        <Grid className="grid" container spacing={1}>
            <Grid item xs={6} sm={8}></Grid>
            <Grid item xs={6} sm={2}>
                <SignUpForm />
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