const OutputView = require("../GameIO/OutputView");

const ERROR_MESSAGES = {
  bridgeLength: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  jumpDirection: "[ERROR] 이동할 칸은 대문자 U나 D여야 합니다.",
  quitGame: "[ERROR] 재시작 혹은 종료 값은 대문자 R나 Q여야 합니다.",
  program: "[ERROR] 게임 내부 에러입니다.",
};

const ErrorHandler = {
  tryCatch(callback, causation) {
    try {
      callback();
    } catch (error) {
      this.errorGenerate(causation);
    }
  },

  errorGenerate(causation) {
    if (causation === "bridge") {
      console.log("[ERROR]");
      OutputView.printError(ERROR_MESSAGES.bridgeLength);
    }
    if (causation === "jump") {
      OutputView.printError(ERROR_MESSAGES.jumpDirection);
    }
    if (causation === "quit") {
      OutputView.printError(ERROR_MESSAGES.quitGame);
    }
    if (causation === "compute") {
      OutputView.printError(ERROR_MESSAGES.program);
    }
  },
};

module.exports = ErrorHandler;
