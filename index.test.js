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
    
    test("Can create a board", async function() {
        const board1 = await Board.create({type: "French", description: "French Cheese Board", rating: 1})
        const board2 = await Board.create({type: "Swiss", description: "Swiss Cheese Board", rating: 2})
        expect(board1.type).toBe("French")
        expect(board2.type).toBe("Swiss")
        expect(board1.description).toBe("French Cheese Board")
        expect(board2.description).toBe("Swiss Cheese Board")
        expect(board1.rating).toBe(1)
        expect(board2.rating).toBe(2)
    })

    test("Can create a cheese", async function() {
        const cheese = await Cheese.create({title: "Brie", description: "Soft"})
        expect(cheese.title).toBe("Brie")
        expect(cheese.description).toBe("Soft")
    })

    test("Check User-Board association", async function() {
        const user = await User.findByPk(1)
        await user.addBoards([1,2])
        const board1 = await user.getBoards(user[1])
        console.log("board1", board1)
        const board2 = await user.getBoards(user[2])
        expect(board1[0].type).toBe("French")
        expect(board2[1].type).toBe("Swiss")
        expect(board1[0].description).toBe("French Cheese Board")
        expect(board2[1].description).toBe("Swiss Cheese Board")
        expect(board1[0].rating).toBe(1)
        expect(board2[1].rating).toBe(2)
        expect(board1[0].UserId).toBe(1)
        expect(board2[1].UserId).toBe(1)
    })
})