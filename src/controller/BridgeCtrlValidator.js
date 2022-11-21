const BridgeCtrlValidator = {
  validateGameCommand(char) {
    if (char !== 'R' && char !== 'Q') {
      throw new Error('[ERROR] 유효한 게임 진행 선택값은 "R" 혹은 "Q"입니다.');
    }
  },
};

module.exports = BridgeCtrlValidator;
