const ERROR_MESSAGES = {
  bridgeLength: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  jumpDirection: "[ERROR] 이동할 칸은 대문자 U나 D여야 합니다.",
  quitGame: "[ERROR] 재시작 혹은 종료 값은 대문자 R나 Q여야 합니다.",
};

const ErrorHandler = {
  inputError(causation) {
    if (causation === "bridge") {
      throw new Error(ERROR_MESSAGES.bridgeLength);
    }
    if (causation === "jump") {
      throw new Error(ERROR_MESSAGES.jumpDirection);
    }
    if (causation === "quit") {
      throw new Error(ERROR_MESSAGES.quitGame);
    }
  },
};

module.exports = ErrorHandler;
