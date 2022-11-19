const { generate } = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');

describe('BridgeMakerTest', () => {
  const size = 5;
  const bridge = BridgeMaker.makeBridge(size, generate);

  test('만들어진 다리는 배열이다.', () => {
    expect(Array.isArray(bridge)).toBe(true);
  });

  test('지정된 길이만큼 다리가 생성된다.', () => {
    expect(bridge).toHaveLength(size);
  });

  test('다리는 "D"와 "U"로만 이루어졌다.', () => {
    bridge.forEach((value) => {
      expect(['D', 'U']).toContain(value);
    });
  });
});
