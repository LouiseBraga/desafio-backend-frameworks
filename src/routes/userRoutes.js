const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define o caminho
router.post('/usuarios', UserController.createUser);

module.exports = router;