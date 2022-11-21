const OutputView = require("../console/OutputView");
const Message = require("../lib/Message");
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../console/InputView");

class ViewPrinter {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  insertBridgeSize(bridgeSetter, nextCallback) {
    const errorCallback = this.#bridgeGame.makeBridge.bind(this.#bridgeGame);
    InputView.readBridgeSize(bridgeSetter, nextCallback, errorCallback);
  }

  selectBridgeDirection(moveCallback, printCallback) {
    const errorCallback = this.#bridgeGame.selectDirection.bind(this.#bridgeGame)
    InputView.readMoving(moveCallback, printCallback, errorCallback)
  }

  selectRetry(restartCallback, quitCallback){
    const errorCallback = this.#bridgeGame.retry.bind(this.#bridgeGame)
    InputView.readGameCommand(restartCallback,quitCallback,errorCallback)
  }

  printEndResult(bridges, gameState) {
    const [upside, downside] = bridges;
    OutputView.printResult(gameState, upside, downside);
    MissionUtils.Console.close();
  }

  sayHello() {
    OutputView.printLine(Message.GAME_START);
  }

  printBridge(bridges) {
    // const [upBridge, downBridge] = bridges;
    // OutputView.printMap(upBridge, downBridge);
    OutputView.printMap(...bridges);
  }
}

module.exports = ViewPrinter;
