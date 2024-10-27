¡Claro! Para crear una cuenta de correo electrónico con tu propio dominio (at) de forma gratuita, tienes algunas opciones. Aquí te dejo algunas sugerencias:
Opciones para Crear una Cuenta de Correo Gratuita con Tu Propio Dominio

    Gmail: Aunque no puedes usar un dominio personalizado directamente con Gmail, puedes crear una cuenta gratuita y usarla para enviar correos personalizados.

    Proton Mail: Ofrece una cuenta gratuita con un dominio personalizado (por ejemplo, tu nombre de usuario@proton.me)

. Es una opción segura y cifrada

    .

    Zoho Mail: Ofrece una cuenta gratuita con un dominio personalizado (por ejemplo, tu nombre de usuario@zoho.com). Es una buena opción para proyectos personales y pequeñas empresas.

    Tutanota: Ofrece una cuenta gratuita con un dominio personalizado (por ejemplo, tu nombre de usuario@tutanota.com). Es conocido por su enfoque en la privacidad y la seguridad.

Pasos para Crear una Cuenta en Proton Mail

    Visita el sitio web de Proton Mail: proton.me/mail

.

Crea una cuenta gratuita: Selecciona "Obtener Proton gratis" en el menú de precios

.

Elige tu nombre de usuario: Ingresa el nombre de usuario deseado y selecciona un dominio personalizado (por ejemplo, tu nombre de usuario@proton.me)

    .

    Configura tu cuenta: Sigue las instrucciones en pantalla para completar el proceso de creación de la cuenta.

Integración con Vue.js y Express

Una vez que tengas tu cuenta de correo configurada, puedes usar servicios como nodemailer para enviar correos electrónicos desde tu aplicación de Vue.js y Express. Aquí tienes un ejemplo básico de cómo hacerlo:
Instalación de Nodemailer
bash

npm install nodemailer

Configuración de Nodemailer
javascript

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'protonmail',
  auth: {
    user: 'tu_nombre_de_usuario@proton.me',
    pass: 'tu_contraseña'
  }
});

Enviar un Correo Electrónico
javascript

const mailOptions = {
  from: 'tu_nombre_de_usuario@proton.me',
  to: 'destinatario@example.com',
  subject: 'Hola desde Vue.js y Express',
  text: 'Este es un correo enviado desde Vue.js y Express.',
  html: '<p>Este es un correo enviado desde Vue.js y Express.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Correo enviado: ' + info.response);
});

Con estos pasos, podrás crear una cuenta de correo electrónico gratuita con tu propio dominio y enviar correos electrónicos desde tu aplicación de Vue.js y Express. ¡Espero que esto te sea útil para tu proyecto de clase! ¿Hay algo más en lo que pueda ayudarte?