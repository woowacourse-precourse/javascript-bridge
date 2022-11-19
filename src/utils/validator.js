const { Console } = require('@woowacourse/mission-utils');

const { isCollectRange, isValidateNumber } = require('./validation');

const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(input);
};

const isValidateMoveInput = (number) => {
  const moveInputRegex = /^[U|D]$/g;
  if (!number.match(moveInputRegex)) {
    Console.close();
    throw new Error('U 또는 D 문자만 입력이 가능합니다.');
  }
};

module.exports = { isCollectBridgeLength, isValidateMoveInput };
