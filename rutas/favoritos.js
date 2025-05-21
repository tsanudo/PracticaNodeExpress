const express = require('express');
const FavoritosService = require('../servicios/favoritosService');

function favoritosAPI(app) {
    const router = express.Router();
    app.use('/api/favoritos', router);

    const favoritosService = new FavoritosService();

    // Obtener todos los favoritos
    router.get('/', async (req, res) => {
        try {
            const favoritos = await favoritosService.getFavoritos();
            res.json(favoritos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Añadir favorito
    router.post('/', async (req, res) => {
        try {
            const noticia = req.body;
            const creado = await favoritosService.crearFavorito({ noticia });
            res.status(201).json(creado);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Eliminar favorito por título
    router.delete('/', async (req, res) => {
        try {
            const noticia = req.body;
            await favoritosService.borrarFavoritoPorTitulo(noticia);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}

module.exports = favoritosAPI;
