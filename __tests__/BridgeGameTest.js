const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

describe("다리 건너기 테스트", () => {
    test("다리 이동 테스트", () => {
        const bridgeGame = new BridgeGame(["U", "D", "D"]);
        let actual = bridgeGame.move("U");       
        
        expect(actual[0]).toEqual(["O"]);
    });

});