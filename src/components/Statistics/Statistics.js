import React from "react";
import "./Statistics.css";
import { createRoot } from 'react-dom/client';
import Playerchecker from "../info/info_player";

export class Statistics extends React.Component{
    render(){

        return(
            <div id="holster">
                <h2>Statistics</h2>
                <div id="players">
                    <div className="searchBox">
                        <h3 className="se">Search For Player</h3>
                        <Playerchecker />
                        <Teambutton />
                    </div>
                </div>
            </div>
        )
    }
}

class Teambutton extends React.Component{
    show(){
        const root = createRoot(document.getElementById('team_stat'));
        const root2 = createRoot(document.getElementById('player_stat'));
        root2.unmount();
        root.render(<Teamstats/>);
    }

    render(){
        return(
            <div>
                <button onClick={this.show}>Team Statistics</button>
            </div>
        )
    }
}

class Teamstats extends React.Component{
    render(){
        return(
            <div>
                <h3>Team Statistics</h3>
            </div>
        )
    }
}


