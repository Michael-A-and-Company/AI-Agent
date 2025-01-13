const getAIResponse = (message) => {
  // Example response generation, could integrate GPT-3, spaCy, etc.
  if (message.toLowerCase().includes('hello')) {
    return 'Hi! How can I help you?';
  }
  return 'I am not sure how to respond to that, can you ask something else?';
};

module.exports = { getAIResponse };
