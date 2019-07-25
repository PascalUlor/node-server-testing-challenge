const express = require('express');
const Controller = require('../controllers/controllers');

const router = express.Router();

router.get('/', Controller.getUsers);

router.post('/', Controller.createUser);

router.delete('/:id', Controller.deleteUser);

module.exports = router;
