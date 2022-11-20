const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

class App {
  async play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");

    let bridgeSize = await this.makeBridgeSize(0)

    const bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    console.log('bridge',bridge);
    let moving = null;
    let traceMap = [];
    let moveCount = 0;
    while (bridgeSize >= moveCount && moving !== "D" && moving !== "U") {
      moving = await InputView.readMoving();
      let where = this.movingValidate(moving) === "U" ? 0 : 1;
      console.log(bridge[moveCount][where], moveCount);
      if (bridge[moveCount][where] === "O") {
        traceMap.push(where);
        OutputView.printMap(bridge, where, moveCount);
        moveCount++;
      } 
      // else {
      //   this.askReGame();
      // }
      moving = null;
    }
  }

  async makeBridgeSize(bridgeSize = 0){
    while (isNaN(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
      bridgeSize = await InputView.readBridgeSize();
      this.bridgeSizeValidate(bridgeSize);
    }
    return bridgeSize
  }

  bridgeSizeValidate(number) {
    try {
      if (3 <= number && number <= 20) {
        return number;
      } else {
        throw "[ERROR] 다리의 길이는 3~20 사이의 숫자여야 합니다.";
      }
    } catch (err) {
      console.log(err);
    }
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

  async askReGame() {
    let regame = null;
    while (regame !== "Q" && regame !== "R") {
      regame = await InputView.readGameCommand();
      regame = this.gameCommandValidate(regame);
      if (regame === "Q") {
        OutputView.printResult();
      } else {
        regame = null;
      }
    }
  }
}

module.exports = App;
