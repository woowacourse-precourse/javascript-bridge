/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  constructor() {
    this.bridgeString = {
      start(text) {
        return `[ ${text} `;
      },
      middle(text) {
        return `| ${text} `;
      },
    };
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(data) {
    const bridgeAnswer = data["bridge"][data["callCount"]];
    const userAnswer = data["currentAnswer"];

    bridgeAnswer === userAnswer ? this.correctCase(data) : this.incorrectCase(data);
    return data;
  }

  correctCase(data) {
    const correct = "O";
    const empty = " ";

    data["currentAnswer"] === "U" ? this.defineString(data, correct, empty) : this.defineString(data, empty, correct);
    return data;
  }

  incorrectCase(data) {
    const incorrect = "X";
    const empty = " ";

    data["currentAnswer"] === "U" ? this.defineString(data, incorrect, empty) : this.defineString(data, empty, incorrect);
    return data;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  defineString(data, upperString, lowerString) {
    data["callCount"] === 0 ? this.startString(data, upperString, lowerString) : this.middleString(data, upperString, lowerString);
  }

  startString(data, upperString, lowerString) {
    data["upperBridge"] += this.bridgeString.start(upperString);
    data["lowerBridge"] += this.bridgeString.start(lowerString);
    data["callCount"] += 1;
    data["status"] = "continue";
    return data;
  }

  middleString(data, upperString, lowerString) {
    data["upperBridge"] += this.bridgeString.middle(upperString);
    data["lowerBridge"] += this.bridgeString.middle(lowerString);
    data["callCount"] += 1;
    data["status"] = "continue";
    return data;
  }

  retry(data) {
    data["currentAnswer"] === "R" ? this.enterRetry(data) : this.enterQuit(data);
    return data;
  }

  enterRetry(data) {
    data["status"] = "retry";
    data["callCount"] = 0;
    data["upperBridge"] = "";
    data["lowerBridge"] = "";
  }

  enterQuit(data) {
    data["status"] = "quit";
    return data;
  }
}

module.exports = BridgeGame;
