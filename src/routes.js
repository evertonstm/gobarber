// const {Router} = require('express');

//usando o sucrase podemos utilisar:
import {Router} from 'express';

const routes = new Router();

routes.get('/', (req,res)=>{
  return res.json({message:'hello World'})
})


// module.exports = routes

//usando o sucrase podemos utilisar:
export default routes;