const { OUTPUT_MESSAGES, ERROR_MESSAGES } = require('../constants/messages');
const { print, close } = require('../utils/missionUtil');

const OutputView = {
  printStart() {
    const { gameStart } = OUTPUT_MESSAGES;
    print(gameStart);
  },

  printMap(currentBridgeGameMap) {
    print(currentBridgeGameMap);
  },

  printResult(userGameMapResult, isSuccess, userTryCount) {
    const { gameResult, tryCount, successOrFailure } = OUTPUT_MESSAGES;
    print(gameResult);
    print(userGameMapResult);
    print(successOrFailure(isSuccess));
    print(tryCount(userTryCount));
  },

  printError(errorType) {
    print(ERROR_MESSAGES[errorType]);
  },

  exit() {
    close();
  },
};

module.exports = OutputView;
