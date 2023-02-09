import React from "react";
import "./roster.css";
import { goalies} from "./roster_info";
import { def } from "./roster_info";
import { mid } from "./roster_info";
import { fw } from "./roster_info";
import pacheco from "../info/photos/pacheco.png"


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
                        <img className="pic" alt={"pacheco"} src={pacheco}/>
                        <p className="na">{cell.p_name}</p>
                        <p className="num">{cell.number}</p>
                        <p className="city">{cell.city}</p>
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


        </table>
      </div>
    )
  }

