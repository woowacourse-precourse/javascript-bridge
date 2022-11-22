const Validator = require('../src/utils/Validator');
const { ERROR_MESSAGE } = require('../src/utils/constants');

describe('유효성 검사 테스트 1', () => {
  test('다리 길이 입력 값이 숫자가 아니면 예외가 발생', () => {
    expect(() => {
      Validator.validateNumber('안녕');
    }).toThrowError(ERROR_MESSAGE.SIZE_NUMBER_ERROR);
  });
});

describe('유효성 검사 테스트 2', () => {
  test('다리 길이 입력 값이 숫자가 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateNumberInRange('45');
    }).toThrowError(ERROR_MESSAGE.SIZE_RANGE_ERROR);
  });
});

describe('유효성 검사 테스트 3', () => {
  test('다리 이동 칸 입력 값이 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateUpDown('R');
    }).toThrowError(ERROR_MESSAGE.MOVING_ERROR);
  });
});

describe('유효성 검사 테스트 4', () => {
  test('게임 재시작/종료 입력 값이 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateGameCommand('X');
    }).toThrowError(ERROR_MESSAGE.COMMAND_ERROR);
  });
});
