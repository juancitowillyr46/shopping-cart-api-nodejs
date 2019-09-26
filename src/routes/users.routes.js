const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const middlewares = require('../middlewares');

router.get('/', middlewares.validateToken, userController.getUsers);

router.get('/:id', [middlewares.validateToken, middlewares.validateIdParam], userController.getUserById);

router.post('/', userController.postUser);

router.put('/:id', middlewares.validateIdParam, userController.putUser);

router.delete('/:id', middlewares.validateIdParam, userController.deleteUser);

module.exports = router;