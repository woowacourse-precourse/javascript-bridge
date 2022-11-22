const OutputView = require("../View/OutputView");

const ERROR_MESSAGES = {
  bridge: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  jump: "[ERROR] 이동할 칸은 대문자 U나 D여야 합니다.",
  quit: "[ERROR] 재시작 혹은 종료 값은 대문자 R나 Q여야 합니다.",
  compute: "[ERROR] 게임 내부 에러입니다.",
};

const ErrorHandler = {
  tryCatch(result, callback, causation) {
    try {
      if (!result) {
        throw ERROR_MESSAGES[causation];
      }
    } catch (error) {
      OutputView.printError(ERROR_MESSAGES[causation]);
    } finally {
      if (!result) {
        callback;
      }
    }
  },
};

module.exports = ErrorHandler;
