const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeDirection = require('../src/domain/bridge/BridgeDirection');

const generateNumber = (number) => () => number;

describe('BridgeDirection 클래스 테스트', () => {
  test('callback 함수로 BridgeRandomNumberGenerator.generate()인 경우', () => {
    const directions = ['D', 'U'];
    const direction = BridgeDirection.generate(BridgeRandomNumberGenerator.generate);
    expect(directions).toContain(direction);
  });

  test.each([[0], [1]])('callback 함수의 리턴 값이 0 또는 1인 경우', (number) => {
    const directions = ['D', 'U'];
    const direction = BridgeDirection.generate(generateNumber(number));
    expect(directions).toContain(direction);
  });

  test('callback 함수의 리턴 값이 0 또는 1이 아닌 경우 예외처리', () => {
    expect(() => {
      BridgeDirection.generate(generateNumber(2));
    }).toThrow('[ERROR]');
  });
});
