const BridgeGame = require("../src/BridgeGame");
const { ERROR } = require('../src/Messages');

describe("BridgeGame 테스트", () => {
    test.each([
        ["1"],
        ["A"],
        ["UD"]
    ])("다리 이동 예외 테스트", (bridgeSize) => {
        const bridgeGame = new BridgeGame();
        expect(bridgeGame.vaildateBridgeSize(bridgeSize)).toEqual(false);
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