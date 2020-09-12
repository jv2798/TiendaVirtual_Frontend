const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
router.post("/", usuarioController.AddUsuario);
router.post("/mostrar", usuarioController.MostrarUsuario);

module.exports = router;
