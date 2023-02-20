const {sequelize, DataTypes} = require("../db")

const Cheese = sequelize.define("Cheese", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = {Cheese}