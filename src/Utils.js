const { Console } = require('@woowacourse/mission-utils');
const { GAME_STRING } = require('./Constants');

const Utils = {
  readLine(message, callback) {
    Console.print(message);
    Console.readLine(GAME_STRING.empty, callback);
  },
  showErrorMessage(errorMessage, bridgeFunction, bridgeGame) {
    Console.print(errorMessage);
    bridgeFunction(bridgeGame);
  },
};

module.exports = Utils;
