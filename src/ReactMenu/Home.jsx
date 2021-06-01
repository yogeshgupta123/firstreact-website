import React from "react";
import Navbar from "./Navbar";
import web from "../images/web.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
            name = "Grow your buisness with"
            imgsrc={web} 
           visit="/service" 
           btname="Get Started"
            />
        </>
    );
};

export default Home;