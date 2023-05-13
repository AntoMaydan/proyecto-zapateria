const express = require("express");
const {todosLosProductos} = require ("./controlesApi");
const cors = require("cors");

const api = express();
const port = 4001;



api.use(express.json());
api.use(cors());// por si el navegador nos tira un error porque estamos queriendo consumir de un dominio a otro 
api.use(express.urlencoded({extended:true}))//para poder recibir la info de un formulario en formato de objeto 

api.get("/todosLosArticulos",todosLosProductos);

api.listen(port,()=>{
    console.log("conectados al puerto  " + port)
})


