import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "../features/Layout";
import { MessageList } from "../features/MessageList";
import { ChatList } from "../features/ChatList";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout 
              chatList={<ChatList />}
              messageList={
                <h1 
                  style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "#808080", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    fontSize: "24px"}}
                  >
                    Выберите чат
                </h1>
              }
            />
          }
        />
        <Route
          path=":roomId"
          element={
            <Layout 
              chatList={<ChatList />}
              messageList={<MessageList />} 
            />
          }
        />
      </Routes>
    </>
  );
};