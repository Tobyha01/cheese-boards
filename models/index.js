const {User} = require("./User")
const {Cheese} = require("./Cheese")
const {Board} = require("./Board")

Board.belongsTo(User)
User.hasMany(Board)



module.exports = {
    User,
    Cheese,
    Board
}