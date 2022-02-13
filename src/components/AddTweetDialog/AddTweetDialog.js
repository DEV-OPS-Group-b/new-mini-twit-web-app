import React, { useState } from "react";

import Dialog from '@material-ui/core/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import './AddTweetDialog.css';

const useStyles = makeStyles(() => ({
    primaryButton: {
        background: "#439cb8",
        "&:hover": {
        background: "rgba(67,156,184, 0.5)",
        },
        color: "white",
        borderRadius: "45px",
        width: "150px",
        marginLeft: "10px",
    },
    cancelButton: {
        background: "##F5F5F5",
        "&:hover": {
        background: "rgba(245,245,245, 0.5)",
        },
        color: "#439cb8",
        borderRadius: "45px",
        width: "150px",
    },
}));

export default function AddTweetDialog(props) {
    const { open, setAddTweetDialogOpen } = props;
    const classes = useStyles();

    const [tweetText, setTweetText] = useState({
        text: ""
    });
    
    const handleTweetTextChange = text => event => {
        setTweetText({ ...tweetText, [text]: event.target.value });
    };

    const cancelAddTweet = () => {
        setAddTweetDialogOpen(false);
        setTweetText("");
    }

    return (    
        <Dialog className='dialog' open={open} style={{ zIndex: "1" }}>
            <div className='dialogBody'>
                <div className='title'>Add new tweet</div>
                <TextField
                    id="outlined-multiline-static"
                    className='text'
                    inputProps={{maxLength: 140}}
                    label="Tweet, tweet, tweet .."
                    multiline
                    rows={4}
                    placeholder="Share something beautiful!"
                    value={tweetText.text}
                    helperText={`${tweetText.text ? tweetText.text.length : 0}/140`}
                    onChange={handleTweetTextChange("text")}
                />
                <div className='buttonsDiv'>
                    <Button 
                        className={classes.cancelButton} 
                        variant="outlined"
                        onClick={() => cancelAddTweet()}>
                        Cancel
                    </Button>
                    <Button className={classes.primaryButton} variant="contained">Share</Button>  
                </div>                              
            </div>            
        </Dialog>
    )
}