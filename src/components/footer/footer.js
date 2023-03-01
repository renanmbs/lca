import React from "react";
import { GrInstagram } from "react-icons/gr";
import {MdMessage} from "react-icons/md";
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
                    <a className="icon2" href="https://www.instagram.com/direct/t/340282366841710300949128221792683533288" target="_blank" rel="noopener noreferrer"><MdMessage/></a>
                    <a className="icon2" href="https://www.lcaeagle.org/" target="_blank" rel="noopener noreferrer"><TfiWorld/></a>
                    <address>Address: 2352 E Hwy 193, Layton, UT 84040</address>
                    <div id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12025.36864947577!2d-111.9222188!3d41.1052178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8753013106890fe1%3A0x7209f18b4109bc4b!2sLayton%20Christian%20Academy!5e0!3m2!1sen!2sus!4v1677703842945!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="LCA Map"></iframe>
                    </div>
                </div>
            </footer>
        )
    }
}