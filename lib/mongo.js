const {MongoClient, ObjectId} = require('mongodb');
const {config} = require('../config/index');

const USER = config.DB_USER;
const PASSWORD = config.DB_PASSWORD;
const DB_HOST = config.DB_HOST;
const DB_NAME = config.DB_NAME;
const DB_PORT = config.DB_PORT;

// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/?authSource=admin&replicaSet=pruebaAlberto-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@mongosw.qp1j5.mongodb.net/?retryWrites=true&w=majority&appName=mongosw`;

class MongoLib {
    async connect() {
        if (!MongoLib.client) {
            try {
                MongoLib.client = await MongoClient.connect(MONGO_URI);
                console.log("Conectado a la BBDD");
            } catch (error) {
                console.error("Error al conectar a la base de datos", error);
                throw new Error("Error al conectar a la base de datos");
            }
        }
        // Siempre devuelve la base de datos
        return MongoLib.client.db('Periodico');
    }

    async getAll(collection) {
        try {
            let db = await this.connect();
            let result = await db.collection(collection).find({}).toArray();
            return result;
        } catch (error) {
            console.error("Error al obtener los datos", error);
            throw new Error("Error al obtener los datos");
        }
    }

    async getOne(collection, query) {
        try {
            const db = await this.connect();
            const result = await db.collection(collection).findOne(query);
            return result;
        } catch (error) {
            console.error("Error al obtener el documento", error);
            throw new Error("Error al obtener el documento");
        }
    }

    async create(collection, data) {
        try{
            let db = await this.connect();
            const result = await db.collection(collection).insertOne(data);
            return result.insertedId;
        }catch (error) {
            console.error("Error al crear el documento", error);
            throw new Error("Error al crear el documento");
        }
    }

    async deleteOne(collection, query) {
        let db = await this.connect();
        return db.collection(collection).deleteOne(query);
    }
}

module.exports = MongoLib;