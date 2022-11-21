const { RETRY, QUIT } = require('../contants/Options');
const ErrorForm = require('../contants/ErrorForm');

const BridgeCtrlValidator = {
  validateGameCommand(char) {
    if (char !== RETRY && char !== QUIT) {
      throw new Error(
        ErrorForm(`유효한 게임 진행 선택값은 "${RETRY}" 혹은 "${QUIT}"입니다.`)
      );
    }
  },
};

module.exports = BridgeCtrlValidator;
