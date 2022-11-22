const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const gameConst = require("./const");

class App {
  #game;
  constructor() {
    this.#game = new BridgeGame();
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.readBridgeSize.bind(this));
  }

  readBridgeSize(length) {
    this.#game.makeRealBridge(Number(length));
    this.readMoving();
  }

  readMoving() {
    InputView.readMoving(this.move.bind(this));
  }

  move(cmd) {
    let result = this.#game.move(cmd);
    OutputView.printMap(this.#game.userBridge);
    this.checkFinish(result);
  }

  checkFinish(result) {
    if (result === gameConst.sign.O_SIGN && this.#game.ifFinish()) {
        OutputView.printResult(this.#game.userBridge, this.#game.tryCnt, true);
        Console.close();
        return;
    }
    if(result === gameConst.sign.O_SIGN) {
      this.readMoving();
      return;
    }  
    InputView.readGameCommand(this.makeDecision.bind(this));
  }

  makeDecision(cmd) {
    if (cmd === gameConst.cmd.RETRY_CMD) {
      this.#game.retry();
      this.readMoving();
      return;
    } 
    OutputView.printResult(this.#game.userBridge, this.#game.tryCnt, false);
    Console.close();
  }
}
module.exports = App;
