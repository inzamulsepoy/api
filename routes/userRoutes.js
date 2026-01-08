const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

router.post('/submit', createUser);
router.get('/all', getUsers);

module.exports = router;
