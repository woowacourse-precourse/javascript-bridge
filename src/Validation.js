const Validation = {
  checkBridgeLength(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(`[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`);
    }
    if (/[0-9]/g.test(userInput) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
  },

  checkMove(userInput) {
    if (userInput === "u" || userInput === "d") {
      throw new Error(`[ERROR] 대문자로 입력해주세요.`);
    }

    if (/^[U,D]/.test(userInput) === false) {
      throw new Error(`[ERROR] U 또는 D 를 입력해주세요.`);
    }
  },
  checkRetry(userInput) {
    if (userInput === "r" || userInput === "q") {
      throw new Error(`[ERROR] 대문자로 입력해주세요.`);
    }

    if (/^[R,Q]/.test(userInput) === false) {
      throw new Error(`[ERROR] R 또는 Q를 입력해주세요.`);
    }
  },
};
module.exports = Validation;
