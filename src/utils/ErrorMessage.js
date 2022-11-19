const { deepFreeze } = require('./helper');
const { BRIDGE_CONSTANTS, GAME_CONSTANTS } = require('./constants');

const ERROR_MESSAGE = deepFreeze({
  bridgeLengthRange: `[ERROR] 다리 길이는 ${BRIDGE_CONSTANTS.minimum}부터 ${BRIDGE_CONSTANTS.maximum} 사이의 숫자여야 합니다.\n`,
  checkStepCorrect: `[ERROR] ${GAME_CONSTANTS.upStair} 또는 ${GAME_CONSTANTS.downStair} 중 하나의 문자만 입력할 수 있습니다.\n`,
  checkRetryCorrect: `[ERROR] ${GAME_CONSTANTS.retryGame} 또는 ${GAME_CONSTANTS.quitGame} 중 하나의 문자만 입력할 수 있습니다.\n`,
});

module.exports = ERROR_MESSAGE;
