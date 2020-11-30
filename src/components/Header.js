import React from "react"
import { NavLink} from "react-router-dom"

import logo from "./images/header-images/logo.svg"
import name from "./images/header-images/name2.svg"
import linkedIn from "./images/header-images/linkedin.svg"
import gitHub from "./images/header-images/github.svg"
import arrow from "./images/header-images/arrow.svg"

export const Header = () => {

    return(
        <div className="headerPosition">
            <div className="headerData">
                <div className="logo">
                    <img width="100%" height="100%" src={logo} alt="Logo"/>
                </div>
                <div className="notLogo">
                    <div className="nameBackground">
                        <img className="center" height="50px" src={name} alt="Name"/>
                    </div>
                    <div className="info-alt">
                        <div>
                            <a href="mailto:zach@zachheckert.com">EMAIL ME!</a>
                        </div>
                        <div>
                            <a href="tel:18013195001:">+1-801-319-5001</a>
                        </div>
                        <div>
                            <img className="iconAlign" height="20"src={arrow} alt="Download arrow"/>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/zachheckert/" rel="noopener noreferrer" target="_blank"><img className="iconAlign" height="20"src={linkedIn} alt="GitHub icon"/></a>
                        </div>
                        <div>
                            <a href="https://github.com/zheckert" rel="noopener noreferrer" target="_blank"><img className="iconAlign" height="20"src={gitHub} alt="LinkedIn icon"/></a>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            <NavLink to="/" exact={true} activeClassName="highlighted">FULL STACK</NavLink>
                        </div>
                        <div>
                            <NavLink to="/voiceover" activeClassName="highlighted">VOICEOVER</NavLink>
                        </div>
                        <div>
                            <NavLink to="/design" activeClassName="highlighted">DESIGN</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}