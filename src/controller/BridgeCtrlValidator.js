const { RETRY, QUIT } = require('../contants/Options');

const BridgeCtrlValidator = {
  validateGameCommand(char) {
    if (char !== RETRY && char !== QUIT) {
      throw new Error(
        `[ERROR] 유효한 게임 진행 선택값은 "${RETRY}" 혹은 "${QUIT}"입니다.`
      );
    }
  },
};

module.exports = BridgeCtrlValidator;
