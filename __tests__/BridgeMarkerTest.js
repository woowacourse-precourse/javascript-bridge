const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMarker 클래스 테스트', () => {
  test('⭐ 첫번째 인자로 넣은 size 크기 만큼 다리가 만들어집니다.', () => {
    const bridgeSize = 5;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    expect(BridgeMaker.makeBridge(bridgeSize, generateRandomNumber).length).toBe(5);
  });
});
