const BridgeGame = require("../src/BridgeGame");
const { ERROR } = require('../src/Messages');

describe("BridgeGame 테스트", () => {
    test.each([
        ["1"],
        ["A"],
        ["UD"]
    ])("다리 이동 예외 테스트", (input) => {
        const bridgeGame = new BridgeGame();
        expect(() => bridgeGame.setPosition(input)).toThrow(ERROR.INVALID_MOVE_TYPE);
    });
});