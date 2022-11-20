const ErrorChecker = {
  bridgeSizeInputCheck(input) {
    if (isNaN(Number(input))) {
      throw new Error('[ERROR] 다리 개수 입력 오류');
    }
  },
  movingInputCheck(input) {
    if (input !== 'U' && input !== 'D') {
      throw new Error('[ERROR] 이동 입력 오류');
    }
  },
  gameCommandInputCheck(input) {
    if (input !== 'R' && input !== 'Q') {
      throw new Error('[ERROR] 게임 명령어 오류');
    }
  },
};

module.exports = ErrorChecker;
