const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMarker 클래스 테스트', () => {
  test('⭐ 첫번째 인자로 넣은 size 크기 만큼 다리가 만들어집니다.', () => {
    const bridgeSize = 5;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    expect(BridgeMaker.makeBridge(bridgeSize, generateRandomNumber).length).toBe(5);
  });

  test('⭐ 만들어진 bridge는 "U" 또는 "D"로만 이루어져 있습니다.', () => {
    const bridgeSize = 3;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const hasUorD = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber).every((command) => {
      return command === 'U' || command === 'D';
    });

    expect(hasUorD).toBeTruthy();
  });
});
