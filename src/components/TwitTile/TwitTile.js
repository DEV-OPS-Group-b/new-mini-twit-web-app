import React from "react";
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateTweetFlag } from "../../Redux/actions";

import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import './TwitTile.css';

const useStyles = makeStyles(() => ({
    setFlagButton: {
        background: "#C0C0C0",
        "&:hover": {
            background: "rgba(192,192,192, 0.5)",
        },
        color: "white",
        borderRadius: "5px",
        width: "80px",
    },
    removeFlagButton: {
        background: "#e90040",
        "&:hover": {
            background: "rgb(233, 0, 64, 0.5)",
        },
        color: "white",
        borderRadius: "5px",
        width: "80px",
    },
}));

function TwitTile(props) {

    const { id, username, avatar, date, tweet, flagged, updateTweetFlagAction } = props;
    const classes = useStyles();
    const loggedInUser = localStorage.getItem("user");

    let flagType;
    if (flagged === false) {
        flagType = <Button 
                        className={classes.setFlagButton}
                        onClick={() => updateTweetFlagAction(id, loggedInUser, "admin")}>
                        Flag</Button> 
    } else {
        flagType = <Button 
                        className={classes.removeFlagButton}
                        onClick={() => updateTweetFlagAction(id, loggedInUser, "admin")}>
                        Remove Flag</Button>;
    }

    let flagButton;
    if (loggedInUser === "admin") {
        flagButton = flagType;            
    } else {
        flagButton = null;
    }    

    return(
        <div className="mainBody">
            <div className="imgDiv">
                <img src={avatar ? avatar : "https://avatarfiles.alphacoders.com/184/thumb-184556.jpg"} alt="Avatar" />
            </div>
            <div className="twitContent">
                <div className="twitInfo">
                    <div className="username">{username ? username : "Username"}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="twitText">{tweet}</div>                
            </div>
            {flagButton}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateTweetFlagAction: updateTweetFlag,
}, dispatch);

const withRedux = connect(null, mapDispatchToProps);

export default compose(withRedux(TwitTile));