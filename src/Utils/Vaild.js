const { ERROR_MESSAGES, USER_VALID_INPUT } = require('../common/messages');

const Vaild = {
  isVaildSize(size) {
    if (isNaN(size)) throw new Error('[ERROR] 숫자만 입력이 가능합니다');
  },

  isVaildInput(input) {
    if (input === USER_VALID_INPUT.U || input === USER_VALID_INPUT.D) return;
    throw new Error(ERROR_MESSAGES.ERROR_INVAILD_INPUT(USER_VALID_INPUT.U, USER_VALID_INPUT.D));
  },
};

module.exports = Vaild;
