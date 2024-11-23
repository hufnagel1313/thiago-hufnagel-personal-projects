import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/userTypedSelector";
import { MessageModel } from "../../../models/MessageModel";
import BotMessage from "../SectionChatbot/BotMessage/BotMessage";
import "./SectionChatbot.css";

const SectionChatbot: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messageList, setMessageList] = useState([] as MessageModel[]);
  const { postMessage } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.chatbot);

  const scrollToBottom = () => {
    const chatBox = document.querySelector(".chat-box");
    console.log("chatBox", chatBox);
    chatBox?.scrollTo(0, chatBox.scrollHeight);
    console.log("scrollHeight", chatBox?.scrollHeight);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.target.value);
  };

  const convertMessgeListToString = (messageList: MessageModel[]) => {
    return messageList
      .map((message) => {
        return `${message.role}: ${message.content}`;
      })
      .join("\n");
  };

  const handleSendMessageClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!userMessage) return;
    const message = {
      id: uuidv4(),
      date: new Date(),
      role: "user",
      content: userMessage,
    };
    setMessageList([...messageList, message]);
    const messageListString = convertMessgeListToString(messageList);
    postMessage(userMessage, messageListString);
    setUserMessage("");
    scrollToBottom();
  };

  useEffect(() => {
    console.log("data", data);
    if (data) {
      const message = {
        id: uuidv4(),
        date: new Date(),
        role: "bot",
        content: data,
      };
      setMessageList([...messageList, message]);
    }
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-star text-theme"></i>
          SHOWCASE
        </div>
        <div className="mb-10 mt-7 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Chat with my <span className="font-semibold text-theme">_bot</span>
          </h2>
          <p className="mt-3.5 md:mt-5 subtitle max-w-sectionTitle">
            A chatbot designed to share my professional experience, skills, and
            expertise. &nbsp;
            <span className="font-semibold text-theme">Ask away!</span>
          </p>
        </div>
        {/*./section-title--> */}

        <div className="wrapper">
          <div className="title">
            Thiago Hufnagel's <span>_bot</span>
          </div>
          <div className="chat-box">
            <BotMessage role="bot" content="Hello, how can I help you?" />
            {messageList.map((message) => (
              <BotMessage
                key={message.id}
                role={message.role as "user" | "bot"}
                content={message.content}
              />
            ))}
          </div>

          <div className="typing-area">
            <div className="input-field">
              <textarea
                onChange={handleTextChange}
                placeholder="Type your message"
                required
                value={userMessage}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSendMessageClick(event as any);
                  }
                }}
              />
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                aria-label="Send Message"
                onClick={handleSendMessageClick}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChatbot;
