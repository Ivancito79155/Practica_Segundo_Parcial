// const { getAllUsers } = require('../controllers/controllers')
// const routers = require("express").Router()
// routers.get("/db", getAllUsers);

const { Router } = require("express");
const {
  rutaGetAllUsers,
  rutaGetUserById,
  rutaPostUser,
  rutaPutUser,
  rutaDeleteUser,
} = require("../controllers/controllers");

const router = Router();

router.get("/db", rutaGetAllUsers);

router.get("/db/:id", rutaGetUserById);

router.post("/db", rutaPostUser);

router.put("/db/:id", rutaPutUser);

router.delete("/db/:id", rutaDeleteUser);

module.exports = router;
