const express = require('express');
const { handleMessage } = require('../controllers/aiController');

const router = express.Router();

router.post('/query', handleMessage);

module.exports = router;
