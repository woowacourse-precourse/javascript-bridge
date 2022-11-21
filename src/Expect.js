const OutputView = require('./OutputView');

const Expect = {
  checkSize(size) {
    try {
      this.checkNumber(size);
      this.checkRange(size);
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },

  checkNumber(number) {
    if (!Number(number)) {
      throw new Error('[ERROR] 다리의 길이는 숫자입니다.');
    }
  },

  checkRange(range) {
    if (Number(range) < 3 || Number(range) > 20) {
      throw new Error('[ERROR] 다리의 길이는 3에서 20 사이의 숫자입니다.');
    }
  },

  checkStr(userInput) {
    try {
      const isTrue = userInput === 'U' || userInput === 'D';
      if (!isTrue) {
        throw new Error('[ERROR] 위로는 U, 아래는 D를 입력해주세요.');
      }
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },

  checkEndStr(userInput) {
    try {
      const isTrue = userInput === 'R' || userInput === 'Q';
      if (!isTrue) {
        throw new Error('[ERROR] 재시작은 R, 종료는 Q를 입력해주세요.');
      }
    } catch (e) {
      OutputView.printError(e);
      return false;
    }
    return true;
  },
};

module.exports = Expect;
