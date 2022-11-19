const Validator = require('../src/utils/Validator.js');
const { ErrorMsg } = require('../src/constants/Constant.js');

describe('예외 체크 테스트', () => {
  test('빈 문자열이 들어올 경우', () => {
    const input = '';
    expect(() => {
      Validator.validateBridgeSize(input);
    }).toThrow(ErrorMsg.INVALID_INPUT_NULL);
  });

  test('다리 길이가 숫자가 아닐 경우', () => {
    const size = '10c';
    expect(() => {
      Validator.validateBridgeSize(size);
    }).toThrow(ErrorMsg.INVALID_INPUT_NOT_NUM);
  });

  test('다리 길이가 3보다 작을 경우', () => {
    const size = '0';
    expect(() => {
      Validator.validateBridgeSize(size);
    }).toThrow(ErrorMsg.INVALID_INPUT_BRIDGE_SIZE_RANGE);
  });

  test('다리 길이가 20보다 클 경우', () => {
    const size = '21';
    expect(() => {
      Validator.validateBridgeSize(size);
    }).toThrow(ErrorMsg.INVALID_INPUT_BRIDGE_SIZE_RANGE);
  });

  test('움직일 칸 입력이 숫자일 경우', () => {
    const direction = '85';
    expect(() => {
      Validator.validateMoving(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_MOVING);
  });

  test('움직일 칸 입력이 두 글자일 경우', () => {
    const direction = 'UD';
    expect(() => {
      Validator.validateMoving(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_MOVING);
  });

  test('움직일 칸 입력이 U 혹은 D가 아닐 경우', () => {
    const direction = 'u';
    expect(() => {
      Validator.validateMoving(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_MOVING);
  });

  test('재시도 입력이 숫자일 경우', () => {
    const direction = '82';
    expect(() => {
      Validator.validateGameCommand(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
  });

  test('재시도 입력이 두 글자일 경우', () => {
    const direction = 'RR';
    expect(() => {
      Validator.validateGameCommand(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
  });

  test('재시도 입력이 R 혹은 Q가 아닐 경우', () => {
    const direction = 'q';
    expect(() => {
      Validator.validateGameCommand(direction);
    }).toThrow(ErrorMsg.INVALID_INPUT_GAME_COMMAND);
  });
});
