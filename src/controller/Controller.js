const { BridgeGame } = require("../model");
const { OutputView, InputView } = require("../view");

class Controller {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.setGameCount();
  }
  selectNextFncAfterMove = (status) => {
    const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
    status === "GAME_OVER" && OutputView.printResult(bridge, inputs, gameCount);
    status === "FALL_OFF" &&
      InputView.readGameCommand(this.readGameCommendCallbackFnc);
    status === "KEEP_MOVE" && InputView.readMoving(this.readMoveCallbackFnc);
  };
  selectNextFncAfterRetry = (status) => {
    const { bridge, inputs, gameCount } = this.#bridgeGame.getState();
    status === "QUIT" && OutputView.printResult(bridge, inputs, gameCount);
    status === "RESTRT" &&
      this.#bridgeGame.setGameCount() &&
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
