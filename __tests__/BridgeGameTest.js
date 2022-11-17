const BridgeGame = require("../src/BridgeGame");
const { ERROR } = require('../src/Messages');

describe("BridgeGame 테스트", () => {
    test.each([
        ["1"],
        ["A"],
        ["UD"]
    ])("다리 이동 예외 테스트", (input) => {
        const bridgeGame = new BridgeGame();
        expect(() => {
            bridgeGame.move(input)
        }).toThrow(ERROR.INVALID_MOVE_TYPE);
    });

    test.each([
        [["U", "D", "D"]],
        [["D", "U", "D"]],
    ])("이동 로그 테스트", (moveTypes) => {
        const bridgeGame = new BridgeGame();
        for (let moveType of moveTypes)
            bridgeGame.setMoveHistory(moveType);

        expect(bridgeGame.getMoveHistory()).toEqual(moveTypes);
    });
});