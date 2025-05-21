const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()


const { config } = require('./config/index');
const favoritosAPI = require('./rutas/favoritos');

// Permitir solo el frontend de Angular
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

favoritosAPI(app);

app.listen(config.port, () => {
    console.log(`servidor escuchando en ${config.port}`);
})