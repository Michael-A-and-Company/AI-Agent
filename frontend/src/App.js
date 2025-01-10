import React, { useState } from 'react';
import './styles/app.css';
import ChatBot from './components/ChatBot';
import UserInput from './components/UserInput';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="app">
      <h1>AI Agent</h1>
      <div className="chat-container">
        <ChatBot messages={messages} />
        <UserInput addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
