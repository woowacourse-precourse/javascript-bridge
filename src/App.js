const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const gameConst = require("../constant/constant.js");

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(length) {
    this.validateBridgeLength(length);
    this.#game.makeRealBridge(Number(length));
    this.readMoving();
  }
  
  readMoving() {
    InputView.readMoving(this.move.bind(this));
  }

  move(cmd) {
    this.validateMoveCommand(cmd);
    let result = this.#game.move(cmd);
    OutputView.printMap(this.#game.userBridge);
    this.checkFinish(result);
  }

  checkFinish(result) {
    if (result === gameConst.sign.O_SIGN && this.#game.ifFinish()) {
        this.exitGame(true)
        return;
    }
    if(result === gameConst.sign.O_SIGN) {
      this.readMoving();
      return;
    }  
    InputView.readGameCommand(this.makeDecision.bind(this));
  }

  makeDecision(cmd) {
    this.validateRetryCommand(cmd);
    if (cmd === gameConst.cmd.RETRY_CMD) {
      this.#game.retry();
      this.readMoving();
      return;
    } 
    this.exitGame(false);
  }

  exitGame(success){
    OutputView.printResult(this.#game.userBridge, this.#game.tryCnt, success);
    Console.close();
  }

  validateBridgeLength(length) {
    if (isNaN(length)) {
      throw new Error(gameConst.error.BRIDGE_ERROR);
    }
    if (Number(length) < 3 || Number(length) > 20) {
      throw new Error(gameConst.error.BRIDGE_ERROR);
    }
  }

  validateMoveCommand(cmd) {
    if (cmd !== gameConst.cmd.UP_CMD && cmd !== gameConst.cmd.DOWN_CMD) {
      throw new Error(gameConst.error.MOVE_COMMAND_ERROR);
    }
  }

  validateRetryCommand(cmd) {
    if (cmd !== gameConst.cmd.QUIT_CMD && cmd !== gameConst.cmd.RETRY_CMD) {
      throw new Error(gameConst.error.RETRY_COMMAND_ERROR);
    }
  }
}

module.exports = App;
