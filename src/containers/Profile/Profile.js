import React, { useEffect, useState } from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import { getUserTweets } from '../../Redux/actions';
import { userTweetsSelector } from "../../Redux/selectors";

import TwitTile from "../../components/TwitTile/TwitTile";
import AddTweetDialog from "../../components/AddTweetDialog/AddTweetDialog";
import './Profile.css';

const useStyles = makeStyles(() => ({
    primaryButton: {
        background: "#439cb8",
        "&:hover": {
        background: "rgba(67,156,184, 0.5)",
        },
        color: "white",
        borderRadius: "45px",
        width: "150px",
    },
}));

function Profile(props) {
    const {
        // getUserAction,
        getUserTweetsAction,
        userTweets,
    } = props;

    const [addTweetDialog, setAddTweetDialogOpen] = useState(false);

    useEffect(() => {
        let userId = 1;
        getUserTweetsAction(userId);  
      }, [])

    const classes = useStyles();

    return (
        <div className="app">
            <div className="header">
                <p>Mini Twit ITU</p>
            </div>
            <div className="body">
                <Grid className="grid" container spacing={1}>
                    <Grid item xs={6} sm={2}></Grid>
                    <Grid className="gridBody" item xs={6} sm={8}>
                        <div className="feedDiv">
                            <div className="innerFeedDiv">
                                <div className="feedTitle">MY FEED</div>
                                <Button 
                                    variant="contained" 
                                    className={classes.primaryButton}
                                    onClick={() => setAddTweetDialogOpen(true)}>
                                        Add tweet
                                </Button>
                                <AddTweetDialog
                                    open={addTweetDialog}
                                    setAddTweetDialogOpen={setAddTweetDialogOpen}
                                />
                            </div>
                            <hr className="line"/>
                            <div className="tweetsDiv">
                                {userTweets?.data?.twits?.map((tweet) => (                                
                                    <TwitTile  
                                        id={tweet.id}
                                        date={tweet.date}
                                        text={tweet.text} />
                                ))}
                            </div>
                        </div>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserTweetsAction: getUserTweets,
  }, dispatch);
  
  const mapStateToProps = (state) => ({
    userTweets: userTweetsSelector(state) ? userTweetsSelector(state) : '',
  });
  
  const withRedux = connect(mapStateToProps, mapDispatchToProps);
  
  export default compose(withRedux(Profile));