const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMaker 기능 테스트', () => {
  const testBridge = BridgeMaker.makeBridge(
    5,
    BridgeRandomNumberGenerator.generate
  );
  test('다리 생성 시 입력한 길이만큼의 다리 배열이 생성된다.', () => {
    expect(testBridge.length).toEqual(5);
  });

  test('다리 생성 시 랜덤으로 생성된 배열의 요소는 U와 D로 한정된다.', () => {
    const uniqueTestBridgeSet = new Set(testBridge);
    expect(uniqueTestBridgeSet.size < 3).toBeTruthy();
  });
});
