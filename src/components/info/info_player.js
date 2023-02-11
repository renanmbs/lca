import React from "react";
import { HiSearch } from "react-icons/hi";
import "./info_player.css";
import { createRoot } from 'react-dom/client';
import {stats} from "./stats_object";
import { Teambutton } from "../Statistics/Statistics";
import {MdSportsSoccer} from "react-icons/md";
import {GiSoccerKick, GiGoalKeeper} from "react-icons/gi";

function Playerchecker(){

    let player_names = ["Pacheco", "Renan", "Bernardo", "Davi S.", "Davi A.", "Stoll", "Japa"];

    const checkName = ({target}) =>{
        const root = createRoot(document.getElementById('player_stat'));
        const root2 = createRoot(document.getElementById('t_stat'));
        root2.unmount();

        const player_name = target.value;

        for(const player_loop in stats){
            if(player_name.toLowerCase() === stats[player_loop].p_name.toLowerCase()){

                root.render(<Playerstats player={stats[player_loop].p_name} image={stats[player_loop].image} goals={stats[player_loop].goals}
                assists={stats[player_loop].assists} clean={stats[player_loop].clean}/>);
            }
        }
    }

    return(
        <div className="searches">
            <HiSearch className="ico"/>
            <input list="search_players" id="search" name="search" placeholder="Name" onChange={checkName}/>
            <Names name={player_names}/>
        </div>
    );
}

export class Statistics extends React.Component{
    render(){

        return(
            <div id="holster">
                <h2>Statistics</h2>
                <div id="players">
                    <div className="searchBox">
                        <h4 className="sear">Search For Player</h4>
                        <Playerchecker />
                        <Teambutton />
                    </div>
                </div>
            </div>
        )
    }
}

class Names extends React.Component{
    render(props){
        const names = this.props.name;

        return(
            <datalist id="search_players">
                {names.map((name) =>{
                    return <option key={name} value={name}>{name}</option>
                })}
            </datalist>
        );
    }
}

class Playerstats extends React.Component{
    render(){
        return(
            <div id="p_stats">
                <h3>Player Stats</h3>
                <div id="cont">
                    <div id="area">
                        <img src={this.props.image} alt={this.props.player}/>
                        <h4>{this.props.player}</h4>
                        <div className="stat">{
                            this.props.goals == null ? 

                            <div>
                                <h5>Clean Sheets</h5>
                                <GiGoalKeeper className="ball"/>
                                <p>{this.props.clean}</p>
                            </div>
                            
                            :
                            <div>
                                <h5>Goals</h5>
                                <MdSportsSoccer className="ball"/>
                                <p>{this.props.goals}</p>
                                <h5>Assists</h5>
                                <GiSoccerKick className="ball"/>
                                <p>{this.props.assists}</p>
                            </div>


                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}