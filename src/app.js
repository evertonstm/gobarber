// const express = require('express');
// const routes = require('./routes');

//usando o sucrase podemos utilisar:
import express from 'express';
import routes from './routes';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }
  routes(){
    this.server.use(routes)

  }
}

// module.exports = new App().server;

//usando o sucrase podemos utilisar:
export default new App().server;