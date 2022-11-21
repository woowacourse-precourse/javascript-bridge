const BridgeMaker = require("../src/BridgeMaker");
const randomBridge = require("../src/BridgeRandomNumberGenerator");
describe("다리만들기 테스트", () => {
  test("입력받은 다리 길이 만큼 다리를 생성해야 한다.", () => {
    //given
    const bridgeLength = 3;
    const makeRandomBridgeFunc = randomBridge.generate;
    //when
    const result = BridgeMaker.makeBridge(bridgeLength, makeRandomBridgeFunc);
    //then
    expect(result).toHaveLength(bridgeLength);
  });
});
