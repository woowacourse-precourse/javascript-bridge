const BridgeGame = require("../src/model/BridgeGame");
const BridgeResult = require("../src/model/BridgeResult");

describe("BridgeGame 도메인 테스트", () => {
    test("BridgeGame move 테스트", () => {
        const bridgeGame = new BridgeGame(["U", "D", "D"]);
        bridgeGame.move("U");
        expect(bridgeGame.getSuccess()).toEqual(true);
        expect(bridgeGame.getIdx()).toEqual(1);
    });

    test("BridgeGame move 실패 테스트", () => {
        const bridgeGame = new BridgeGame(["U", "D", "D"]);
        bridgeGame.move("U");
        bridgeGame.move("U");
        expect(bridgeGame.getSuccess()).toEqual(false);
        expect(bridgeGame.getIdx()).toEqual(2);
    });

    test("BridgeGame retry 테스트", () => {
        const bridgeGame = new BridgeGame(["U", "D", "D"]);
        bridgeGame.move("U");
        bridgeGame.move("U");
        bridgeGame.retry();
        expect(bridgeGame.getSuccess()).toEqual(true);
        expect(bridgeGame.getIdx()).toEqual(0);
        expect(bridgeGame.getCount()).toEqual(2);
        expect(bridgeGame.getbridgeResult().getUpper()).toEqual([]);
        expect(bridgeGame.getbridgeResult().getDowner()).toEqual([]);
    });
});

describe("BridgeResult 도메인 테스트", () => {
    test("BridgeResult pushResult 테스트", () => {
        const bridgeResult = new BridgeResult();
        bridgeResult.pushResult("U", true);
        expect(bridgeResult.getUpper()).toEqual(["O"]);
        expect(bridgeResult.getDowner()).toEqual([" "]);

        bridgeResult.pushResult("D", true);
        expect(bridgeResult.getUpper()).toEqual(["O", " "]);
        expect(bridgeResult.getDowner()).toEqual([" ", "O"]);

        bridgeResult.pushResult("U", false);
        expect(bridgeResult.getUpper()).toEqual(["O", " ", "X"]);
        expect(bridgeResult.getDowner()).toEqual([" ", "O", " "]);

        bridgeResult.pushResult("D", false);
        expect(bridgeResult.getUpper()).toEqual(["O", " ", "X", " "]);
        expect(bridgeResult.getDowner()).toEqual([" ", "O", " ", "X"]);
    });


    test("BridgeResult getResult 테스트", () => {
        const bridgeResult = new BridgeResult();
        bridgeResult.pushResult("U", true);
        expect(bridgeResult.getUpper()).toEqual(["O"]);
        expect(bridgeResult.getDowner()).toEqual([" "]);

        bridgeResult.pushResult("D", true);
        expect(bridgeResult.getUpper()).toEqual(["O", " "]);
        expect(bridgeResult.getDowner()).toEqual([" ", "O"]);

        const { upperString, downerString } = bridgeResult.getResult();

        expect(upperString).toEqual("[ O |   ]");
        expect(downerString).toEqual("[   | O ]");
    });
});

