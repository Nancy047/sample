import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainSidebar from "./MainSidebar";
import Sidemenu from "../components/Sidemenu"
import Chat from "./Chat";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Home = () => {
  const [conversation, setConversation] = useState([]);
  const [webSocket, setWebSocket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([
    {
      title: "Part Number",
      question: ["test"],
      answer: ["test"],
    },
  ]);
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    if (webSocket) {
      return;
    }
    const socket = new W3CWebSocket("ws://34.122.87.129:8000/ws");
    
    socket.onopen = function (event) {
      console.log('Connected to server. Start chatting! Type "quit" to exit.');
      setWebSocket(socket);
    };

    socket.onmessage = function (event) {
      const message = event.data;
      handleUserInput(message);
    };

    socket.onerror = function (error) {
      console.error("WebSocket error:", error);
    };

    socket.onclose = function (event) {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (webSocket) {
        socket.close();
        setWebSocket();
      }
    };
  }, [webSocket]);

  useEffect(() => {
    console.log("con ", conversation);
  }, [conversation]);
  const handleUserInput = (data) => {
    setConversation((prev) => [
      ...prev,
      {
        type: "bot",
        text: data,
      },
    ]);
    setLoading(false);
  };
  const handleSendMessage = (message) => {
    console.log("comeHere", message);
    if (
      message.toLowerCase() === "mat code" ||
      message.toLowerCase().includes("check cable supported for the cabinet")
    ) {
      setConversation((prev) => [
        ...prev,
        {
          type: "user",
          text: message,
        },
      ]);
      setLoading(true);
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          {
            type: "bot",
            text: "",
            messageType: "customMessage",
          },
        ]);
        setLoading(false);
      }, 2000);
    } else if (
      message ===
      "show multiport terminal products for 4 port 50 ft with toneable cable"
    ) {
      console.log("dadad", message);
      setConversation((prev) => [
        ...prev,
        {
          type: "user",
          text: message,
        },
      ]);
      setLoading(true);
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          {
            type: "bot",
            text: "",
            messageType: "customMessage1",
          },
        ]);
        setLoading(false);
      }, 2000);
    } else if (
      message.toLowerCase().includes("check part number for the given mat code")
    ) {
      console.log("part", message);
      setConversation((prev) => [
        ...prev,
        {
          type: "user",
          text: message,
        },
      ]);
      setLoading(true);
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          {
            type: "bot",
            text: "The part number for the MAT code 1269981 is SAAP431U41A31U4S00.",
          },
        ]);
        setLoading(false);
      }, 2000);
    } else if (message === "Corning and Commscope") {
      console.log("dadad", message);
      setConversation((prev) => [
        ...prev,
        {
          type: "user",
          text: message,
        },
      ]);
      setLoading(true);
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          {
            type: "bot",
            text: "",
            messageType: "customMessage2",
          },
        ]);
        setLoading(false);
      }, 2000);
    } else {
      console.log("dass", message);
      if (
        webSocket &&
        webSocket.readyState === WebSocket.OPEN &&
        message.trim() !== ""
      ) {
        // if (conversation.length === 0) {
        //   console.log(message, conversation);
        //   webSocket.send(new Date().valueOf());
        // }
        webSocket.send(message);
        if (message.toLowerCase() === "quit") {
          webSocket.close();
        } else {
          setConversation((prev) => [
            ...prev,
            {
              type: "user",
              text: message,
            },
          ]);
        }
        setLoading(true);
      } else {
        setConversation((prev) => [
          ...prev,
          {
            type: "user",
            text: message,
          },
        ]);
        setLoading(true);
        setTimeout(() => {
          setConversation((prev) => [
            ...prev,
            {
              type: "bot",
              text: "Connetion Issue",
            },
          ]);
          setLoading(false);
        }, 2000);
      }
    }
  };
  return (
    <div className="home_container">
      {/* <Navbar /> */}
      <div className="home_body">
        <Sidemenu currentTab={"home"}/>
        <MainSidebar/>

        <div className="chat_container">
          <Chat
            submitData={handleSendMessage}
            loading={loading}
            data={currentData}
            listData={conversation}
            currentTab={"home"}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;