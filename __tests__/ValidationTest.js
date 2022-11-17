const BridgeGameError = require('../src/BridgeGameError');
const ErrorMessages = require('../src/constants/ErrorMessages');
const Validation = require('../src/Validation');

describe('다리 길이 입력 테스트', () => {
  test('다리 길이가 숫자가 아닌 경우 예외처리한다.', () => {
    const input = 'abc';
    const notANumberError = new BridgeGameError(ErrorMessages.DATA_TYPE);

    expect(() => Validation.Bridge(input)).toThrowError(notANumberError);
  });

  test('다리 길이는 3이상 20이하가 아닌 경우 예외처리한다.', () => {
    const inputs = ['0', '30'];
    const inputLengthError = new BridgeGameError(ErrorMessages.BRIDGE_LENGTH);

    inputs.forEach((input) => {
      expect(() => Validation.Bridge(input)).toThrowError(inputLengthError);
    });
  });
});
