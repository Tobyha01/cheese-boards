const {sequelize, DataTypes} = require("../db")

const Cheese = sequelize.define("cheese", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = {Cheese}