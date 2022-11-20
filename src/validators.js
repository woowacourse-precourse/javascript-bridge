const validators = {
  is3To20(input) {
    const number = Number(input);
    if (isNaN(number) === false && number >= 3 && number <= 20) {
      return true;
    }
    throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
  },

  isUorD(input) {
    if (input === 'U' || input === 'D') {
      return true;
    }
    throw '[ERROR] 이동할 칸은 위는 "U", 아래는 "D" 입니다.';
  },

  isRorQ(input) {
    if (input === 'R' || input === 'Q') {
      return true;
    }
    throw '[ERROR] 재시도는 "R", 종료는 "Q"입니다.';
  },
};
module.exports = validators;
