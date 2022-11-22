const InputView = require("../View/InputView.js");

const GameLibrary = {
  playAlgorithms(increasePlayCount, bridgeLength, bridgeGame) {
    for (let moveCount = 0; moveCount < bridgeLength; moveCount++) {
      const MOVE_RESULT = this.moveTurn(
        bridgeGame,
        increasePlayCount,
        moveCount
      );
      if (MOVE_RESULT === "R") {
        moveCount = 0;
      }
      if (MOVE_RESULT === "Q") {
        return false;
      }
    }
    return true;
  },

  moveTurn(bridgeGame, increasePlayCount, moveCount) {
    const DIRECTION = InputView.readMoving();
    const MOVE_RESULT = bridgeGame.move(DIRECTION, moveCount);
    if (!MOVE_RESULT) {
      const IS_QUIT = this.askQuit(bridgeGame.retry, increasePlayCount);
      return IS_QUIT;
    }
    return "M";
  },

  askQuit(retry, increasePlayCount) {
    const IS_QUIT = InputView.readGameCommand();
    if (IS_QUIT === "R") {
      retry();
      increasePlayCount();
    }

    return IS_QUIT;
  },
};
module.exports = GameLibrary;
