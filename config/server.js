const express = require('express');
const app = express();
const port = process.env.PORT
const routes = require('../src/routers/routes')

require('dotenv').config();

app.use(express.json())

app.use(routes);



//require('../src/controllers/produtoController')
//require('../migration/syncModels');
//require('../src/controllers/fabricanteController')

app.listen(port,()=>{
    console.log("Aplicação rodando na porta: "+ process.env.PORT)
})