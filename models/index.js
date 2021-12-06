const Sequelize = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.dialect,
    logging: false,
    pool:{
        max: process.env.pool.max,
        min: process.env.pool.min,
        acquire: process.env.pool.acquire,
        idle: process.env.pool.idle
    }
});

sequelize.authenticate()
.then(() => {
    console.log('Connected!');
})
.catch((err) => {
    console.log("Error Occured: " + err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product")(sequelize, Sequelize);
db.variant = require("./variant")(sequelize, Sequelize);


module.exports = db;