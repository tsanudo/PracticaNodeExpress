const MongoLib = require('../lib/mongo');

class FavoritosService {
    constructor() {
        this.collection = 'NOTICIAS'; // Cambiado a la colección correcta
        this.mongoDB = new MongoLib();
    }

    async getFavoritos() {
        const favoritos = await this.mongoDB.getAll(this.collection);
        return favoritos || [];
    }

    async crearFavorito({ noticia }) {
        const existe = await this.mongoDB.getOne(this.collection, { title: noticia.title });
        if (existe) return existe;
        const favoritoCreadoId = await this.mongoDB.create(this.collection, noticia);
        return favoritoCreadoId;
    }

    async borrarFavoritoPorTitulo(noticia) {
        const favoritoBorradoId = await this.mongoDB.deleteOne(this.collection, { title: noticia.title  });
        return favoritoBorradoId;
    }
}

module.exports = FavoritosService;
