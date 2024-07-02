const db = require("../../db");

function rutaGetAllUsers(req, res) {
  if (db.length === 0) {
    return res.send("La base de datos NO contienen registros actualmente.");
  }
  res.json(db);
}

function rutaGetUserById(req, res) {
  const id = parseInt(req.params.id);
  const getRegister = db.find((User) => User.id === id);
  if (!getRegister) {
    res.send("No existe el registro que esta buscando.");
  }
  res.json(getRegister);
}

function rutaPostUser(req, res) {
  const id = new Date().getTime();
  let { User, Edad } = req.body;
  User = User.trim();
  if (typeof Edad === "string") {
    return res.status(400).send("Datos invalidos");
  }
  if (!User || !Edad) {
    return res.send("Faltan datos para agregar el registro");
  }
  const getRegister = db.find((db) => db.User === User);
  if (getRegister) {
    return res.status(401).send("Ya existe este usuario.");
  }
  db.push({
    id: id,
    User: User,
    Edad: Edad,
  });
  res.send("Se agregó un nuevo registro de usuario");
}

function rutaPutUser(req, res) {
  const id = parseInt(req.params.id);
  let { User, Edad } = req.body;
  const getRegister = db.find((User) => User.id === id);
  if (!getRegister) {
    return res.send("No existe el registro que desea modificar.");
  }
  if (typeof Edad === "string") {
    return res.status(400).send("Datos invalidos");
  }
  if (!User || !Edad) {
    return res.send("Faltan datos para agregar al registro");
  }
  const getIndex = db.findIndex((User) => User.id === id);
  db[getIndex].User = User.trim();
  db[getIndex].Edad = +Edad;
  res.send("Se actualizaron los datos");
}

function rutaDeleteUser(req, res) {
  const id = parseInt(req.params.id);
  const getRegister = db.find((User) => User.id === id);
  if (!getRegister) {
    return res.status(401).send("No existe el registro que desea eliminar.");
  }
  const getIndex = db.find((User) => User.id === id);
  db.splice(getIndex, 1);
  res.send("Se eliminó un registro");
}

module.exports = {
  rutaGetAllUsers,
  rutaGetUserById,
  rutaPostUser,
  rutaPutUser,
  rutaDeleteUser,
};
