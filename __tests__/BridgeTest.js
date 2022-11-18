const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('Bridge 테스트', () => {
  const MOCK = {
    SIZE: 6,
    UP: 'U',
    DOWN: 'D',
  };
  const generator = BridgeRandomNumberGenerator.generate;

  test('다리 생성 테스트', () => {
    const bridge = BridgeMaker.makeBridge(MOCK.SIZE, generator);

    expect(bridge).toHaveLength(MOCK.SIZE);
    expect(bridge).toContain(MOCK.UP || MOCK.DOWN);
  });
});
