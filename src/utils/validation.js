const { BRIDGE_SIZE } = require('./constants');

const isValidateBridgeSize = (length) => {
  if (Number.isNaN(+length))
    throw TypeError('다리 길이는 숫자만 입력할 수 있습니다.');

  if (+length < BRIDGE_SIZE.MIN || BRIDGE_SIZE.MAX < +length)
    throw RangeError(
      `다리 길이는 ${BRIDGE_SIZE.MIN}이상 ${BRIDGE_SIZE.MAX}이하의 숫자입니다.`
    );
};

module.exports = { isValidateBridgeSize };
