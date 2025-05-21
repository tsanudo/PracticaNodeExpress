require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT | 3001,
    DB_HOST : 'localhost', 
    DB_PORT : 27017,
    DB_NAME : 'Periodico',
    DB_USER: 'tsanudoduinf',
    DB_PASSWORD: '1234'
}

module.exports = { config }