const [sequelize, DataTypes] = require("../db")

const Board = sequelize.define("Board", {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.NUMBER
})

module.exports = {Board}