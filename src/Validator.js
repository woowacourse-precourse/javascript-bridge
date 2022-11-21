const Validator = {
  bridgeSize(inputValue) {
    const typeToNumber = Number(inputValue);
    if (Number.isNaN(typeToNumber))
      throw Error('[ERROR] 다리 길이는 숫자만 입력해주세요.');
    if (typeToNumber < 3 || typeToNumber > 20)
      throw Error('[ERROR] 다리 길이는 3이상 20이하의 숫자를 입력해주세요.');
  },
  moving(inputValue) {
    if (!(inputValue === 'U' || inputValue === 'D'))
      throw Error('[ERROR] 위 칸은 U, 아래 칸은 D를 입력해주세요.');
  },
  retryOrQuit(inputValue) {
    if (!(inputValue === 'R' || inputValue === 'Q'))
      throw Error('[ERROR] 재시작은 R, 종료는 Q를 입력해주세요.');
  },
};

module.exports = Validator;
