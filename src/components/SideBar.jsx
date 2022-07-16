import React from "react";

import Avatar from "../img/profile.jpg"
import "../styles/components/sidebar.sass"
import InformationContainer from "./InformationContainer";
import SocialNetworks from './SocialNetworks';

const SideBar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Terto" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">Download currículo</a>
        </aside>
    );
};

export default SideBar;