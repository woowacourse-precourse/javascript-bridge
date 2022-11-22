const InputView = require("../GameIO/InputView");
const Bridge = require("./Bridge.js");
const BridgeGame = require("./BridgeGame");
const OutputView = require("../GameIO/OutputView");

class Game {
  #bridge;
  #playCount;
  #bridgeLength;
  #bridgeStatus;
  #bridgeGame;
  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#playCount = 1;
    this.#bridge = new Bridge(this.#bridgeLength);
    this.#bridgeStatus = this.#bridge.getBridgeStatus();
    this.#bridgeGame = new BridgeGame(this.#bridgeStatus);
  }

  get getPlayCount() {
    return this.#playCount;
  }

  increasePlayCount() {
    this.#playCount += 1;
  }

  get getBridgeGame() {
    return this.#bridgeGame;
  }
  // get getBridgeStatus() {
  //   return this.#bridgeStatus;
  // }

  // playAlgorithms(bridgeLength) {
  //   for (let moveCount = 0; moveCount < bridgeLength; moveCount++) {
  //     const DIRECTION = InputView.readMoving();

  //     const MOVE_RESULT = this.moveTurn(DIRECTION, moveCount);
  //     if (MOVE_RESULT === "R") {
  //       moveCount = 0;
  //     }
  //     if (MOVE_RESULT === "Q") {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // moveTurn(direction, moveCount) {
  //   const MOVE_RESULT = this.#bridgeGame.move(direction, moveCount);
  //   if (!MOVE_RESULT) {
  //     const IS_QUIT = this.askQuit();
  //     return IS_QUIT;
  //   }
  //   return "M";
  // }

  // askQuit() {
  //   const IS_QUIT = InputView.readGameCommand();
  //   if (IS_QUIT === "Q") {
  //     this.getPrintResult();
  //   }
  //   if (IS_QUIT === "R") {
  //     this.increasePlayCount();
  //     this.#bridgeGame.retry();
  //   }
  //   return IS_QUIT;
  // }

  getGameResult() {
    const JUMP_HISTORY = this.#bridgeGame.getJumpHistory;
    OutputView.printResult(this.#playCount, this.#bridgeStatus, JUMP_HISTORY);
  }
}

module.exports = Game;
