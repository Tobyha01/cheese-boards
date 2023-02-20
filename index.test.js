const {sequelize, DataTypes} = require("./db")
const {User, Board, Cheese} = require("./models/index")

describe("User, Board and Cheese test suite", function() {
    beforeAll(async function() {
        await sequelize.sync({force: true})
    })

    test("Can create a user", async function() {
        const user = await User.create({name: "Steve", email: "steve123@hotmail.com"})
        expect(user.name).toBe("Steve")
        expect(user.email).toBe("steve123@hotmail.com")
    })
    
})