import React from 'react';
import './navbar.css';
import logo from "./LCA-LOGO.png";
import { Players } from '../players/players';
import { createRoot } from 'react-dom/client';

export class NavBar extends React.Component{

  hide(){
    const root = createRoot(document.getElementById('base'));
    root.unmount();
  }

  showPlayers(){
    const root = createRoot(document.getElementById('base'));
    root.render(<Players/>);
  }

  showStat(){
    //Render stat component
  }

  showSchedule(){
    //Render schedule component
  }

  showPhotos(){
   //Render photos component
  }

  render(){
    return(
      <div>
         <nav>
            <ul>
              <li><a href='https://www.maxpreps.com/ut/layton/layton-christian-academy-eagles/soccer/spring/' target="_blank" rel="noopener noreferrer"><img src={logo} alt="Layton Christian Academy's Logo"/></a></li>
              <li><a href='#home' onClick={this.hide}>Home</a></li>
              <li><a href="#players" onClick={this.showPlayers}>Roster</a></li>
              <li><a href="#stats" onClick={this.showStat}>Statistics</a></li>
              <li><a href="#schedule" onClick={this.showSchedule}>Schedule</a></li>
              <li><a href="#media" onClick={this.showPhotos}>Photos & Videos</a></li>
            </ul>
          </nav>
      </div>
    )
  }
}



