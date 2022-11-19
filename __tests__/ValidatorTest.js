const ERROR = require('../src/constants/error');
const Validator = require('../src/Validator');

describe('예외 처리 테스트', () => {
  test('다리 길이 입력 시 3~20의 숫자를 입력한 경우 true', () => {
    const bridgeSize = 10;
    expect(() => Validator.validateBridgeSize(bridgeSize)).toBeTruthy();
  });

  test('다리 길이 입력 시 3~20의 숫자가 아닌 경우 에러 던지기', () => {
    const bridgeSize = 2;
    expect(() => Validator.validateBridgeSize(bridgeSize)).toThrow(ERROR.BRIDGE_SIZE);
  });

  test("이동할 칸 입력 시 'U' 또는 'D' 중 하나를 입력한 경우 true", () => {
    const moving = 'U';
    expect(() => Validator.validateMoving(moving)).toBeTruthy();
  });

  test("이동할 칸 입력 시 'U' 또는 'D' 중 하나를 입력하지 않은 경우 에러 던지기", () => {
    const moving = 'A';
    expect(() => Validator.validateMoving(moving)).toThrow(ERROR.MOVING);
  });

  test("게임 재시작/종료 여부 입력 시 'R' 또는 'Q' 중 하나를 입력한 경우 true", () => {
    const gameCommand = 'R';
    expect(() => Validator.validateGameCommand(gameCommand)).toBeTruthy();
  });

  test("게임 재시작/종료 여부 입력 시 'R' 또는 'Q' 중 하나를 입력하지 않은 경우 에러 던지기", () => {
    const gameCommand = 'U';
    expect(() => Validator.validateGameCommand(gameCommand)).toThrow(ERROR.GAME_COMMAND);
  });
});
