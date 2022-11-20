const BridgeMaker = require('../src/BridgeMaker');
const EXCEPTION_MESSAGE = require('../src/consts/Exception');

describe('다리 생성 테스트', () => {
  test('정수 예외 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    expect(() => {
      BridgeMaker.makeBridge('abc', mockGenerator);
    }).toThrow(EXCEPTION_MESSAGE.BRIDGE_SIZE.INTEGER);
  });

  test('범위 미만 예외 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    expect(() => {
      BridgeMaker.makeBridge(1, mockGenerator);
    }).toThrow(EXCEPTION_MESSAGE.BRIDGE_SIZE.RANGE);
  });

  test('범위 초과 예외 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    expect(() => {
      BridgeMaker.makeBridge(30, mockGenerator);
    }).toThrow(EXCEPTION_MESSAGE.BRIDGE_SIZE.RANGE);
  });
});
