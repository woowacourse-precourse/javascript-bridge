const App = require("./App");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move(bridgeSize, bridge, moveCount, traceMap) {
    while (bridgeSize > moveCount) {
      let where =
        this.movingValidate(await InputView.readMoving()) === "U" ? 0 : 1;
      traceMap.push([where, bridge[where][moveCount]]);
      if (bridge[where][moveCount] === "O") {
        return "O";
      }
      if (bridge[where][moveCount] === "X") {
        return "X";
      }
    }
    return "END";
  }

  movingValidate(move) {
    try {
      if (move === "U" || move === "D") {
        return move;
      } else {
        throw "[ERROR] 이동할 칸은 U나 D만 입력 가능합니다.";
      }
    } catch (err) {
      console.log(err);
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    let regame = null;
    while (regame !== "Q" && regame !== "R") {
      regame = this.gameCommandValidate(await InputView.readGameCommand());
      if (regame === "Q") {
        return "Q";
      } else if (regame === "R") {
        return "R";
      } else {
        regame = null;
      }
    }
  }

  gameCommandValidate(regame) {
    try {
      if (regame === "R" || regame === "Q") {
        return regame;
      } else {
        throw "[ERROR] 재시작(R)과 그만둠(Q) 중 하나만 선택 가능합니다.";
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = BridgeGame;
