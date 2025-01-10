import React from 'react';

const ChatBot = ({ messages }) => {
  return (
    <div className="chat-bot">
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatBot;
