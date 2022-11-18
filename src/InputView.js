const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { ERROR, REQUEST } = require('./constants/Message');
const { LENGTH_MIN, LENGTH_MAX } = require('./constants/Range');
const { isNumberInRange } = require('./lib/Utils');

const InputView = {
  readBridgeSize() {
    Console.readLine(REQUEST.BRIDGE_LENGTH, (input) => {
      InputView.validateLength(input);
      const bridgeGame = new BridgeGame(Number(input));
      InputView.readMoving(bridgeGame);
    });
  },

  readMoving(game) {
    Console.readLine(REQUEST.MOVE_SPACE, (input) => {
      InputView.validateMoving(input);
      const isContinued = game.move(input);
      if (isContinued) InputView.readMoving(game);
    });
  },

  readGameCommand() {},

  validateLength(input) {
    if (!isNumberInRange(input, LENGTH_MIN, LENGTH_MAX)) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },

  validateMoving(input) {
    return input === 'U' || input === 'D';
  },

  validateGameCommand(input) {
    return input === 'R' || input === 'Q';
  },
};

module.exports = InputView;
