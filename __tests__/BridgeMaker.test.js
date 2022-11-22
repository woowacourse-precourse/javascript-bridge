const BridgeMaker = require('../src/BridgeMaker.js');
const { BRIDGE } = require('../src/const.js')
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const bridgeLengthArray = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
test.each(bridgeLengthArray)("다리 생성 길이 테스트", (bridgeLength) => {
    expect(
        BridgeMaker.makeBridge(bridgeLength,BridgeRandomNumberGenerator.generate)
    ).toHaveLength(bridgeLength)
})

test("다리 생성 내부 요소 테스트", () => {
    const bridge = BridgeMaker.makeBridge(20,BridgeRandomNumberGenerator.generate);
    expect(
        BridgeMaker.makeBridge(20,BridgeRandomNumberGenerator.generate)
    ).toEqual(expect.arrayContaining(BRIDGE.INPUT_RANGE))
})