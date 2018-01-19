import express from 'express';
import userController from './user.controllers';

var Route = express.Router();

Route.post('/login', userController.findUser)
Route.post('/signup', userController.createUser)

module.exports = Route;