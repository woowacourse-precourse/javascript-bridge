const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("BridgeMaker 테스트", () => {
    test("makeBridge 테스트", () => {
        const bridgeSize = 10;
        expect(BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate).length).toEqual(bridgeSize);
    })
})