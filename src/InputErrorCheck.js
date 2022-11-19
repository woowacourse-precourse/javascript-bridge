const { Console } = require('@woowacourse/mission-utils');

const inputErrorCheck = {
  direction: input => {
    if (!(input === 'U' || input === 'D')) {
      Console.print('[ERROR] 이동할 칸은 U 또는 D만 공백없이 입력 가능합니다.');
      Console.close();
    }
  },
  bridgeSize: input => {
    if (/[^0-9]/g.test(input)) {
      Console.print('[ERROR] 다리 길이는 숫자만 공백없이 입력 가능합니다.');
      Console.close();
    }
  },
};

module.exports = inputErrorCheck;
