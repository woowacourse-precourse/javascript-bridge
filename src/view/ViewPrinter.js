const OutputView = require("../console/OutputView");
const Message = require("../lib/Message");
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../console/InputView");
const Generator = require("../lib/BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");

class ViewPrinter {
  #bridgeGame;

  constructor(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  sayHello() {
    OutputView.printLine(Message.GAME_START);
  }

  insertBridgeSize() {
    const bridgeSetter = (size) => {
      const bridge = BridgeMaker.makeBridge(size, Generator.generate);
      this.#bridgeGame.getBridge().setOriginalBridge(bridge);
    };
    const nextCallback = this.selectBridgeDirection.bind(this);
    const errorCallback = this.insertBridgeSize.bind(this);

    InputView.readBridgeSize(bridgeSetter, nextCallback, errorCallback);
  }

  selectBridgeDirection() {
    const moveCallback = (direction) => {
      this.#bridgeGame.move(direction);
      this.printBridge(this.#bridgeGame.getBridge().getBridges());
    };
    const nextCallback = () => this.#bridgeGame.continue();
    const errorCallback = this.selectBridgeDirection.bind(this);

    InputView.readMoving(moveCallback, nextCallback, errorCallback);
  }

  printBridge(bridges) {
    OutputView.printMap(...bridges);
  }

  selectRetry() {
    const restartCallback = this.#bridgeGame.retry.bind(this.#bridgeGame);
    const errorCallback = this.selectRetry.bind(this);
    const quitCallback = this.#bridgeGame.endGame.bind(this.#bridgeGame);

    InputView.readGameCommand(restartCallback, quitCallback, errorCallback);
  }

  printEndResult() {
    const bridges = this.#bridgeGame.getBridge().getBridges();
    const gameState = this.#bridgeGame.getState();
    const [upside, downside] = bridges;

    OutputView.printResult(gameState, upside, downside);
    MissionUtils.Console.close();
  }
}

module.exports = ViewPrinter;
