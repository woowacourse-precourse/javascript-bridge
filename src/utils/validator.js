const { Console } = require('@woowacourse/mission-utils');
const validator = {
  checkBridgeSizeInput(input) {
    if (this.checkIsNum(input) && this.checkNumRange(input)) return;
    throw Console.print('[ERROR] 입력한 다리 길이가 올바르지 않습니다.');
  },

  checkUserMovingInput(input) {
    if (this.checkIsUpDown(input)) return;
    throw Console.print('[ERROR] 입력한 문자가 올바르지 않습니다.');
  },

  checkGameOverSelect(input) {
    if (this.checkIsRorQ(input)) return;
    throw Console.print('[ERROR] 입력한 문자가 올바르지 않습니다.');
  },

  checkIsNum(input) {
    return /^[0-9]*$/g.test(input);
  },

  checkNumRange(input) {
    return input >= 3 && input <= 20;
  },

  checkIsUpDown(input) {
    return input === 'U' || input === 'D';
  },

  checkIsRorQ(input) {
    return input === 'R' || input === 'Q';
  },
};

module.exports = validator;
