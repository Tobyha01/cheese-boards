const {sequelize, DataTypes} = require("../db")

const Cheese = sequelize.define("Cheese", {
    type: DataTypes.STRING,
    desciption: DataTypes.STRING
})

module.exports = {Cheese}