import React from "react";
import "./schedule.css";
import { games } from "./schedule_obj";
import sche from "./schedule.jpeg"

export class Schedule extends React.Component{

    constructor(props) {
        super(props);
    
        let games_array = [];
        let away_team = "";
        let date = "";
        let time = "";
        let place = "";
        let score_lca = "";
        let score_away = "";
    
        for(const game in games){
            away_team = games[game].away;
            date = games[game].date;
            time = games[game].time;
            place = games[game].place;
            score_lca = games[game].score_lca;
            score_away = games[game].score_away;

            games_array.push([away_team,date,time,place,score_lca,score_away]);
        }
    
        this.state = { games_array };
    }

    render(){
        return(
            <div id="schedule">
                <h2>Schedule</h2>
                <div id="schedule_box">
                    {this.state.games_array.map((game, index) => (

                        <div id="game_box" key={index}>
                            <h3>LCA x {game[0]}</h3>
                            <div>
                                {
                                    game[4] == null ? 
                                        <p>Game Not Yet Played</p>    
        
                                    :
                                        <p>{game[4]} x {game[5]}</p>
                                }
                            </div>
                            <p>{game[1]}</p>
                            <p>{game[2]}</p>
                            <p>{game[3]}</p>
                        </div>
                    ))}
                </div>
                <a href={sche} target="_blank" rel="noopener noreferrer"><button>Download Schedule</button></a>
            </div>
        )
    }
}

