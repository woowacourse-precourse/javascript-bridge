const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class Controller {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setGameCount();
  }
  selectNextFncAfterMove = (status) => {
    if (status === "GAME_OVER") {
      const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
      return OutputView.printResult(bridge, inputs, gameCount);
    }
    if (status === "FALL_OFF") {
      return InputView.readGameCommand(this.readGameCommendCallbackFnc);
    }
    InputView.readMoving(this.readMoveCallbackFnc);
  };
  selectNextFncAfterRetry = (status) => {
    if (status === "QUIT") {
      const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
      return OutputView.printResult(bridge, inputs, gameCount);
    }
    this.#bridgeGame.setGameCount();
    InputView.readMoving(this.readMoveCallbackFnc);
  };
  readGameCommendCallbackFnc = (input) => {
    const retryStatus = this.#bridgeGame.retry(input);
    this.selectNextFncAfterRetry(retryStatus);
  };
  readBridgeSizeCallbackFnc = (input) => {
    this.#bridgeGame.bridge(input);
    console.log("");
    InputView.readMoving(this.readMoveCallbackFnc);
  };
  readMoveCallbackFnc = (input) => {
    const gameStatus = this.#bridgeGame.move(input);
    const { bridge, inputs } = this.#bridgeGame.getState();
    OutputView.printMap(bridge, inputs);
    this.selectNextFncAfterMove(gameStatus);
  };
  start = () => {
    InputView.readBridgeSize(this.readBridgeSizeCallbackFnc);
  };
}

module.exports = Controller;
