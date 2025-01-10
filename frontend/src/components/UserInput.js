import React, { useState } from 'react';
import { sendMessageToAI } from '../utils/api';

const UserInput = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    addMessage({ sender: 'user', text: input });
    const response = await sendMessageToAI(input);
    addMessage({ sender: 'ai', text: response });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="user-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInput;
