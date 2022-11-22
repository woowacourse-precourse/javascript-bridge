const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리 생성 테스트', () => {
  test('다리 길이와 같은 길이의 랜덤 배열이 생성된다.', () => {
    const size = 3;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    expect(bridge.length).toEqual(size);
  });
});
