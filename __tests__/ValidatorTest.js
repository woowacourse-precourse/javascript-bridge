const { ERROR_MESSAGE } = require('../src/Constants/message');
const Validator = require('../src/Validator');

describe('Validator 테스트', () => {
  test('checkCorrectDirection - 배열을 전달받아도 올바르게 체크하는지 검사', () => {
    // Given
    const directions = ['U', 'K'];

    // Then
    expect(() => {
      Validator.checkCorrectDirection(directions);
    }).toThrow(ERROR_MESSAGE.unexpected_input);
  });

  test('checkCorrectDirection - 배열이나 문자 이외의 값이 전달되면 예외 처리', () => {
    // Given
    const tokens = [3, {}];

    // Then
    tokens.forEach((dir) => {
      expect(() => Validator.checkCorrectDirection(dir)).toThrow(
        ERROR_MESSAGE.unexpected_input
      );
    });
  });
});
