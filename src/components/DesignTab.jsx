import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainSidebar from "./MainSidebar";
import Sidemenu from "../components/Sidemenu";
import Chat from "./Chat";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import send_icon from "../assets/sendIcon.png";
import Staricon from "../assets/staricon.png";
import uploadIcon from "../assets/uploadIcon.png";
import "../styles/designtab.css";
import Imagechat from "./Imagechat";
import responseIcon from "../assets/response-icon.png";
import Upload from "../components/Upload";

const DesignTab = () => {
  const [inputText, setInputText] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [uploadStatus,setUploadStatus] = useState(false);


  const submitData = (message) => {
    console.log("ganesh", message);
  };

  const senddatatoparent = (message)=>{
    console.log("nithin",message);
    if(message == "uploaded successfully"){
      setUploadStatus(true);
    }
  
  }
  
  return (
    <div className="home_container">
      {/* <Navbar /> */}
      <div className="home_body">
        <Sidemenu currentTab={"design"} />
        <MainSidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="chatdata_container">
             {uploadStatus && <div className="bot_text">
                <div>
                  <img className="response-icon" src={responseIcon}></img>
                </div>
                <div className="chat-bot">
                  <div>
                    <div>
                      <div>
                        <pre className="card-suggestion">
                          File Uploaded successfully!!.. Now you can proceed your Questions..
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
              {/* 
              <div className="upload-file">
              <div className="Add-file">
                {" "}
                <Upload />
              </div>
              uploadSuccess
              </div>
              */}
              <Upload senddatatoparent={senddatatoparent} />
          </div>
        </div>

        <div className="textarea_container">
          <div className="input">
            {defaultText && <p className="default_question">{defaultText} </p>}
            <input
              type="text"
              placeholder={defaultText ? "" : "Ask me anything..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setIsTyping(true);
                  submitData(inputText);
                  setDefaultText("");
                  setInputText("");
                }
              }}
            />
          </div>
          <div className="upload-img">
            <img className="upload-icon" src={uploadIcon}></img>
          </div>
          <div className="send_button">
            <img
              className="send-icon"
              src={send_icon}
              onClick={() => {
                setIsTyping(true);
                submitData(inputText);

                setDefaultText("");
                setInputText("");
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTab;
