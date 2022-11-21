const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const Validator = {
  moveCommandValidator(command) {
    if (command !== 'U' && command !== 'D') {
      Console.print('[ERROR] 올바르지 않은 커멘드 입니다.');
      return false;
    }
    return true;
  },

  bridgeLengthValidator(length) {
    if (!(length >= 3 && length <= 20)) {
      Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
      return false;
    }
    return true;
  },

  restartCommandValidator(command) {
    if (command !== 'R' && command !== 'Q') {
      Console.print('[ERROR] 올바르지 않은 커멘드 입니다.');
      return false;
    }
    return true;
  },
};

module.exports = Validator;
