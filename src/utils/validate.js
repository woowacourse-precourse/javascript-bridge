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

const validateMove = (move) => {
  if (/[^UD]/.test(move)) {
    Console.print('[ERROR] 이동할 칸은 U 또는 D로 입력해야 합니다.');
    throw new Error();
  }
};

const validateRetry = (answer) => {
  if (/[^RQ]/.test(answer)) {
    Console.print('[ERROR] 재시작/종료는 R 도는 Q로 입력해야 합니다.');
    throw new Error();
  }
};

module.exports = { validateBridge, validateMove, validateRetry };
