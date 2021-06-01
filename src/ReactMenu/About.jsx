import React from "react";
import Navbar from "./Navbar";
import web from "../images/about.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
           <Common name = "Welcome to About page"
            imgsrc={web} 
           visit="/contact" 
           btname="Contact Now"
            />
        </>
    );
};

export default About;