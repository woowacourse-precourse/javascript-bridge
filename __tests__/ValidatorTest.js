const { ERROR_MESSAGE } = require('../src/Constants/message');
const {
  checkTypeIsNumber,
  checkBridgeSizeRange,
  checkCorrectCommand,
  checkCorrectDirection,
} = require('../src/Validator');

describe('Validator 테스트', () => {
  test('checkTypeIsNumber - 주어진 값이 숫자가 아니면 예외처리', () => {
    // Given
    const values = ['#', 'R', '10zz', '1a'];

    // Then
    values.forEach((value) => {
      expect(() => checkTypeIsNumber(value)).toThrow(
        ERROR_MESSAGE.unexpected_input
      );
    });
  });

  test('checkTypeIsNumber - 주어진 값이 숫자라면 예외처리 예외처리 하지 않는지 검사', () => {
    // Given
    const values = ['3', '231231', '0', 52];

    // Then
    values.forEach((value) => {
      expect(checkTypeIsNumber(value)).toBe(true);
    });
  });

  test('checkBridgeSizeRange - 경계값 테스트, 3~20 이외의 값이 입력되면 예외처리', () => {
    // Given
    const sizeList = [2, 21, 100];

    // Then
    sizeList.forEach((size) => {
      expect(() => checkBridgeSizeRange(size)).toThrow(
        ERROR_MESSAGE.exceed_bridge_size
      );
    });
  });

  test('checkBridgeSizeRange - 3~20 사이의 값은 예외처리 하지 않는지 검사', () => {
    // Given
    const sizeList = [3, 10, 20];

    // Then
    sizeList.forEach((size) => {
      expect(checkBridgeSizeRange(size)).toBe(true);
    });
  });

  test('checkCorrectDirection - 배열을 전달받아도 올바르게 체크하는지 검사', () => {
    // Given
    const directions = ['U', 'K'];

    // Then
    expect(() => {
      checkCorrectDirection(directions);
    }).toThrow(ERROR_MESSAGE.unexpected_input);
  });

  test('checkCorrectDirection - 배열이나 문자 이외의 값이 전달되면 예외 처리', () => {
    // Given
    const tokens = [3, {}];

    // Then
    tokens.forEach((direction) => {
      expect(() => checkCorrectDirection(direction)).toThrow(
        ERROR_MESSAGE.unexpected_input
      );
    });
  });

  test('checkCorrectCommand - R, Q이외의 커맨드가 전달되면 예외처리', () => {
    // Given
    const commands = ['Z', 'r', 'q', 'RQ'];

    // Then
    commands.forEach((command) => {
      expect(() => checkCorrectCommand(command)).toThrow(
        ERROR_MESSAGE.unexpected_input
      );
    });
  });

  test('checkCorrectCommand - R, Q에 대해서 예외처리 하지 않는지 검사', () => {
    // Given
    const commands = ['R', 'Q'];

    // Then
    commands.forEach((command) => {
      expect(checkCorrectCommand(command)).toBe(true);
    });
  });
});
