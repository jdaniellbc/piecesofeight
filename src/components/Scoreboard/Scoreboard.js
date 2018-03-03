import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div>
        <ul className="nav scoreboard nav-justified">
            <li><a href="/">Pirate Memory Game</a></li>
            {/* <li
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li> */}
            <li>Score: <span style={{ color: "yellow" }}>{props.score}</span> | High Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Scoreboard;