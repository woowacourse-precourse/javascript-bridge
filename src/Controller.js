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
    switch (status) {
      case "GAME_OVER":
        const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
        OutputView.printResult(bridge, inputs, gameCount);
        break;
      case "FALL_OFF":
        InputView.readGameCommand(this.readGameCommendCallbackFnc);
        break;
      default:
        InputView.readMoving(this.readMoveCallbackFnc);
    }
  };
  selectNextFncAfterRetry = (status) => {
    switch (status) {
      case "QUIT":
        const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
        OutputView.printResult(bridge, inputs, gameCount);
        break;
      default:
        this.#bridgeGame.setGameCount();
        InputView.readMoving(this.readMoveCallbackFnc);
    }
  };
  readGameCommendCallbackFnc = (input) => {
    const retryStatus = this.#bridgeGame.retry(input);
    this.selectNextFncAfterRetry(retryStatus);
  };
  readBridgeSizeCallbackFnc = (input) => {
    this.#bridgeGame.bridge(input);
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
