import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import { getUserTweets, followUser, unfollowUser, isUserFollowing } from '../../Redux/actions';
import { userTweetsSelector, isUserFollowingSelector, requestResponseSelector } from "../../Redux/selectors";

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
    unfollowButton: {
        background: "#A10A1E",
        "&:hover": {
        background: "rgba(161, 10, 30, 0.5)",
        },
        color: "white",
        borderRadius: "45px",
        width: "150px",
    },
}));

function Profile(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("user");
    const { profileUsername } = useParams();

    const {
        getUserTweetsAction,
        userTweets,
        followUserAction,
        unfollowUserAction,
        isUserFollowingAction,
        isUserFollowing,
        requestResponse,
    } = props;

    const [addTweetDialog, setAddTweetDialogOpen] = useState(false);
    const [follows, setFollows] = useState(false);

    useEffect(() => {
        isUserFollowingAction(loggedInUser, profileUsername);
    }, [isUserFollowingAction, loggedInUser, profileUsername, requestResponse]);

    useEffect(() => {
        setFollows(isUserFollowing);
    }, [isUserFollowing])

    useEffect(() => {        
        if (profileUsername !== undefined) {
            getUserTweetsAction(profileUsername); 
        }
        
    }, [profileUsername, getUserTweetsAction]);

    useEffect(() => {
        if (requestResponse === true)
        {
            getUserTweetsAction(profileUsername);
        }        
    }, [requestResponse, getUserTweetsAction, profileUsername])

    let actionButton;
    if (loggedInUser === profileUsername) {
        actionButton = <Button 
                            variant="contained" 
                            className={classes.primaryButton}
                            onClick={() => setAddTweetDialogOpen(true)}>
                                Add tweet
                        </Button>
    } else {
        actionButton = <Button
                            variant="contained" 
                            className={follows === true ? classes.unfollowButton : classes.primaryButton}
                            onClick={() => follows === true ? unfollowUserAction(loggedInUser, profileUsername) : followUserAction(loggedInUser, profileUsername)}>
                                {follows === true ? "Unfollow" : "Follow"}
                        </Button>
    };



    return (
        <div className="app">
            <div className="header" onClick={() => navigate("/public")}>
                <p>Mini Twit ITU</p>
            </div>
            <div className="body">
                <Grid className="grid" container spacing={1}>
                    <Grid item xs={6} sm={2}></Grid>
                    <Grid className="gridBody" item xs={6} sm={8}>
                        <div className="feedDiv">
                            <div className="innerFeedDiv">
                                <div className="feedTitle">MY FEED</div>
                                {actionButton}
                                <AddTweetDialog
                                    open={addTweetDialog}
                                    setAddTweetDialogOpen={setAddTweetDialogOpen}
                                    username={loggedInUser? loggedInUser : "No username!"}
                                />
                            </div>
                            <hr className="line"/>
                            <div className="tweetsDiv">
                                {userTweets?.data?.map((tweet) =>                               
                                    <TwitTile  
                                        id={tweet.id}
                                        username={tweet.username}
                                        date={tweet.insertionDate}
                                        tweet={tweet.tweet}
                                        flagged={tweet.flagged} />
                                )}
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
    followUserAction: followUser,
    unfollowUserAction: unfollowUser,
    isUserFollowingAction: isUserFollowing,
}, dispatch);

const mapStateToProps = (state) => ({
    userTweets: userTweetsSelector(state) ? userTweetsSelector(state) : '',
    isUserFollowing: isUserFollowingSelector(state) ? isUserFollowingSelector(state): '',
    requestResponse: requestResponseSelector(state) ? requestResponseSelector(state) : '',
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux(Profile));