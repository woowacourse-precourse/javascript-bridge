const Bridge = require("../src/Bridge");
const BridgeGame = require("../src/BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

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

    test.each([
        [["1", "0", "1"], ["U", "D"], ["O", " "], [" ", "O"]],
        [["1", "0", "1"], ["U", "D", "D"], ["O", " ", " "], [" ", "O", "X"]],
    ])("이동 로그 데이터 반환 테스트", (bridge, moveTypes, upHistory, downHistory) => {
        mockRandoms(bridge);
        const bridgeGame = new BridgeGame();
        bridgeGame.setBridge(new Bridge(bridge.length));
        for (let moveType of moveTypes)
            bridgeGame.move(moveType);
        expect(bridgeGame.getUpDownHistory()).toEqual([upHistory, downHistory]);
    });

    test.each([
        [["1", "0", "1"], ["U", "D", "D"]],
        [["1", "0", "1"], ["U", "U"]],
        [["1", "0", "1"], ["D"]],
    ])("이동 실패 테스트", (bridge, moveTypes) => {
        mockRandoms(bridge);
        const bridgeGame = new BridgeGame();
        bridgeGame.setBridge(new Bridge(bridge.length));

        for (let moveType of moveTypes)
            bridgeGame.move(moveType);

        expect(bridgeGame.isFailMove(bridgeGame.getUpDownHistory())).toEqual(true);
    });
});