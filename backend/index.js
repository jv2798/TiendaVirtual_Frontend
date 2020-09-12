const express = require("express");

const cors = require("cors");
require("dotenv").config();
const app = express();

//habilitar cors
app.use(cors());

app.use(express.json({ extended: true }));
//puerto
app.set("port", process.env.PORT || 5000);

//app.use("/api/token", require("./src/router/token"));
app.use("/api/usuarios", require("./src/router/usuarios"));
app.use("/api/auth", require("./src/router/auth"));
app.use("/api/correo", require("./src/router/email"));

app.listen(app.get("port"), () => {
  console.log("conectado");
});
