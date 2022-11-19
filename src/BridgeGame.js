const MissionUtils = require("@woowacourse/mission-utils");
// const Index = require("./index");
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
    const bridge = data["bridge"];
    const callCount = data["callCount"];

    if (bridge[callCount] === data["currentAnswer"]) {
      if (data["currentAnswer"] === "U") {
        if (data["callCount"] === 0) {
          data["upperBridge"] += this.bridgeString.start("O");
          data["lowerBridge"] += this.bridgeString.start(" ");
          data["callCount"] += 1;
          data["status"] = "continue";
          return data;
        }
        data["upperBridge"] += this.bridgeString.middle("O");
        data["lowerBridge"] += this.bridgeString.middle(" ");
        data["callCount"] += 1;
        data["status"] = "continue";
        return data;
      } else if (data["currentAnswer"] === "D") {
        if (data["callCount"] === 0) {
          data["upperBridge"] += this.bridgeString.start(" ");
          data["lowerBridge"] += this.bridgeString.start("O");
          data["callCount"] += 1;
          data["status"] = "continue";
          return data;
        } else {
          data["upperBridge"] += this.bridgeString.middle(" ");
          data["lowerBridge"] += this.bridgeString.middle("O");
          data["callCount"] += 1;
          data["status"] = "continue";
          return data;
        }
      }
    } else {
      if (data["currentAnswer"] === "U") {
        if (data["callCount"] === 0) {
          data["upperBridge"] += this.bridgeString.start("X");
          data["lowerBridge"] += this.bridgeString.start(" ");
          data["status"] = "fail";
          return data;
        }
        data["upperBridge"] += this.bridgeString.middle("X");
        data["lowerBridge"] += this.bridgeString.middle(" ");
        data["status"] = "fail";
        return data;
      }
      if (data["currentAnswer"] === "D") {
        if (data["callCount"] === 0) {
          data["upperBridge"] += this.bridgeString.start(" ");
          data["lowerBridge"] += this.bridgeString.start("X");
          data["status"] = "fail";
          return Inputthis.data;
        }
        data["upperBridge"] += this.bridgeString.middle(" ");
        data["lowerBridge"] += this.bridgeString.middle("X");
        data["status"] = "fail";
        return data;
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(data) {
    if (data["currentAnswer"] === "R") {
      data["status"] = "retry";
      data["callCount"] = 0;
      data["upperBridge"] = "";
      data["lowerBridge"] = "";

      return data;
    }
    if (data["currentAnswer"] === "Q") {
      data["status"] = "quit";
      return data;
    }
  }
}

module.exports = BridgeGame;
