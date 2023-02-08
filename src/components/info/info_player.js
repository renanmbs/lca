import React from "react";
import { HiSearch } from "react-icons/hi";
import "./info_player.css";
import { createRoot } from 'react-dom/client';

let stats = {
        1:{
            p_name: "Pacheco",
            src: "./photos/pacheco.png",
            goals: 1,
            assists: 5,
            insta: "www.instagram.com"
        },

        2:{
            p_name: "Davi S",
            src: "./photos/davi  s.png",
            goals: 6,
            assists: 2,
            insta: "www.google.com"
        }

    }

export default function Player_checker(){

    let player_names = ["Pacheco", "Renan", "Bernardo", "Davi S.", "Davi A.", "Stoll", "Japa"];

    const checkName = ({target}) =>{
        const root = createRoot(document.getElementById('player_stat'));
        const root2 = createRoot(document.getElementById('team_stat'));
        root2.unmount();

        const player_name = target.value;

        for(const player_loop in stats){
            if(player_name === stats[player_loop].p_name){

                root.render(<Player_stats player={player_name} src={stats[player_loop].src} goals={stats[player_loop].goals}
                assists={stats[player_loop].assists} insta={stats[player_loop].insta}/>);
            }
        }

    }

    return(
        <div className="searches">
            <HiSearch className="icon"/>
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
                    return <option value={name}>{name}</option>
                })}
            </datalist>
        );
    }
}

class Player_stats extends React.Component{
    render(){
        return(
            <div id="p_stats">
                <h3>Player Stats</h3>
                <div id="cont">
                    <div id="area">
                        <h5>{this.props.src}</h5><br/>
                        <h5>{this.props.goals}</h5><br/>
                        <h5>{this.props.assists}</h5><br/>
                        <h5>{this.props.insta}</h5><br/>
                        <h5>{this.props.player}</h5><br/>
                    </div>
                </div>
            </div>
        )
    }
}