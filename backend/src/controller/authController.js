const jwt = require("jsonwebtoken");
const pool = require("../../db");
const bcryptjs = require("bcryptjs");

exports.authUsuario = async (req, res) => {
  const { correo, pass } = req.body;

  try {
    //revisar si existe el usuario
    let usuario = await pool.query(
      `SELECT ID, pass FROM usuario where correo='${correo}'`
    );

    /* --------------convertir a json
       const passString = JSON.stringify(usuario);
        const passJson = JSON.parse(passString);*/

    if (usuario.length === 0) {
      return res
        .status(200)
        .json({ msg: "El USUARIO NO ESTA REGISTRADO", codigo: "rojo" });
    }

    // Revisar el password
    const passCorrecto = await bcryptjs.compare(pass, usuario[0].pass);

    if (!passCorrecto) {
      return res
        .status(200)
        .json({ msg: "PASSWORD INCORRECTO", codigo: "rojo" });
    }

    // Si todo es correcto Crear y firmar el JWT
    const payload = {
      usuario: {
        id: usuario[0].ID,
      },
    };

    // firmar el JWT
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;

        // Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(400).json({ msg: "Hubo un error al Iniciar Sesion" });
  }
};
