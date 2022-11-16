const Validation = {
  checkBridgeLength(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(`[ERROR] 다리길이는 3이상 20이하 까지 가능합니다.`);
    }
    if (/^[0-9]*$/g.test(String(userInput)) === false) {
      throw new Error(`[ERROR] 숫자만 입력이 가능합니다.`);
    }
  },

  checkMove(userInput) {
    if (userInput === "u" || userInput === "d") {
      throw new Error(`[ERROR] 대문자로 입력해주세요`);
    }

    if (userInput !== "U" || userInput !== "D") {
      throw new Error(`[ERROR] U 또는 D 만 입력이 가능합니다.`);
    }
    if (userInput === "") {
      throw new Error(`[ERROR] 아무것도 입력하지 않으셨습니다.`);
    }
  },
};
module.exports = Validation;
