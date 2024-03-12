import React, { useEffect, useState } from "react";
import SideBar from "../Components/Sidebar";
import Sidemenu from "../components/Sidemenu"
import ChatPage from "/Users/support/Desktop/Codeyy/codeyy/src/Components/ChatPage.jsx";
import "../Styles/Mainpage.scss";
import headingIcon from "/Users/support/Desktop/Codeyy/codeyy/src/Assets/headingicon.png";
import promptIcon from "/Users/support/Desktop/Codeyy/codeyy/src/Assets/prompt-icon.png";
import Audio from "/Users/support/Desktop/Codeyy/codeyy/src/Assets/Audio.png";
import uploadIcon from "/Users/support/Desktop/Codeyy/codeyy/src/Assets/uploadIcon.png";
import sendIcon from "/Users/support/Desktop/Codeyy/codeyy/src/Assets/sendIcon.png";

const Mainpage = ({onInputChange}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPrSelected, setIsPrSelected] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState({});
  const [defaultText, setDefaultText] = useState("");
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [conversation, setConversation] = useState([]);
  const [showChat, setShowChat] = useState(false);


 

  const [course, setCourse] = useState([
    {
      courseheading: "Generate code for simple to-do list application",
      descrip:
        "Learn Selenium automationtesting and framework building in this hands-on workshop for testers and developers.",
      follow: true,
    },
    {
      courseheading: "wertyui",
      descrip:
        "Learn Selenium automationtesting and framework building in this hands-on workshop for testers and developers.",
      follow: true,
    },
    {
      courseheading: "Generadcfvgbhj",
      descrip:
        "Learn Selenium automationtesting and framework building in this hands-on workshop for testers and developers.",
      follow: true,
    },
  ]);

  return (
    <div className="main_page_container home_container">
      <Sidemenu />
      <SideBar />

      <div className="home_contents">
      {!showChat?(

        <div className="home_contents_container">
          <div className="home_heading-content">
            <div className="heading-content-1">
              <img src={headingIcon}></img>
            </div>
            <div className="heading-content-2">
              <h3>CODE GENERATOR</h3>
              <p>
                Learn Selenium automationtesting and framework building in this
                hands-on workshop
              </p>
            </div>
          </div>

          <div className="Dropdown-group">
            <div className="Dropdown-1">
              <select>
                <option>Generate code</option>
                <option>select 2</option>
                <option>select 3</option>
              </select>
            </div>

            <div className="Dropdown-1">
              <select>
                <option>Professional</option>
                <option>select 2</option>
                <option>select 3</option>
              </select>
            </div>

            <div className="Dropdown-1">
              <select>
                <option>English</option>
                <option>select 2</option>
                <option>select 3</option>
              </select>
            </div>
          </div>

          <div className="home_course_container">
            {course.map((cr) => {
              return (
                <div className="cardd_container">
                  <div
                    className="cardd_body"
                    onClick={() => {
                      setIsPrSelected(true);
                      setSelectedPrompt(cr);
                      if (cr.follow) {
                        setDefaultText(cr.courseheading);
                        setInputText("");
                      } else {
                        setDefaultText("");
                        setInputText(cr.courseheading);
                      }
                    }}
                  >
                    <div className="cardd_body_head">
                      <div className="course-icom">
                        <img src={promptIcon}></img>
                      </div>
                      <div className="course-heading">{cr.courseheading}</div>
                    </div>
                    <div className="cardd_body_desc">{cr.descrip}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="main_page_container">
            <div className="textarea-container">
              <div className="wrap">
                <form class="search-container" >
                  <a href="#" style={{ margin: "0px 13px" }}>
                    <img src={Audio} className="voice-icon"></img>
                  </a>
                  {defaultText && (
                    <p className="default_question">{defaultText}</p>
                  )}

                  <input
                    type="text"
                    id="search-bar"
                    // placeholder="What can I help you with today?"
                    placeholder={defaultText ? "" : "Ask me anything"}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  
                  ></input>

                  <a href="#">
                    <img src={uploadIcon} className="upload-icon"></img>
                  </a>
                  <a href="#">
                    <img src={sendIcon} className="search1-icon"></img>
                  </a>
                </form>
               
              </div>
            </div>
          </div>
        </div>
        ):(
          <ChatPage conversation={conversation} />
        )}
      </div>

    </div>

  );
};

export default Mainpage;

