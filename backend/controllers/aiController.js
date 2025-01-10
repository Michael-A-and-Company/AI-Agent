const { getAIResponse } = require('../utils/aiUtils');

const handleMessage = async (req, res) => {
  const { message } = req.body;
  const reply = await getAIResponse(message);
  res.json({ reply });
};

module.exports = { handleMessage };