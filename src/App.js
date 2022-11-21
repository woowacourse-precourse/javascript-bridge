const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { printMap } = require("./OutputView");

class App {
  async play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    let tryNumber = 1;
    const bridgeSize = await this.makeBridgeSize(0);

    // 입력받은 길이만큼 다리 생성
    const bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    console.log("bridge", bridge);
    const bridgeGame = new BridgeGame();

    // let moveCount = 0;
    // let traceMap = [];
    // let retry = "R";

    // while (retry === "R") {
    //   const gameResults = await bridgeGame.move(
    //     bridgeSize,
    //     bridge,
    //     moveCount,
    //     traceMap
    //   );
    //   console.log(gameResults, "gameResults");
    //   if (gameResults === "O") {
    //     moveCount++;
    //     console.log("중간결과프린트");
    //     OutputView.printMap();
    //   }
    //   if (gameResults === "X") {
    //     console.log("중간결과프린트, 리겜할꺼?");
    //     OutputView.printMap();
    //     retry = await bridgeGame.retry();
    //     if(command === 'R'){
    //       tryNumber++
    //     }
    //     if(command === 'Q'){
    //       console.log("최종결과 프린트");
    //       OutputView.printResult(false, tryNumber, gameResults[1]);
    //     }
    //   }
    //   if (gameResults === "END") {
    //     console.log("최종결과 프린트");
    //     OutputView.printResult(true, tryNumber, gameResults[1]);
    //   }
    // }
  }

  async makeBridgeSize(bridgeSize = 0) {
    while (isNaN(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
      bridgeSize = await InputView.readBridgeSize();
      this.bridgeSizeValidate(bridgeSize);
    }
    return bridgeSize;
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

  isRetry(command){
    if(command === 'R'){
      return tryNumber++
    }
    if(command === 'Q'){
      console.log("최종결과 프린트");
      OutputView.printResult(false, tryNumber, gameResults[1]);
    }
  }
}

module.exports = App;
