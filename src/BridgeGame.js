const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class BridgeGame {
  async move(bridgeSize, bridge, moveCount) {
    let where = null;
    while (bridgeSize > moveCount) {
      where = this.movingValidate(await InputView.readMoving());
      if ((where === "U" || where === "D") && bridge[moveCount] === where) {
        return "O";
      }
      if ((where === "U" || where === "D") && bridge[moveCount] !== where) {
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
      MissionUtils.Console.print(err);
    }
  }

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
      MissionUtils.Console.print(err);
    }
  }
}

module.exports = BridgeGame;
