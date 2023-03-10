import React from "react";
import "./roster.css";
import { goalies} from "./roster_info";
import { def } from "./roster_info";
import { mid } from "./roster_info";
import { fw } from "./roster_info";
import { GrInstagram } from "react-icons/gr";
import {BsFillCameraReelsFill} from "react-icons/bs";
import { coach } from "./roster_info";


//Work on correctly printing roster table

export class Roster extends React.Component{
    
    render(){
        return(
            <div id="tab">
                <Table/>
            </div>
        )
    }
}

function* toChunks(array, boundary) {
    for (let i = 0; i < array.length; i += boundary) {
      yield array.slice(i, i + boundary)
    }
}

const Players = ({ rows }) => {
    return (
      <>
        {rows.map((row, row_index) => (
          <tr key={row_index}>

            {row.map((cell, column_index) => (
                <td key={column_index} className="cells">
                    <div id="information">
                      {cell.src !== "" ? 
                          <img className="pic" alt={cell.p_name} src={cell.src}/>
                        :

                        <div></div>
                        
                      }

                        <p className="na">{cell.p_name}</p>
                        <p className="la">{cell.l_name}</p>
                        {/* <p className="num">{cell.number}</p> */}
                        <p className="city">{cell.city}</p>
                        <p className="cnt">{cell.cnt}</p>

                        {cell.position !== "" ? 
                          <p className="cnt">{cell.position}</p>
                        :

                        <div></div>
                        
                        }

                        {cell.insta !== "" ? 
                         <a href={cell.insta} target="_blank" rel="noopener noreferrer"><GrInstagram className="inst"/></a>
                        :

                        <div></div>
                        
                        }

                        {cell.video !== "" ? 
                         <a href={cell.video} target="_blank" rel="noopener noreferrer"><BsFillCameraReelsFill className="inst"/></a>
                        :

                        <div></div>
                        
                        }
                       
                    </div>
                </td>
            ))}
          </tr>
        ))}
      </>
    )
}

  const Table = () => {
    const goal = [...toChunks(goalies, 3)];
    const defs = [...toChunks(def,3)];
    const midf = [...toChunks(mid,3)];
    const fwds = [...toChunks(fw,3)];
    const coaches = [...toChunks(coach,3)];

    return (
      <div id="tab">
        <table>

          <thead>
            <tr>
              <td colSpan={3}>
                <h4>Goalkeepers</h4>
              </td>
            </tr>
          </thead>

          <tbody>
            <Players rows={goal} />
          </tbody>
          
          <thead>
            <tr>
              <td colSpan={3}>
                <h4>Defenders</h4>
              </td>
            </tr>
          </thead>

          <tbody>
            <Players rows={defs} />
          </tbody>

          <thead>
            <tr>
              <td colSpan={3}>
                <h4>Midfielders</h4>
              </td>
            </tr>
          </thead>

          <tbody>
            <Players rows={midf} />
          </tbody>

          <thead>
            <tr>
              <td colSpan={3}>
                <h4>Forwards</h4>
              </td>
            </tr>
          </thead>

          <tbody>
            <Players rows={fwds} />
          </tbody>

          <thead>
            <tr>
              <td colSpan={3}>
                <h4>Coaches</h4>
              </td>
            </tr>
          </thead>

          <tbody>
            <Players rows={coaches} />
          </tbody>
          
        </table>
      </div>
    )
  }

