const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeRandomNumberGenerator 클래스 테스트', () => {
  const isInRange = function isInRange(number) {
    const numbers = [0, 1];

    return numbers.includes(number);
  };

  test('0과 1 중 무작위 값 생성', () => {
    const randomNumber = BridgeRandomNumberGenerator.generate();

    expect(isInRange(randomNumber)).toBe(true);
  });
});
