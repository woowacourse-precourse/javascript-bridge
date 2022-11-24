const { Console } = require("@woowacourse/mission-utils");
class BridgeGame {
  move(bridge, inputMove) {
    if (bridge === inputMove) {
      return true;
    }
  }

  retry(inputRetry) {
    if (inputRetry == "R") {
      return true;
    }
  }
  checkBridgeSize(input) {
    if (!(input >= 3 && input <= 20))
      Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  }

  checkBridgeRange(input) {
    if (isNaN(input)) {
      Console.print("[ERROR] 다리 길이는 숫자여야 합니다.");
    }
  }

  checkGameCommand(input) {
    if (!(input === "R" || input === "Q")) {
      Console.print("[ERROR] 재시작 여부는 R이나 Q 여야 합니다.");
    }
  }

  checkMoveCommand(input) {
    if (!(input == "U" || input == "D")) {
      Console.print("[ERROR] 이동할 칸은 U이나 D 여야 합니다.");
    }
  }

  checkInputSpace(input) {
    if (input.includes(" ")) {
      Console.print("[ERROR] 입력에 공백이 없어야합니다.");
    }
  }

  vaildateBridge(input) {
    this.checkBridgeSize(input);
    this.checkBridgeRange(input);
    this.checkInputSpace(input);
  }
  vaildateMoveCommand(input) {
    this.checkMoveCommand(input);
    this.checkInputSpace(input);
  }

  vaildateGameCommand(input) {
    this.checkGameCommand(input);
    this.checkInputSpace(input);
  }
}

module.exports = BridgeGame;
