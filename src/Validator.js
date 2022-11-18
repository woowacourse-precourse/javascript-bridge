const Validator = {
  checkBridgeSize(input) {
    if ('0123456789'.includes(input) === false) {
      throw new Error('다리 길이는 정수만 입력해야 합니다.');
    }
    const size = Number(input);
    if (size < 3 || size > 20) {
      throw new Error('다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  checkMoving(input) {
    if ('UD'.includes(input) === false) {
      throw new Error('U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },

  checkGameCommand(input) {
    if ('RQ'.includes(input) === false) {
      throw new Error('R(재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },
};

module.exports = Validator;
