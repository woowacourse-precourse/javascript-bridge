class Validator {
  static size(size) {
    if (size.match(/\D/) || +size < 3 || +size > 20) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    }
    return size;
  }
  static move(move) {
    if (move !== "U" && move !== "D") {
      throw "[ERROR] U 또는 D를 입력해주세요.";
    }
    return move;
  }
  static command(command) {
    if (command !== "R" && command !== "Q") {
      throw "[ERROR] R 또는 Q를 입력해주세요.";
    }
    return command;
  }
}

module.exports = Validator;
