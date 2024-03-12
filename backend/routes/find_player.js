//backend/routes/find_player.js

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

// Define the route for finding the closest player
router.post('/find_player', playerController.findClosestPlayer);

module.exports = router;
