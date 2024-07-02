const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(require("./src/routers/routers.CRUD.js"));

app.listen(7900, console.log("Servidor en puerto 7900"));
