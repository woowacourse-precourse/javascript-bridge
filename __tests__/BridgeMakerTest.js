const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator")

describe('랜덤 다리 만들기 테스트', () => {
    test('원하는 수 만큼 다리 제작되는지 테스트', () => {
        const bridgeBlock = BridgeMaker.makeBridge(12,BridgeRandomNumberGenerator.generate);
        expect(bridgeBlock.length).toEqual(12); 
    })
})