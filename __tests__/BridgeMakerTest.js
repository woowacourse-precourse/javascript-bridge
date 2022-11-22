const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('BridgeMaker 객체의 테스트입니다.', () => {
  test('1보다 작은 다리의 길이가 입력되면 예외를 throw 한다.', () => {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;

    expect(() => BridgeMaker.makeBridge(0, generateRandomNumber)).toThrow();
    expect(() => BridgeMaker.makeBridge(-1, generateRandomNumber)).toThrow();
  });

  test('다리의 길이가 문자열로 입력되면 예외를 throw 한다.', () => {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;

    expect(() => BridgeMaker.makeBridge('3', generateRandomNumber)).toThrow();
  });
});
