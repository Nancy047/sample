import React, { useEffect } from "react";
import "../styles/Sidebar.scss";

import { RiHome2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import prompt from '../components/Data/Prompt.json'

import Staricon from "../assets/staricon.png";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-logo">Activity</div>
      <div className="nav_container">
        <div className="side-prompts">
          
        </div>
        <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              History
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Code for to-do list application
            </a>
            <a href="#" className="sub_content">
              check for code optimization
            </a>
            <a href="#" className="sub_content">
              Generate test case for below code
            </a>
          </div>
        </div>

        {/* <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              Code
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Bug detector
            </a>
            <a href="#" className="sub_content">
              Code Explainer
            </a>
            <a href="#" className="sub_content">
              Code review
            </a>
          </div>
        </div>

        <div className="main_Content">
          <div className="main_heading">
            <a href="#" className="sub_headig">
              <span className="side-icons">
                <img src={Staricon}></img>
              </span>{" "}
              utilities
            </a>
          </div>
          <div className="Content">
            <a href="#" className="sub_content">
              Code Compalier
            </a>
            <a href="#" className="sub_content">
              Code Convertor
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
