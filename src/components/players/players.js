import React from "react";
import "./players.css";
import { HiSearch } from "react-icons/hi";

export class Players extends React.Component{
    render(){
        return(
            <div id="holster">
                <h2>Roster</h2>
                <div id="players">
                    <div className="searchBox">
                        <h3>Search For Player</h3>
                        <div className="searches">
                            <HiSearch className="icon"/>
                            <input list="search_players" id="search" name="search" placeholder="Name"></input>
                            <datalist id="search_players">
                        

                            </datalist>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
