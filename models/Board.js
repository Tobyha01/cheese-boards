const {sequelize, DataTypes} = require("../db")

const Board = sequelize.define("Board", {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
})

module.exports = {Board}