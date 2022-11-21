const BridgeGame = require("../src/BridgeGame");

/**
 * 여러 커맨드로 move시키는 함수
 * @param {BridgeGame} GAME 브릿지 게임 객체
 * @param {string[]} commands 커맨드 여러 개를 담은 배열
 */
const moveMultipleCommands = (GAME, commands) => {
    for (let command of commands) {
        GAME.move(command);
    }
}

describe("move 테스트", () => {
    test("이동 반영 테스트", () => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        moveMultipleCommands(GAME, ["U", "D", "U"]);

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
        moveMultipleCommands(GAME, ["U", "D", "D"]);
        expect(GAME.crossedAll()).toBe(true);
    })

    test("crossedAll 거짓 테스트", () => {
        const GAME = new BridgeGame(["U", "D", "D"]);
        moveMultipleCommands(GAME, ["U", "D", "U"]);
        expect(GAME.crossedAll()).toBe(false);
    })
})

describe("retry 테스트", () => {
    const GAME = new BridgeGame(["U", "D", "D"]);
    GAME.move("U");
    GAME.retry();

    test("지나온 길 초기화 테스트", () => {
        expect(GAME.passed).toEqual([]);
    })

    test("시도 횟수 갱신 테스트", () => {
        expect(GAME.count).toBe(2);
    })

    test("경로 불변 테스트", () => {
        moveMultipleCommands(GAME, ["U", "D", "D"]);
        expect(GAME.crossedAll()).toBe(true);
    })
})

describe("문자열 표시 테스트", () => {
    const GAME = new BridgeGame(["U", "D", "D"]);
    moveMultipleCommands(GAME, ["U", "D", "U"]);

    test("윗줄 테스트", () => {
        const RESULT = GAME.getComparisonResultArray("U");
        expect(RESULT).toEqual(["O", " ", "X"]);
    })

    test("아랫줄 테스트", () => {
        const RESULT = GAME.getComparisonResultArray("D");
        expect(RESULT).toEqual([" ", "O", " "]);
    })
})