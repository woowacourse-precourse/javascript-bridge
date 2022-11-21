const { isCollectRange, isValidateNumber } = require('./common.js');

const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(input, 3, 20);
};

const isValidateMoveInput = (number) => {
  const moveInputRegex = /^[U|D]$/g;
  if (!number.match(moveInputRegex)) {
    throw new Error('[ERROR] U 또는 D 문자만 입력이 가능합니다.');
  }
};

const isValidateRetryInput = (number) => {
  const moveInputRegex = /^[R|Q]$/g;
  if (!number.match(moveInputRegex)) {
    throw new Error('[ERROR] R 또는 Q 문자만 입력이 가능합니다.');
  }
};

module.exports = { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput };
