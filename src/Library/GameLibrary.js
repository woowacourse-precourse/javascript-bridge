const InputView = require("../GameIO/InputView.js");

const GameLibrary = {
  playAlgorithms(bridgeLength) {
    for (let moveCount = 0; moveCount < bridgeLength; moveCount++) {
      const DIRECTION = InputView.readMoving();

      const MOVE_RESULT = this.moveTurn(DIRECTION, moveCount);
      if (MOVE[MOVE_RESULT] === "R") {
        moveCount = 0;
      }
      if (MOVE[MOVE_RESULT] === "Q") {
        return false;
      }
    }
    return true;
  },

  moveTurn(direction, moveCount) {
    const MOVE_RESULT = this.bridgeGame.move(direction, moveCount);
    if (!MOVE_RESULT) {
      const IS_QUIT = this.askQuit();
      return IS_QUIT;
    }
    return "M";
  },

  askQuit() {
    const IS_QUIT = InputView.readGameCommand();
    if (IS_QUIT === "Q") {
      this.getPrintResult();
    }
    if (IS_QUIT === "R") {
      this.increasePlayCount();
      this.bridgeGame.retry();
    }
    return IS_QUIT;
  },

  gameResult() {
    const JUMP_HISTORY = this.bridgeGame.getJumpHistory;
    OutputView.printResult(this.#playCount, this.#bridgeStatus, JUMP_HISTORY);
  },
};
modult.exports = GameLibrary;
