const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const { printMap } = require("./OutputView");

class App {
  constructor() {
    this.bridge = null;
    this.tryNumber = 1;
  }

  async play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    const bridgeSize = await this.makeBridgeSize(0);

    this.bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    const bridgeGame = new BridgeGame();

    let moveCount = 0;
    let retry = "R";
    let moveCommand = "";
    while (retry === "R") {
      const gameResults = await bridgeGame.move(
        bridgeSize,
        this.bridge,
        moveCount
      );
      moveCommand += gameResults === "END" ? "" : gameResults;
      if (gameResults === "O") {
        moveCommand.length === moveCount
          ? OutputView.printResult(this.tryNumber, this.bridge, moveCommand)
          : OutputView.printMap(
              this.bridge.slice(0, moveCount + 1),
              moveCommand
            );
        moveCount++;
      } else if (gameResults === "X") {
        OutputView.printMap(this.bridge.slice(0, moveCount + 1), moveCommand);

        retry = await bridgeGame.retry();
        if (this.isRetry(retry, this.tryNumber, moveCommand) === "R") {
          moveCommand = moveCommand.slice(0, moveCount);
        }
      } else if (gameResults === "END" || retry === "Q") {
        OutputView.printResult(this.tryNumber, this.bridge, moveCommand);
        retry = "Q";
      }
    }
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
      MissionUtils.Console.print(err);
    }
  }

  isRetry(command, tryNumber, moveCommand) {
    if (command === "R") {
      this.tryNumber += 1;
      return "R";
    }
    if (command === "Q") {
      OutputView.printResult(tryNumber, this.bridge, moveCommand);
    }
  }
}

module.exports = App;
