const express = require('express');
const routes = express.Router();

routes.get('/', (req,res)=>{
    return console.log("oi")
    
})

module.exports = routes;