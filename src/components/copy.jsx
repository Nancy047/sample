import React, { useEffect, useState } from "react";
import bot from "../assets/Bot.png";
import send_icon from "../assets/send_icon.png";
import logo from "../assets/logo.png";

const Chat = ({ data, submitData, loading, listData }) => {
  const [inputText, setInputText] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [conversation, setConversation] = useState("");
  const [showChat, setShowChat] = useState("");
  const [userInput, setUserInput] = useState("");

  const staticResponses = {
    hello: "Hi there! How can I assist you today?",
    "Check availability": "Please enter your address.",
    "2209 S ARIZONA RD,APACHE JUNCTION,AZ 85119,USA":
      "500mbps $50/mo, $1Gig $70/mo, $3Gig $100/mo 8Gig $165/mo. choose anyone from the above plans.",
    "1gig":
      "Your installation date is 10/11/2023 and time slots: 1pm to 2pm, 4pm to 5pm. Enter okay for payment process",
    "3gig":
      "Your installation date is 10/11/2023 and time slots: 1pm to 2pm, 4pm to 5pm.click okay for payment process",
    "8gig":
      "Your installation date is 10/11/2023 and time slots: 1pm to 2pm, 4pm to 5pm.click okay for payment process",
    "500mbps":
      "Your installation date is 10/11/2023 and time slots: 1pm to 2pm, 4pm to 5pm.click okay for payment process",
    "Order status":
      "To check your order status, click on 'Order status' button.",
    "View plan": "To view your plan, click on 'View plan' button.",
    "Offer details": "For offer details, click on 'Offer details' button.",
    Installation: "For installation, click on 'Installation' button.",
    "Shop fiber": "To shop for fiber, click on 'Shop fiber' button.",
    pay: "--------",
  };

  const handleUserInput = (userQuestion) => {
    // Hide the initial card content and show the chat conversation
    setShowChat(true);

    // Add the user's question to the conversation
    var currentConv = [...conversation, { type: "user", text: userQuestion }];

    // Check if there's a static response for the user's question
    if (staticResponses[userQuestion]) {
      const response = staticResponses[userQuestion];
      // Check if the response corresponds to the address
      if (userQuestion === "2209 S ARIZONA RD,APACHE JUNCTION,AZ 85119,USA") {
        // Display three cards containing header and description
        currentConv = [
          ...currentConv,
          {
            type: "bot",
            cards: [
              {
                cardHeader: "500mbps",
                cardPrice: "-($50/mo)",
                cardDescription: "",
                cardButtonLabel: "sign up",
                cardFeatures: ["30x faster", " ", "99.9% reliability"],
              },
            ],
          },
          {
            type: "bot",
            cards: [
              {
                cardHeader: "500mbps",
                cardPrice: "-($50/mo)",
                cardDescription: "",
                cardButtonLabel: "sign up",
                cardFeatures: ["30x faster", " ", "99.9% reliability"],
              },
            ],
          },
          {
            type: "bot",
            cards: [
              {
                cardHeader: "500mbps",
                cardPrice: "-($50/mo)",
                cardDescription: "",
                cardButtonLabel: "sign up",
                cardFeatures: ["30x faster", " ", "99.9% reliability"],
              },
            ],
          },
        ];
        console.log("userQuestion", currentConv);
        setConversation(currentConv);
      } else {
        // Add the bot's response to the conversation
        currentConv = [
          ...currentConv,
          { type: "bot", text: response ? response : "No data" },
        ];
        setConversation(currentConv);
      }
    } else {
      currentConv = [...currentConv, { type: "bot", text: "No data" }];
      setConversation(currentConv);
    }
    setConversation(currentConv);
  };

  const handleSendMessage = () => {
    const userQuestion = inputText.trim();
    if (userQuestion) {
      // alert("hi")

      handleUserInput(userQuestion);
      // Clear the user input
      setInputText("");
    }
  };

  const [isTyping, setIsTyping] = useState(false);
  const [prompt, setPrompt] = useState([
    {
      prompt: "Check Part number for the given MAT code",
      desc: "For part number verification, kindly input the mat code associated with the component to ensure its accurate identification.",
      follow: true,
    },
    {
      prompt: "Cable supported for the cabinet ",
      desc: "what are the types of cables supported for the cabinet",
      follow: true,
    },
    {
      prompt: "What are ALTOS GEL-FREE Cables?",
      desc: "What model Altos gel-free cable is this mat code using",
      follow: true,
    },
    {
      prompt: "Splitter details?",
      desc: "What are part number, MAT code and description available for splitters",
      follow: true,
    },
  ]);
  const [isPrSelected, setIsPrSelected] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState({});
  return (
    <div className="chatdata_container">
      <div className="conversation">
        {!isTyping && !conversation && !conversation[0] && (
          <div className="prompt_container">
            {prompt.map((pr) => {
              return (
                <div
                  className="prompt"
                  onClick={() => {
                    setIsPrSelected(true);
                    setSelectedPrompt(pr);
                    if (pr.follow) {
                      setDefaultText(pr.prompt);
                      setInputText("");
                    } else {
                      setDefaultText("");
                      setInputText(pr.prompt);
                    }
                  }}
                >
                  <h3 className="pr_title">{pr.prompt}</h3>
                  <p className="pr_desc">{pr.desc}</p>
                </div>
              );
            })}
          </div>
        )}
        {conversation.length > 0 && (
          <div className="list_conversation">
            {console.log("coming", conversation)}
            {conversation.map((item, index) => {
              return (
                <div key={index} className={`chat-${item.type}`}>
                  {item.type === "user" ? (
                    <div className="chaticon-user">
                      <div className="user-text">{item.text}</div>
                      <div className="user_profile">SJ</div>
                    </div>
                  ) : (
                    <div className="bot_text">
                      {/* <img src={bot} alt="" /> */}
                      <div>{item.text}</div>
                    </div>
                  )}
                </div>
              );
            })}
            {loading && (
              <div className="bot_text">
                {/* <img src={bot} alt="" /> */}
                <div id="wave" className="chat-bot">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="textarea_container">
        <div className="input">
          {defaultText && <p className="default_question">{defaultText} | </p>}
          <input
            type="text"
            placeholder={defaultText ? "Enter the MAT Code" : "Ask me anything"}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            // on={() => handleSendMessage()}
          />
        </div>
        <div className="send_button">
          <img src={send_icon} onClick={() => handleSendMessage()} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
