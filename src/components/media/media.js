import React from "react";
import { midia } from "./media_obj";
import "./media.css";

export class ShowMedia extends React.Component{
    constructor(props){
        super(props);

        let caption = "";
        let image = "";
        let link = "";
        let midia_array = [];

        for(const loop in midia){
            caption = midia[loop].caption;
            image = midia[loop].image;
            link = midia[loop].link;

            console.log(link);
            
            midia_array.push([caption,image,link]);
            console.log(midia_array);
        }

        this.state = {midia_array};
    }
    
    render(){
        return(
            <div id="m">
                <h2>Videos & Photos</h2>
                <div id="media_box">
                    {this.state.midia_array.map((midia,index) =>(
                        <div key={index} className="image_box">
                            <a href={midia[2]} target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img src={midia[1]} alt={midia[0]}/>
                                    <figcaption>{midia[0]}</figcaption>
                                </figure>
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}