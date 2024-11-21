import React from "react";
import "./style.css";
interface BotMessageProps {
  content: string;
  role: "user" | "bot";
}

const BotMessage: React.FC<BotMessageProps> = ({ role, content }) => {
  return (
    <div>
      <div className={`item ${role}`}>
        {role === "bot" && (
          <div className="pt-2">
            <img className="icon" src="assets/img/me.png" alt="me" />
          </div>
        )}
        <div className="msg">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BotMessage;
