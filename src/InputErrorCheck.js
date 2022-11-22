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
    if (Number(input) < 3 || Number(input) > 20) {
      throw '[ERROR] 다리 길이는 3 이상 20 이하 만 입력 가능합니다.';
    }
  },
  gameCommand: (input) => {
    if (!(input === 'R' || input === 'Q')) {
      throw '[ERROR] 재시도 여부는 Q 또는 R만 공백없이 입력 가능합니다.';
    }
  },
};

module.exports = inputErrorCheck;
