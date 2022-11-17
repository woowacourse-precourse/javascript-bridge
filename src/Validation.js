const Validation = {
  checkBridgeSize(input) {
    if (isNaN(input) === true) {
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }

    if (Number.isInteger(Number(input)) === false) {
      throw new Error('[ERROR] 다리 길이는 실수가 아닌 정수여야 합니다.');
    }
    
    if (input < 3 || 20 < input) {
      throw new Error('[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.');
    }
  },

  checkMoving(input) {
    if (!(input === 'U' || input === 'D')) {
      throw new Error('[ERROR] 이동할 칸을 선택하기 위해선 \'U\' 또는 \'D\'를 입력해야 합니다.');
    }
  },

  checkInputRetryOrEnd(input) {
    if (!(input === 'R' || input === 'Q')) {
      throw new Error('[ERROR] 재시도하려면 \'R\'를, 종료하려면 \'Q\'를 입력해야 합니다.');
    }
  }
};

module.exports = Validation;
