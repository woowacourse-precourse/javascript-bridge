const { Console } = require('@woowacourse/mission-utils');

const validateBridge = (size) => {
  if (isNaN(size)) {
    Console.print('[ERROR] 다리 길이는 숫자만 입력 가능합니다.');
    throw new Error();
  }

  if (size < 3 || size > 20) {
    Console.print('[ERROR] 다리 길이는 3~20 사이의 숫자여야 합니다.');
    throw new Error();
  }
};

module.exports = { validateBridge };
