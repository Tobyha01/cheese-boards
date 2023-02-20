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
        const cheese1 = await Cheese.create({title: "Brie", description: "Soft"})
        const cheese2 = await Cheese.create({title: "Edam", description: "Hard"})
        expect(cheese1.title).toBe("Brie")
        expect(cheese2.title).toBe("Edam")
        expect(cheese1.description).toBe("Soft")
        expect(cheese2.description).toBe("Hard")
    })

    test("Check User-Board association", async function() {
        const user = await User.findByPk(1)
        await user.addBoards([1,2])
        const board1 = await user.getBoards(user[1])
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

    test("Check Board-Cheese association", async function() {
        const board = await Board.findByPk(1)
        await board.addCheeses([1,2])
        const cheeseBoard = await Board.findByPk(1, {include: [{model: Cheese, as: "Cheeses"}]})
        expect(cheeseBoard.Cheeses[0].title).toBe("Brie")
        expect(cheeseBoard.Cheeses[1].title).toBe("Edam")
        expect(cheeseBoard.Cheeses[0].description).toBe("Soft")
        expect(cheeseBoard.Cheeses[1].description).toBe("Hard")
    })
})