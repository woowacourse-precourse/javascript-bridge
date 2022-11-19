const { BRIDGE_SIZE } = require('./constants');

const isValidateBridgeSize = (length) => {
  if (Number.isNaN(+length))
    throw '[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.\n';

  if (+length < BRIDGE_SIZE.MIN || BRIDGE_SIZE.MAX < +length)
    throw `[ERROR] 다리 길이는 ${BRIDGE_SIZE.MIN}이상 ${BRIDGE_SIZE.MAX}이하의 숫자입니다.\n`;
};

const isValidateDirection = (direction) => {
  if (direction !== 'U' && direction !== 'D')
    throw '[ERROR] U 또는 D만 입력할 수 있습니다.';
};

module.exports = { isValidateBridgeSize, isValidateDirection };
