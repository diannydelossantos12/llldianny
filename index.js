const express = require("express");
const app = express();
    


app.get("/nani", (req, res)=>{
    let nombre = req.query.nombre
    res.send(`<h1>HOLA: , ${nombre}</h1>`);
})

app.get("/comida", (req, res)=>{
    res.send("Comida");
})


app.listen(3000, ()=>{
    console.log("Servidor en puerto 3000");
})