import React from "react";
import "./info_team.css";
import {GiSoccerKick} from "react-icons/gi";
import {FiTarget} from "react-icons/fi";
import {MdSportsSoccer} from "react-icons/md";

export class Team extends React.Component{
    render(){
        return(
            <div id="box">
                <div id="team_s">

                    <h4>Shots</h4>
                    <GiSoccerKick className="icon_box"/>
                    <p>{this.props.shots}</p>

                    <h4>Shots on Target</h4>
                    <FiTarget className="icon_box"/>
                    <p>{this.props.target}</p>
                    <meter min={0} max={this.props.shots} value={this.props.target}></meter>
                    
                    <h4>Shots Against</h4>
                    <GiSoccerKick className="against"/>
                    <p>{this.props.against}</p>

                    <h4>Goals Scored</h4>
                    <MdSportsSoccer />
                    <p>{this.props.goals_pro}</p>

                    <h4>Goals Conceived</h4>
                    <MdSportsSoccer style={{color:"red"}}/>
                    <p>{this.props.goals_against}</p>

                    <h4>Discipline</h4>
                    <div id="discipline">
                        <p style={{color:"#CCCC00"}}>{this.props.yellow}</p>
                        <p style={{color:"red"}}>{this.props.red}</p>
                    </div>
                </div>
            </div>
        )
    }
}