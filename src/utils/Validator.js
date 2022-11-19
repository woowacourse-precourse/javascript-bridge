const Exception = require('./Exception');

const Validator = {
  bridgeSize(length) {
    if (!Number(length)) {
      Exception.throw('[ERROR] 다리 길이는 숫자여야 합니다.');
    }
    if (Number(length) < 3 || Number(length) > 20) {
      Exception.throw('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  direction(command) {
    if (command !== 'U' && command !== 'D') {
      Exception.throw('[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },

  finalGame(command) {
    if (command !== 'R' && command !== 'Q') {
      Exception.throw('[ERROR] R(재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },
};

module.exports = Validator;
