const BridgeMaker = require('../src/BridgeMaker');
const ConstValue = require('../src/ConstValue');

describe('다리 생성 테스트', () => {
  test('정수 예외 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    expect(() => {
      BridgeMaker.makeBridge('abc', mockGenerator);
    }).toThrow(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_A_NUMBER_EXCEPTION);
  });
});
