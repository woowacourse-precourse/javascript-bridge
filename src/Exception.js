const Exception = {
  bridgeSize(answer) {
    if (Number(answer) < 3 || Number(answer) > 20 || !/[0-9]/.test(answer)) {
      throw new Error('[ERROR] 다리 생성을 위해 3~20이내 숫자를 입력해주세요.');
    }
    return;
  },
  onlyAlphabet(answer, type) {
    answer = answer.toUpperCase();
    if (type === 'move' && answer !== 'U' && answer !== 'D') {
      throw new Error('[ERROR] U 또는 D를(을) 입력해주세요.');
    }
    if (type === 'retry' && answer !== 'Q' && answer !== 'R') {
      throw new Error('[ERROR] Q 또는 R를(을) 입력해주세요.');
    }
    return;
  },
};
module.exports = Exception;
