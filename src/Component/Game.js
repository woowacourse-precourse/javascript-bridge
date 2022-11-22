const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("../Library/BridgeGame");
const OutputView = require("../GameIO/OutputView");
const { MissionUtils } = require("@woowacourse/mission-utils");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  #bridgeStatus;
  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#playCount = 0;
    this.#bridge = new Bridge(this.#bridgeLength);
    this.#bridgeStatus = this.#bridge.getBridgeStatus();
    this.bridgeGame = new BridgeGame(this.#bridgeStatus);
  }

  getPlayCount() {
    return this.#playCount;
  }

  increasePlayCount() {
    this.#playCount += 1;
  }

  playAlgorithms() {
    let quitResult = true;

    for (let moveCount = 0; moveCount < this.#bridgeLength; moveCount++) {
      const DIRECTION = InputView.readMoving();
      const MOVE_RESULT = this.bridgeGame.move(DIRECTION, moveCount);

      if (!MOVE_RESULT) {
        quitResult = this.askQuit();
      }
      if (quitResult === false) {
        return false;
      }
    }
    return true;
  }

  moveGetResult(moveCount) {
    const MOVE_RESULT = this.bridgeGame.move(InputView.readMoving(), moveCount);
    if (MOVE_RESULT) {
      return true;
    }
    if (!MOVE_RESULT) {
      const IS_QUIT = this.askQuit();
      if (IS_QUIT) {
        this.getPrintResult();
        return false;
      }
      if (!IS_QUIT) {
        this.increasePlayCount();
        this.bridgeGame.retry();
        return true;
      }
    }
  }

  askQuit() {
    const IS_QUIT = InputView.readGameCommand();

    if (IS_QUIT === "Q") {
      return true;
    }
    if (IS_QUIT === "R") {
      return false;
    }
  }

  getPrintResult() {
    const JUMP_HISTORY = this.bridgeGame.getJumpHistory();
    OutputView.printResult(this.#playCount, this.#bridgeStatus, JUMP_HISTORY);
  }
}

module.exports = Game;
