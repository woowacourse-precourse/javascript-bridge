const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const generateNumber = (number) => () => number;

describe('BridgeMaker 테스트', () => {
  test('callback 함수로 BridgeRandomNumberGenerator.generate()인 경우', () => {
    const direction = ['D', 'U'];
    const directions = BridgeMaker.makeBridge(8, BridgeRandomNumberGenerator.generate);
    expect(direction).toEqual(expect.arrayContaining(directions));
  });

  test.each([[0], [1]])('callback 함수로 0 또는 1을 생성하는 경우', (number) => {
    const direction = ['D', 'U'];
    const directions = BridgeMaker.makeBridge(4, generateNumber(number));
    expect(direction).toEqual(expect.arrayContaining(directions));
  });

  test('callback 함수의 리턴 값이 0 또는 1이 아닌 경우 예외처리', () => {
    expect(() => {
      BridgeMaker.makeBridge(8, generateNumber(2));
    }).toThrow('[ERROR]');
  });
});
