// const {Router} = require('express');

// usando o sucrase podemos utilisar:
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// module.exports = routes

// usando o sucrase podemos utilisar:
export default routes;
