const BridgeGame = require("../src/BridgeGame");

describe("플레이어 이동 테스트", () => {
    bridgeGame = new BridgeGame();

    bridgeGame.setBridge(['U', 'U', 'U', 'U', 'D']);
    
    test("플레이어 이동", () => {
        [true, true, true, true, false].forEach((output) => {
            expect(bridgeGame.move('U')).toEqual(output);
        })
    });

    test("retry 이후 플레이어 이동", () => {
        bridgeGame.retry();
        ['U', 'U', 'U', 'U', 'D'].forEach((input) => {
            expect(bridgeGame.move(input)).toEqual(true);
        })
    });
});