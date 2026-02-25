import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir el formulario
app.post("/send", async (req, res) => {
  const { nombre, apellido, telefono, email, mensaje } = req.body;

  // Configuración del transporte SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ej: smtp.gmail.com
    port: 587,
    secure: false,
    auth: {
      user: "agencia.alphaloop@gmail.com",
      pass: "Soft.26T9"
    }
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${email}>`,
      to: "agencia.alphaloop@gmail.com",
      subject: "Mensaje del formulario de contacto",
      text: `Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`
    });

    res.send("Mensaje enviado correctamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el mensaje.");
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});