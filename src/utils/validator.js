class Validator {
  isValidLength(input) {
    if (!(input >= 3 && input <= 20))
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
  }

  isUpAndDown(input) {
    if (input !== "U" && input !== "D") throw "[ERROR] U 또는 D 만 입력 가능";
  }

  isRestartOrQuit(input) {
    if (input !== "R" && input !== "Q") throw "[ERROR] R 또는 Q 만 입력 가능";
  }
}

module.exports = Validation;