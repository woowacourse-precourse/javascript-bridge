const { PHASE } = require('../src/constant/Constant');
const { InputError } = require('../src/Error');
const Validator = require('../src/Validator');

describe('유효성 검사 클래스 테스트', () => {
  const validator = new Validator();

  test('다리 길이가 숫자로만 이루어져 있지 않은 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.START, '11.5');
    }).toThrow(InputError.MESSAGE.FORMAT);
  });

  test('다리 길이가 3 이상 20 이하의 숫자가 아닌 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.START, '2');
    }).toThrow(InputError.MESSAGE.BRIDGE_SIZE);
  });

  test('플레이어가 이동할 칸이 알파벳 대문자가 아닌 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.MOVE, 'u');
    }).toThrow(InputError.MESSAGE.FORMAT);
  });

  test('플레이어가 이동할 칸이 U, D 중 하나의 문자가 아닌 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.MOVE, 'L');
    }).toThrow(InputError.MESSAGE.MOVING);
  });

  test('게임 커맨드가 알파벳 대문자가 아닌 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.COMMAND, 'q');
    }).toThrow(InputError.MESSAGE.FORMAT);
  });

  test('게임 커맨드가 R, Q 중 하나의 문자가 아닌 경우에 대한 예외 처리', () => {
    expect(() => {
      validator.goTo(PHASE.COMMAND, 'E');
    }).toThrow(InputError.MESSAGE.GAME_COMMAND);
  });
});
