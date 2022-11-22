const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

describe("플레이어 이동 테스트", () => {
    mockRandoms([1, 1, 1, 1, 0]);
    bridgeGame = new BridgeGame(5);
    
    test("플레이어 이동", () => {
        const playerMove = [ 'U', 'U', 'D'];
        playerMove.forEach((moving) => bridgeGame.move(moving));

        expect(bridgeGame.checkResult()).toEqual(0);
    });

    test("retry 이후 플레이어 이동", () => {
        bridgeGame.retry();

        const playerMove = [ 'U', 'U', 'U', 'U', 'D'];
        playerMove.forEach((moving) => bridgeGame.move(moving));

        expect(bridgeGame.checkResult()).toEqual(1);
    });
});