import React from "react";
import { HiSearch } from "react-icons/hi";
import "./info_player.css";
import { createRoot } from 'react-dom/client';
import {stats} from "./stats_object";

export default function Player_checker(){

    let player_names = ["Pacheco", "Renan", "Bernardo", "Davi S.", "Davi A.", "Stoll", "Japa"];

    const checkName = ({target}) =>{
        const root = createRoot(document.getElementById('player_stat'));
        const root2 = createRoot(document.getElementById('team_stat'));
        root2.unmount();

        const player_name = target.value;

        for(const player_loop in stats){
            if(player_name === stats[player_loop].p_name){

                root.render(<Playerstats player={stats[player_loop].p_name} image={stats[player_loop].image} goals={stats[player_loop].goals}
                assists={stats[player_loop].assists} insta={stats[player_loop].insta}/>);
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
                    </div>
                </div>
            </div>
        )
    }
}