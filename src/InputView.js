const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { isNumberInRange } = require('./lib/Utils');
const { ERROR, REQUEST } = require('./constants/Message');
const RANGE = require('./constants/Range');
const COMMAND = require('./constants/Command');

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

      if (game.isFailed()) {
        InputView.readGameCommand(game);
        return;
      }
    });
  },

  readGameCommand(game) {
    Console.readLine(REQUEST.GAME_RETRY, (input) => {
      InputView.validateGameCommand(input);
      if (input === COMMAND.GAME_RETRY) {
        game.retry();
        InputView.readMoving(game);
      }
    });
  },

  validateLength(input) {
    if (!isNumberInRange(input, RANGE.LENGTH_MIN, RANGE.LENGTH_MAX)) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },

  validateMoving(input) {
    return input === COMMAND.MOVE_UP || input === COMMAND.MOVE_DOWN;
  },

  validateGameCommand(input) {
    return input === COMMAND.GAME_RETRY || input === COMMAND.GAME_QUIT;
  },
};

module.exports = InputView;
