const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking-app", "root", "Aaa666aaa", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
