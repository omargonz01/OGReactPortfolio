import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1>OMAR GONZALEZ LEVEL 68</h1>
            <div id="playerStats_lines"> 
                <span id="playerStats_lines_thick"></span>
                <span id="playerStats_lines_thin"></span>
            </div>
            <h2>Fullstack Web Dev</h2>
        </div>
    );
};

export default PlayerStats;