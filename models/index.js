const {User} = require("./User")
const {Cheese} = require("./Cheese")
const {Board} = require("./Board")

Board.belongsTo(User)
User.hasMany(Board)

Board.belongsToMany(Cheese, {through: "cheeseBoard", as: "Cheeses"})
Cheese.belongsToMany(Board, {through: "cheeseBoard", as: "Boards"})

module.exports = {
    User,
    Cheese,
    Board
}