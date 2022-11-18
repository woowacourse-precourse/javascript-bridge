const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('Bridge 테스트', () => {
  const MOCK = {
    SIZE: 6,
    UPPER: 1,
    LOWER: 0,
  };
  const generator = BridgeRandomNumberGenerator.generate;

  test('다리 테스트', () => {
    const [upper, lower] = BridgeMaker.makeBridge(MOCK.SIZE, generator);
    const sum = upper.reduce((acc, curr, idx) => acc + (curr + lower[idx]), 0);

    expect(upper).toHaveLength(MOCK.SIZE);
    expect(upper).not.toContain(2);
    expect(sum).toBe(MOCK.SIZE);
  });
});
