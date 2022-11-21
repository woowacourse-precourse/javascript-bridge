const Validator = {
  bridgeSize(inputValue) {
    const typeToNumber = Number(inputValue);
    if (Number.isNaN(typeToNumber))
      throw Error('[ERROR] 다리 길이는 숫자만 입력해주세요.');
    if (typeToNumber < 3 || typeToNumber > 20)
      throw Error('[ERROR] 다리 길이는 3이상 20이하의 숫자를 입력해주세요.');
  },
};

module.exports = Validator;
