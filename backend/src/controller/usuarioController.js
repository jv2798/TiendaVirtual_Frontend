const jwt = require("jsonwebtoken");
const pool = require("../../db");
const bcryptjs = require("bcryptjs");
const { use } = require("../router/auth");

exports.AddUsuario = async (req, res) => {
  const { nombre, apellido, telefono, correo, pass } = req.body;

  try {
    let Verificar = await pool.query(
      `SELECT ID FROM usuario WHERE correo='${correo}'`
    );

    if (Verificar.length !== 0) {
      return res.status(200).json({
        msg: "El CORREO YA HA SIDO REGISTRADO ANTERIORMENTE",
        codigo: "rojo",
      });
    }

    const salt = await bcryptjs.genSalt(5);
    const email = await bcryptjs.hash(pass, salt);

    const newUsuario = {
      nombre,
      apellido,
      telefono,
      correo,
      pass: email,
    };

    //insertando usuario
    await pool.query(`INSERT INTO usuario set ?`, [newUsuario]);

    //extraer usuario registrado
    let idU = await pool.query(
      `SELECT ID FROM usuario where correo='${correo}'`
    );

    const payload = {
      user: {
        id: idU[0].ID,
      },
    };

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
    console.log(error);
    res.status(400).json({ msg: "Hubo un error en la peticion" });
  }
};

exports.MostrarUsuario = async (req, res) => {
  let { correo } = req.body;

  try {
    let user = await pool.query(
      `SELECT correo,telefono,nombre,apellido FROM usuario WHERE correo='${correo}'`
    );
    if (user.length !== 0) {
      res.status(200).json({
        correo: user[0].correo,
        nombre: user[0].nombre,
        apellido: user[0].apellido,
        telefono: user[0].telefono,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: "Hubo un error en la consulta" });
  }
};
