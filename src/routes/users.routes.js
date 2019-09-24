const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const userMiddlewares = require('../middlewares');

router.get('/', userController.getUsers);

router.get('/:id', userMiddlewares.validateIdParam, userController.getUserById);

router.post('/', userController.postUser);

router.put('/:id', userMiddlewares.validateIdParam, userController.putUser);

router.delete('/:id', userMiddlewares.validateIdParam, userController.deleteUser);

router.post('/login', userController.login);

module.exports = router;