const inputErrorCheck = {
  way: (input) => {
    if (!(input === 'U' || input === 'D')) {
      throw '[ERROR] 이동할 칸은 U 또는 D만 공백없이 입력 가능합니다.';
    }
  },
  bridgeSize: (input) => {
    if (/[^0-9]/g.test(input)) {
      throw '[ERROR] 다리 길이는 숫자만 공백없이 입력 가능합니다.';
    }
  },
};

module.exports = inputErrorCheck;
