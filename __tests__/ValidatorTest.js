const Validator = require('../src/Validator');
const { runException } = require('./ApplicationTest');

describe('입력값 검사 테스트', () => {
  test('다리 길이의 입력 값이 숫자가 아닌 경우', () => {
    runException(['a']);
  });

  test('다리 길이의 입력 값이 알맞은 범위가 아닌 경우', () => {
    runException(['0']);
  });

  test.each([[3], [5], [7], [9], [11], [19]])(
    '다리 길이의 입력 값이 알맞은 범위의 숫자인 경우',
    (size) => {
      expect(() => {
        Validator.validateBridgeSizeInput(size);
      }).not.toThrow();
    }
  );

  test('움직이는 입력 값이 U나 D가 아닌 경우', () => {
    runException(['5', 'a']);
  });

  test('움직이는 입력 값이 소문자 u나 d인 경우', () => {
    runException(['5', 'u']);
  });

  test.each([['U'], ['D']])('움직이는 입력 값이 U나 D인 경우', (moveInput) => {
    expect(() => {
      Validator.validateMoveInput(moveInput);
    }).not.toThrow();
  });

  test('다시 시작할지 묻는 입력 값이 R이나 Q가 아닌 경우', () => {
    runException(['5', 'D', 'a']);
  });

  test.each([['R'], ['Q']])('다시 시작할지 묻는 입력 값이 알맞은 입력인 경우', (input) => {
    expect(() => {
      Validator.validateRetryInput(input);
    }).not.toThrow();
  });
});
