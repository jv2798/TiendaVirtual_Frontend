const jwt = require("jsonwebtoken");

exports.VerificarToken = function (req, res) {
  // Leer el token del header
  const token = req.header("x-auth-token");

  // Revisar si no hay token
  if (!token) {
    return res
      .status(200)
      .json({ msg: "No hay Token, permiso no válido", codigo: "rojo" });
  }

  // validar el token

  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;
    res.json({ msg: "TOKEN VALIDO" });
  } catch (error) {
    res.status(401).json({ msg: "Token no válido" });
  }
};
