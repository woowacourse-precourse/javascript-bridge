const { Console } = require('@woowacourse/mission-utils');
const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE, UP, DOWN, RETRY, QUIT } = require('./constants/Command');

const HEADER = '[ERROR]';

const ErrorHandler = {
  errorMessage: Object.freeze({
    BRIDGE_SIZE_NATURAL_NUMBER: `${HEADER} 다리 길이는 자연수여야 합니다.`,
    BRIDGE_SIZE_RANGE: `${HEADER} 다리 길이는 ${MIN_BRIDGE_SIZE}부터 ${MAX_BRIDGE_SIZE} 사이의 숫자여야 합니다.`,
    MOVING_COMMAND: `${HEADER} ${UP}와 ${DOWN} 중 하나의 문자를 입력해야 합니다. (위: ${UP}, 아래: ${DOWN})`,
    GAME_COMMAND: `${HEADER} ${RETRY}과 ${QUIT} 중 하나의 문자를 입력해야 합니다. (재시도: ${RETRY}, 종료: ${QUIT})`,
  }),

  throwError(isInvalid, message) {
    if (isInvalid) {
      Console.print(message);
      throw new Error(message);
    }
  },

  validateBridgeSize(size) {
    const { BRIDGE_SIZE_NATURAL_NUMBER, BRIDGE_SIZE_RANGE } = ErrorHandler.errorMessage;

    const isNotNaturalNumber = !(/^\d+$/.test(size) && Number(size));
    ErrorHandler.throwError(isNotNaturalNumber, BRIDGE_SIZE_NATURAL_NUMBER);

    const isOutOfRange = Number(size) < MIN_BRIDGE_SIZE || Number(size) > MAX_BRIDGE_SIZE;
    ErrorHandler.throwError(isOutOfRange, BRIDGE_SIZE_RANGE);
  },

  validateMovingCommand(movingCommand) {
    const isInvalid = movingCommand !== UP && movingCommand !== DOWN;
    ErrorHandler.throwError(isInvalid, ErrorHandler.errorMessage.MOVING_COMMAND);
  },

  validateGameCommand(gameCommand) {
    const isInvalid = gameCommand !== RETRY && gameCommand !== QUIT;
    ErrorHandler.throwError(isInvalid, ErrorHandler.errorMessage.GAME_COMMAND);
  },
};

module.exports = ErrorHandler;
