const { Console } = require('@woowacourse/mission-utils');

const inputErrorCheck = {
  way: (input) => {
    if (!(input === 'U' || input === 'D')) {
      Console.print('[ERROR] 이동할 칸은 U 또는 D만 공백없이 입력 가능합니다.');
      throw '[ERROR] 이동할 칸은 U 또는 D만 공백없이 입력 가능합니다.';
    }
  },
  bridgeSize: (input) => {
    if (/[^0-9]/g.test(input)) {
      Console.print('[ERROR] 다리 길이는 숫자만 공백없이 입력 가능합니다.');
      throw '[ERROR] 다리 길이는 숫자만 공백없이 입력 가능합니다.';
    }
  },
  gameCommand: (input) => {
    if (!(input === 'R' || input === 'Q')) {
      Console.print(
        '[ERROR] 재시도 여부는 Q 또는 R만 공백없이 입력 가능합니다.',
      );
      throw '[ERROR] 재시도 여부는 Q 또는 R만 공백없이 입력 가능합니다.';
    }
  },
};

module.exports = inputErrorCheck;
