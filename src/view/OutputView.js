const { print } = require('../utils/utils');
const {
  MESSAGE,
  LINE_BREAK,
  SHOW_GAME_RESULT,
  SHOW_RETRY_COUNT,
  STARTING_POINT,
  FINISHING_POINT,
  EDGE,
} = require('../utils/constants');

const OutputView = {
  printMessage(message) {
    print(message);
  },

  printError(error) {
    print(error);
    print(LINE_BREAK);
  },

  printMap(bridgeGame) {
    print(
      STARTING_POINT + bridgeGame.getUpperBridge().join(EDGE) + FINISHING_POINT
    );
    print(
      STARTING_POINT + bridgeGame.getLowerBridge().join(EDGE) + FINISHING_POINT
    );
    print(LINE_BREAK);
  },

  printResult(GAME_RESULT, bridgeGame) {
    print(MESSAGE.totalGameResult);
    this.printMap(bridgeGame);
    print(SHOW_GAME_RESULT(GAME_RESULT));
    print(SHOW_RETRY_COUNT(bridgeGame.getRetryingCount()));
  },
};

module.exports = OutputView;
