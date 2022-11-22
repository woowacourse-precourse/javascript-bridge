/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */

const { DIRECTION, ERROR, GAME_COMMAND } = require('../src/data/constants');
const Validator = require('../src/utils/Validator');

describe('유효성 테스트', () => {
  test('다리 길이 유효성', () => {
    const invalidSize = [1, '2', '0', '01', '1234', '448', 'f832', '90129'];
    invalidSize.forEach((size) => {
      expect(() => Validator.validateBridgeLength(size)).toThrow(ERROR.BRIDGE_SIZE);
    });

    const validSize = [3, 5, 6, 9, 19];
    validSize.forEach((size) => {
      expect(() => Validator.validateBridgeLength(size)).not.toThrow(ERROR.BRIDGE_SIZE);
    });
  });

  test('이동할 칸 선택 유효성', () => {
    const invalidPosition = [1, 0, 'd', 'u', 'UPUPUP', 'DOWNDOWNDOWN'];
    invalidPosition.forEach((direction) => {
      expect(() => Validator.validateBridgeDirection(direction)).toThrow(ERROR.BRIDGE_DIRECTION);
    });

    [DIRECTION.DOWN, DIRECTION.UP].forEach((direction) => {
      expect(() => Validator.validateBridgeDirection(direction))
        .not.toThrow(ERROR.BRIDGE_DIRECTION);
    });
  });

  test('재시작 / 종료 잘못된 입력', () => {
    const commands = [1, 0, 'QQ', 'q', 'r', 'RE'];
    commands.forEach((command) => {
      expect(() => Validator.validateGameCommand(command)).toThrow(ERROR.RETRY_COMMAND);
    });

    [GAME_COMMAND.RETRY, GAME_COMMAND.QUIT].forEach((command) => {
      expect(() => Validator.validateGameCommand(command))
        .not.toThrow(ERROR.RETRY_COMMAND);
    });
  });
});
