const nodemailer = require("nodemailer");

exports.Enviar = async (req, res) => {
  const { correo, camisas, total, telefono, nombreC } = req.body;

  contentHtml = `
 <h1>Lista de Pedidos</h1>
  ${camisas.map(
    (parte) =>
      "<li>" +
      "<b>" +
      "Codigo: " +
      "</b>" +
      parte.codigo +
      " --> " +
      "<b>" +
      " Talla: " +
      "</b>" +
      parte.talla +
      " --> " +
      "<b>" +
      " Cantidad: " +
      "</b>" +
      parte.cantidad +
      "</li>"
  )}
 <b> Total: C$ ${total} </b> <br/>
 <b> Cliente:  ${nombreC} </b><br/>
 <b> Telefono:  ${telefono} </b>


 `;

  // console.log(html);
  try {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "practicajv2798@gmail.com",
        pass: "Varga$2798",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // Definimos el email
    let mailOptions = {
      from: `'${correo}'<foo@gmail.com>`,
      to: "practicajv2798@gmail.com",
      subject: "Nueva Solicitud de Pedido",
      html: contentHtml,
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ msg: "mensaje no enviado" });
      } else {
        res.json({ msg: "Mensaje Enviado" });
      }
    });
  } catch (error) {
    res.status(400).json({ msg: "Hubo un error al enviar el mensaje" });
  }
};

exports.Contacto = async (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;

  contentHtml = `
 <h1>Nuevo Contacto</h1><br/>
 
 <b> Nombre: </b>  ${nombre} <br/>
 <b> Telefono: </b> ${telefono} <br/>
  <b> Mensaje: </b> ${mensaje} 


 `;

  // console.log(html);
  try {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "practicajv2798@gmail.com",
        pass: "Varga$2798",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // Definimos el email
    let mailOptions = {
      from: `'${correo}'<foo@gmail.com>`,
      to: "practicajv2798@gmail.com",
      subject: "Mensaje de Consulta",
      html: contentHtml,
    };

    // Enviamos el email
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ msg: "mensaje no enviado", codigo: "rojo" });
      } else {
        res.json({ msg: "Mensaje Enviado", codigo: "verde" });
      }
    });
  } catch (error) {
    res.status(400).json({ msg: "Hubo un error al enviar el mensaje" });
  }
};
