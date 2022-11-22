const InputValidator = require('../src/utils/InputValidator');

describe('InputValidator 테스트', () => {
  test.each([['3'], ['5'], ['20']])('유효한 다리길이 입력이면 true를 반환한다.', (input) => {
    expect(InputValidator.isValidBridgeSize(input)).toBeTruthy();
  });

  test.each([['2'], ['21'], ['a']])('유효한 다리길이 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.isValidBridgeSize(input)).toThrow('[ERROR]');
  });

  test.each([['U'], ['D']])('유효한 칸 입력이면 true를 반환한다.', (input) => {
    expect(InputValidator.isValidMoving(input)).toBeTruthy();
  });

  test.each([['r'], ['dd'], ['1']])('유효한 칸 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.isValidMoving(input)).toThrow('[ERROR]');
  });

  test.each([['R'], ['Q']])('유효한 게임명령어 입력이면 true를 반환한다.', (input) => {
    expect(InputValidator.isValidGameCommand(input)).toBeTruthy();
  });

  test.each([['r'], ['q'], ['1']])('유효한 게임명령어 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.isValidGameCommand(input)).toThrow('[ERROR]');
  });
});
