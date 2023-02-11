import React from 'react';
import './navbar.css';
import logo from "./LCA-LOGO.png";
import { Statistics } from '../info/info_player';
import { createRoot } from 'react-dom/client';
import { Footer } from '../footer/footer';
import {Roster} from '../roster/roster';
import { Schedule } from '../schedule/schedule';
import { ShowMedia } from '../media/media';

export class NavBar extends React.Component{

  hide(){
    const root = createRoot(document.getElementById('base'));
    const root2 = createRoot(document.getElementById('t_stat'));
    const root3 = createRoot(document.getElementById('player_stat'));
    root2.unmount();
    root3.unmount();
    root.render(<Footer />);
  }

  showPlayers(){
    const root = createRoot(document.getElementById('base'));
    const root2 = createRoot(document.getElementById('t_stat'));
    const root3 = createRoot(document.getElementById('player_stat'));
    root2.unmount();
    root3.unmount();
    root.render(<Roster />);
  }

  showStat(){
    const root = createRoot(document.getElementById('base'));
    const root2 = createRoot(document.getElementById('t_stat'));
    const root3 = createRoot(document.getElementById('player_stat'));
    root2.unmount();
    root3.unmount();
    root.render(<Statistics/>);
  }

  showSchedule(){
    const root = createRoot(document.getElementById('base'));
    const root2 = createRoot(document.getElementById('t_stat'));
    const root3 = createRoot(document.getElementById('player_stat'));
    root2.unmount();
    root3.unmount();
    root.render(<Schedule />);
  }

  showPhotos(){
    const root = createRoot(document.getElementById('base'));
    const root2 = createRoot(document.getElementById('t_stat'));
    const root3 = createRoot(document.getElementById('player_stat'));
    root2.unmount();
    root3.unmount();
    root.render(<ShowMedia />);
  }

  render(){
    return(
      <div>
         <nav>
            <ul>
              <li><a href='https://www.maxpreps.com/ut/layton/layton-christian-academy-eagles/soccer/spring/' target="_blank" rel="noopener noreferrer"><img src={logo} alt="Layton Christian Academy's Logo"/></a></li>
              <li><a href='#home' onClick={this.hide}>Home</a></li>
              <li><a href="#holster" onClick={this.showPlayers}>Roster</a></li>
              <li><a href="#stats" onClick={this.showStat}>Statistics</a></li>
              <li><a href="#schedule" onClick={this.showSchedule}>Schedule</a></li>
              <li><a href="#media" onClick={this.showPhotos}>Media</a></li>
            </ul>
          </nav>
      </div>
    )
  }
}



