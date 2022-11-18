const Bridge = require("../src/model/Bridge");
const BridgeGame = require("../src/model/BridgeGame");
const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR } = require('../src/Error');

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

describe("BridgeGame 테스트", () => {
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
        [["1", "0", "1"], ["U", "D", "U"], ["O", " ", "O"], [" ", "O", " "]],
    ])("이동 로그 출력 반환 테스트", (bridge, moveTypes, upHistory, downHistory) => {
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
        expect(() => {
            for (let moveType of moveTypes)
                bridgeGame.move(moveType);
        }).toThrow(ERROR.FAIL_MOVE);
    });

    test.each([
        ["1"],
        ["D"],
        ["ZD"],
        ["@"],
    ])("게임 재시작 예외 테스트", (command) => {
        const bridgeGame = new BridgeGame();
        expect(() => { bridgeGame.validateCommand(command) }).toThrow(ERROR.INVALID_COMMAND);
    });

    test("게임 리셋 테스트", () => {
        const bridge = ["1", "0", "1"];
        mockRandoms(bridge);

        const bridgeGame = new BridgeGame();
        bridgeGame.retry();

        expect(bridgeGame.getTryCount()).toEqual(2);
        expect(bridgeGame.getPosition()).toEqual(-1);
        expect(bridgeGame.getMoveHistory()).toEqual([]);
    })
});