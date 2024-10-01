const Sequelize = require('sequelize');

// se conectar instanciando
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize