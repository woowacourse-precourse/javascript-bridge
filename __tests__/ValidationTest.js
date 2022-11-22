const Validator = require('../src/Validator');

describe('유효성 검사 테스트 1', () => {
  test('다리 길이 입력 값이 숫자가 아니면 예외가 발생', () => {
    expect(() => {
      Validator.validateNumber('안녕');
    }).toThrow('[ERROR]');
  });
});

describe('유효성 검사 테스트 2', () => {
  test('다리 길이 입력 값이 숫자가 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateNumberInRange('45');
    }).toThrow('[ERROR]');
  });
});

describe('유효성 검사 테스트 3', () => {
  test('다리 이동 칸 입력 값이 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateUpDown('R');
    }).toThrow('[ERROR]');
  });
});

describe('유효성 검사 테스트 4', () => {
  test('다리 이동 칸 입력 값이 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateUpDown('R');
    }).toThrow('[ERROR]');
  });
});

describe('유효성 검사 테스트 5', () => {
  test('게임 재시작/종료 입력 값이 범위를 벗어나면 예외가 발생', () => {
    expect(() => {
      Validator.validateUpDown('X');
    }).toThrow('[ERROR]');
  });
});
