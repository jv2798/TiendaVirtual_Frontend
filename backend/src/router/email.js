const express = require("express");
const router = express.Router();
const token = require("../middleware/token");

const emailController = require("../controller/emailController");

router.post("/", token, emailController.Enviar);
router.post("/contacto", emailController.Contacto);

module.exports = router;
