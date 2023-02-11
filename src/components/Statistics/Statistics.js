import React from "react";
import "./Statistics.css";
import { createRoot } from 'react-dom/client';
import { Team } from "../info/info_team";
import { stat_for_team } from "../info/team_stats_object";

export class Teambutton extends React.Component{
    show(){
        const root = createRoot(document.getElementById('t_stat'));
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

    get_stats(){
        let shots = 0;
        let target = 0;
        let against = 0;
        let goals_pro = 0;
        let goals_against = 0;
        let yellow = 0;
        let red = 0;

        for (const team_loop in stat_for_team){
            shots = stat_for_team[team_loop].shots;
            target = stat_for_team[team_loop].target;
            against = stat_for_team[team_loop].against;
            goals_against = stat_for_team[team_loop].goals_against;
            goals_pro = stat_for_team[team_loop].goals_pro;
            yellow = stat_for_team[team_loop].yellow;
            red =  stat_for_team[team_loop].red;
        }

        return(
            <Team shots={shots} target={target} against={against} yellow={yellow} red={red} goals_against={goals_against} goals_pro={goals_pro}/>
        )
    }

    render(){
        return(
            <div id="t_stats">
                <h3>Team Statistics</h3>
                <div id="holder">
                    {this.get_stats()}
                </div>
            </div>
        )
    }
}


