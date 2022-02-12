import React, { useEffect } from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from "@material-ui/core/Grid";

import { getAllTweets } from '../../Redux/actions';
import { allTweetsSelector } from "../../Redux/selectors";

import TwitTile from "../../components/TwitTile/TwitTile";
import './Public.css';

function Public(props) {

    const {
        getAllTweetsAction,
        userTweets,
    } = props;

    useEffect(() => {
        getAllTweetsAction();
    }, [])

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
                            FEED
                            <hr className="line"/>
                            <div className="tweetsDiv">
                                {userTweets?.data?.allTweets?.map((tweet) => (                                
                                    <TwitTile  
                                        id={tweet.id}
                                        avatar={tweet.userAvatar}
                                        username={tweet.username}
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
    getAllTweetsAction: getAllTweets,
}, dispatch);

const mapStateToProps = (state) => ({
    userTweets: allTweetsSelector(state) ? allTweetsSelector(state) : '',
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux(Public));