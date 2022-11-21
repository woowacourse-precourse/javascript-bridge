const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation");

class GameController {

  constructor() {
    this.BridgeGame = new BridgeGame();
  }

  start() {
      OutputView.printStart();
      this.getBridgeSize();
    }

  getBridgeSize() {
    InputView.readBridgeSize(this.checkSizeValidation.bind(this));
  }

  checkSizeValidation(inputBridgeSize) {
    try {
      Validation.checkBridgeSize(inputBridgeSize);
    } catch (Error) {
      MissionUtils.Console.print(`${Error.message} \n`);
      return this.getBridgeSize();
    }

    return this.makeBridge(inputBridgeSize);
  }

  makeBridge(bridgeSize) {
    this.BridgeGame.makeBridge(bridgeSize);
    this.getMoving();
  }

  getMoving() {
    InputView.readMoving(this.checkMoveValidation.bind(this));
  }

  checkMoveValidation(inputMoving) {
    try {
      Validation.checkMoving(inputMoving);
    } catch (Error) {
      MissionUtils.Console.print(`${Error.message} \n`);
      return this.getMoving();
    }

    return inputMoving;
  }
}

module.exports = GameController;
