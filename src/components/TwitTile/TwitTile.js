import React from "react";

import './TwitTile.css'

export default function TwitTile(props) {

    const { avatar, username, date, text } = props;

    return(
        <div className="mainBody">
            <div className="imgDiv">
                <img src={avatar ? avatar : "https://data.whicdn.com/images/95842919/original.jpg"} alt="Avatar" />
            </div>
            <div className="twitContent">
                <div className="twitInfo">
                    <div className="username">{username ? username : "Tom"}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="twitText">{text}</div>
            </div>
        </div>
    )
}