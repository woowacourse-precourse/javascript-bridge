const { ERROR_PREFIX, ERROR_MESSAGES } = require('../../src/constants/Error');

const BridgeGameValidation = require('../../src/validation/BridgeGameValidation');

describe('다리 게임 유효성 검사 테스트', () => {
  test('숫자가 아닌 문자 입력 테스트', () => {
    const inputs = ['1d3', 'dㅐ', 'ㅇㅇ', '1/', '&%^'];
    const errorMessage = `${ERROR_PREFIX} ${ERROR_MESSAGES.onlyNumber}`;

    inputs.forEach((input) => {
      expect(() => BridgeGameValidation.validate(input)).toThrow(errorMessage);
    });
  });

  test('범위를 벗어나는 숫자 입력 테스트', () => {
    const inputs = ['1', '0', '2', '21'];
    const errorMessage = `${ERROR_PREFIX} ${ERROR_MESSAGES.outOfRange}`;

    inputs.forEach((input) => {
      expect(() => BridgeGameValidation.validate(input)).toThrow(errorMessage);
    });
  });
});
