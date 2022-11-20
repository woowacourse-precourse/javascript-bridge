/* eslint-disable */

const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const BridgeMaker = require('../src/BridgeMaker');

const testFunction = BridgeRandomNumberGenerator.generate;
jest.mock('../src/BridgeRandomNumberGenerator');

const doMultipleMocks = (arr) => {
  arr.forEach((currentTest) => {
    testFunction.mockReturnValueOnce(currentTest);
  });
};

describe('[BridgeMaker] 랜덤 값이 결정되면 올바른 다리 데이터를 반환해야 한다.', () => {
  test('', () => {
    doMultipleMocks([1, 0, 0, 1, 1, 1]);
    const testResult = BridgeMaker.makeBridge(6, testFunction);
    expect(testResult).toEqual(['U', 'D', 'D', 'U', 'U', 'U']);
  });

  test('', () => {
    doMultipleMocks([1, 0, 1]);
    const testResult = BridgeMaker.makeBridge(3, testFunction);
    expect(testResult).toEqual(['U', 'D', 'U']);
  });

  test('', () => {
    doMultipleMocks([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0]);
    const testResult = BridgeMaker.makeBridge(20, testFunction);
    expect(testResult).toEqual([
      'D',
      'D',
      'D',
      'D',
      'D',
      'U',
      'U',
      'U',
      'U',
      'U',
      'D',
      'D',
      'U',
      'U',
      'U',
      'D',
      'U',
      'D',
      'U',
      'D',
    ]);
  });
});
