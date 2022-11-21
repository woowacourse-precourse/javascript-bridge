const BRIDGE_SETTINGS = require('./BridgeSettings');

const ERROR_PREFIX = '[ERROR]';

const ERROR = Object.freeze({
  onlyNumber: '숫자만 입력 가능합니다.\n',
  outOfRange: `다리 길이는 ${BRIDGE_SETTINGS.minLength}부터 ${BRIDGE_SETTINGS.maxLength} 사이의 숫자여야 합니다.\n'`,
});

module.exports = { ERROR_PREFIX };
