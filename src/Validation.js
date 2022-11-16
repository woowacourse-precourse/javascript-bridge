const Validation = {
  checkBridgeLength(userInput) {
    if (userInput < 3 || userInput > 20) {
      throw new Error(`다리길이는 3이상 20이하 까지 가능합니다.`);
    }
    if (/^[0-9]*$/g.test(String(userInput)) === false) {
      throw new Error(`숫자만 입력이 가능합니다.`);
    }
  },
};
module.exports = Validation;
