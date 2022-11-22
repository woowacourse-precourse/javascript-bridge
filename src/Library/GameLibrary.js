const InputView = require("../GameIO/InputView.js");
const Game = require("../Component/Game");

const GameLibrary = {
  playAlgorithms(getGameResult, bridgeLength, bridgeGame) {
    for (let moveCount = 0; moveCount < bridgeLength; moveCount++) {
      const DIRECTION = InputView.readMoving();

      const MOVE_RESULT = this.moveTurn(bridgeGame, DIRECTION, moveCount);
      if (MOVE[MOVE_RESULT] === "R") {
        moveCount = 0;
      }
      if (MOVE[MOVE_RESULT] === "Q") {
        getGameResult();
        return false;
      }
    }
    return true;
  },

  moveTurn(bridgeGame, direction, moveCount) {
    const MOVE_RESULT = bridgeGame.move(direction, moveCount);
    if (!MOVE_RESULT) {
      const IS_QUIT = this.askQuit(bridgeGame.retry);
      return IS_QUIT;
    }
    return "M";
  },

  askQuit(retry) {
    const IS_QUIT = InputView.readGameCommand();
    if (IS_QUIT === "R") {
      Game.increasePlayCount();
      bridgeGame.retry();
    }
    return IS_QUIT;
  },
};
modult.exports = GameLibrary;
