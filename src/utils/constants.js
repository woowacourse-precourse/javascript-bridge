const REGEX = Object.freeze({
  bridgeLength: /^[3-9]{1}$|^1{1}[0-9]{1}$|^20$/,
  upDownKey: /^U$|^D$/
});

const ERROR_MESSAGE = Object.freeze({
  bridgeLength: '[ERROR] 3 ~ 20 이하의 다리 길이를 입력하세요',
  upDownKey: '[ERROR] U 또는 D 문자만 입력 가능합니다.'
});

const MODEL_KEY = Object.freeze({
  randomBridge: 'RANDOM_BRIDGE_MODEL_KEY',
  userBridge: 'USER_BRIDGE_MODEL_KEY',
  tryCount: 'TRY_COUNT_BRIDGE_MODEL_KEY'
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY
};
