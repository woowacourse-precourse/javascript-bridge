const { Console } = require('@woowacourse/mission-utils');

const Validator = {
  bridgeSize(length) {
    if (!Number(length)) {
      Console.print('[ERROR] 다리 길이는 숫자여야 합니다.');
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }
    if (Number(length) < 3 || Number(length) > 20) {
      Console.print('[ERROR] 다리 길이는 숫자여야 합니다.');
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  direction(command) {
    if (command !== 'U' && command !== 'D') {
      Console.print('[ERROR] 다리 길이는 숫자여야 합니다.');
      throw new Error('[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },

  finalGame(command) {
    if (command !== 'R' && command !== 'Q') {
      Console.print('[ERROR] 다리 길이는 숫자여야 합니다.');
      throw new Error('[ERROR] R(재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },
};

module.exports = Validator;
