// const {Router} = require('express');

// usando o sucrase podemos utilisar:
import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
// module.exports = routes

// usando o sucrase podemos utilisar:
export default routes;
