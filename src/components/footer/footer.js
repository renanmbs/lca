import React from "react";
import { GrInstagram } from "react-icons/gr";
import {MdOutlineEmail} from "react-icons/md";
import {TfiWorld} from "react-icons/tfi"
import "./footer.css";

//Falta: telefone lucas, email lucas, email lca  soccer

export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <h4>Contact Us</h4>
                <div className="icons">
                    <a className="icon" href="https://www.instagram.com/lcamsoccer/" target="_blank" rel="noopener noreferrer"><GrInstagram/></a>
                    <a className="icon2" href="/"><MdOutlineEmail/></a>
                    <a className="icon2" href="https://www.lcaeagle.org/" target="_blank" rel="noopener noreferrer"><TfiWorld/></a>
                    <address>Address: 2352 E Hwy 193, Layton, UT 84040</address>
                </div>

                <div className="cont">
                    <h5>Contact The Coach</h5>
                    <h6>Coach Lucas Almeida</h6>
                    <p>Email: Lucas Almeida</p>
                    <p className="last">Phone:</p>

                </div>
            </footer>
        )
    }
}