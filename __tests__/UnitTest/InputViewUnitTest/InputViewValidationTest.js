const InputView = require('../../../src/view/InputView');
const { BRIDGE_SIZE_ERROR, MOVEMENT_ERROR, GAME_COMMAND_ERROR } = require('../../../src/constants/error.constants');

describe('사용자 입력 예외처리 테스트', () => {
  test('예외 상황 - 다리의 길이가 정수가 아닌 경우', () => {
    userInput = 'a';
    expect(() => {
      InputView.validateBridgeSize(userInput);
    }).toThrow(BRIDGE_SIZE_ERROR.NOT_INTEGER);
  });
  test('예외 상황 - 다리의 길이가 범위를 벗어난 경우', () => {
    userInput = 27;
    expect(() => {
      InputView.validateBridgeSize(userInput);
    }).toThrow(BRIDGE_SIZE_ERROR.OUT_OF_RANGE);
  });
  test('예외 상황 - 플레이어 이동이 적합하지 않은 경우', () => {
    userInput = 'A';
    expect(() => {
      InputView.validateMovement(userInput);
    }).toThrow(MOVEMENT_ERROR.NOT_AVAILABLE);
  });
  test('예외 상황 - 게임 재시작 및 종료 명령이 적합하지 않은 경우', () => {
    userInput = 8;
    expect(() => {
      InputView.validateGameCommand(userInput);
    }).toThrow(GAME_COMMAND_ERROR.NOT_AVAILABLE);
  });
});
