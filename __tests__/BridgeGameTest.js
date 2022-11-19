const BridgeGame = require("../src/BridgeGame");

describe("move 테스트", () => {
    test("이동 반영 테스트", () => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        GAME.move("U");
        GAME.move("D");
        GAME.move("U");

        expect(GAME.passed).toEqual(["U", "D", "U"]);
    })

    test.each(["U", "D"])("goingCorrect 테스트", (input) => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        const EXPECTATION = { "U": true, "D": false };
        GAME.move(input);
        expect(GAME.isGoingCorrect()).toBe(EXPECTATION[input]);
    })

    test("crossedAll 참 테스트", () => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        GAME.move("U");
        GAME.move("D");
        GAME.move("D");
        expect(GAME.crossedAll()).toBe(true);
    })

    test("crossedAll 거짓 테스트", () => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        GAME.move("U");
        GAME.move("D");
        GAME.move("U");
        expect(GAME.crossedAll()).toBe(false);
    })
})