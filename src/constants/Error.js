const { BRIDGE_SIZE } = require('./BridgeSettings');

const ERROR_PREFIX = '[ERROR]';

const FORM = {
  number: /^\d+(,\d+)*$/,
};

const ERROR_MESSAGES = Object.freeze({
  onlyNumber: `${BRIDGE_SIZE.min}부터 ${BRIDGE_SIZE.max} 사이 숫자만 입력 가능합니다.\n`,
  outOfRange: `다리 길이는 ${BRIDGE_SIZE.min}부터 ${BRIDGE_SIZE.max} 사이의 숫자여야 합니다.\n`,
});

module.exports = { ERROR_PREFIX, ERROR_MESSAGES, FORM };
