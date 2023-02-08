import React, {useState} from "react";
import "./Statistics.css";
import { createRoot } from 'react-dom/client';
import Player_checker from "../info/info_player";

export class Statistics extends React.Component{
    render(){

        return(
            <div id="holster">
                <h2>Statistics</h2>
                <div id="players">
                    <div className="searchBox">
                        <h3>Search For Player</h3>
                        <Player_checker />
                        <Team_button />
                    </div>
                </div>
            </div>
        )
    }
}

class Team_button extends React.Component{
    show(){
        const root = createRoot(document.getElementById('team_stat'));
        const root2 = createRoot(document.getElementById('player_stat'));
        root2.unmount();
        root.render(<Team_stats/>);
    }

    render(){
        return(
            <div>
                <button onClick={this.show}>Team Statistics</button>
            </div>
        )
    }
}

class Team_stats extends React.Component{
    render(){
        return(
            <div>
                <h3>Team Statistics</h3>
            </div>
        )
    }
}


