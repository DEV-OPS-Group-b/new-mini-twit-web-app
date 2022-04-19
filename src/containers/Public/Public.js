import React, { useEffect } from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types';

import Grid from "@material-ui/core/Grid";

import { getAllTweets } from '../../Redux/actions';
import { allTweetsSelector } from "../../Redux/selectors";

import TwitTile from "../../components/TwitTile/TwitTile";
import './Public.css';

function Public(props) {

    const {
        getAllTweetsAction,
        allTweets,
    } = props;

    useEffect(() => {
        getAllTweetsAction();
    }, [getAllTweetsAction])

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
                                {allTweets?.data?.map((tweet) => ( 
                                    <Link key={tweet.id} to={`/profile/${tweet.username}`} className="link">
                                        <TwitTile  
                                            key={tweet.id}
                                            username={tweet.username}
                                            date={tweet.insertionDate}
                                            tweet={tweet.tweet}
                                            flagged={tweet.flagged} />
                                    </Link>                               
                                    
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

Public.propTypes = {
    allTweets: PropTypes.array,
    getAllTweetsAction: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllTweetsAction: getAllTweets,
}, dispatch);

const mapStateToProps = (state) => ({
    allTweets: allTweetsSelector(state) ? allTweetsSelector(state) : '',
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux(Public));