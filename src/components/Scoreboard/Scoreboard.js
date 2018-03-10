import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className='scoreboard'>

        <p>High Score: {props.highScore} </p>
        <p>Current Score: {props.score} </p>
    </div>
);

export default Scoreboard;