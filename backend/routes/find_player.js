// backend/routes/find_player.js

const express = require('express');
const router = express.Router();
const { submitAnswer } = require('../controllers/PlayerController');

router.post('/submit-answer', submitAnswer);

module.exports = router;
