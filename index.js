require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conexión a la base de datos MongoDB usando Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.error('Error al conectar a la base de datos MongoDB:', err));

// Ruta GET en la raíz de la aplicación
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log(`La aplicación de Express está escuchando en http://localhost:${port}`);
});
