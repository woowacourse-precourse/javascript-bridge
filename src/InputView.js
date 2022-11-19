const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const { isNumberInRange } = require('./lib/Utils');
const { MOVE, GAME_RETRY, GAME_QUIT } = require('./constants/Command');
const { ERROR, REQUEST } = require('./constants/Message');
const RANGE = require('./constants/Range');

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
      OutputView.printMap(game.getResultArray());
      if (isContinued) InputView.readMoving(game);

      if (game.isFailed()) InputView.readGameCommand(game);
      if (game.isFinished()) OutputView.printResult(game);
    });
  },

  readGameCommand(game) {
    Console.readLine(REQUEST.GAME_RETRY, (input) => {
      InputView.validateGameCommand(input);
      if (input === GAME_RETRY) {
        game.retry();
        InputView.readMoving(game);
        return;
      }
      OutputView.printResult(game);
      Console.close();
    });
  },

  validateLength(input) {
    if (!isNumberInRange(input, RANGE.LENGTH_MIN, RANGE.LENGTH_MAX)) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  },

  validateMoving(input) {
    if (input !== MOVE.UP && input !== MOVE.DOWN) {
      throw new Error(ERROR.INVALID_MOVE);
    }
  },

  validateGameCommand(input) {
    if (input !== GAME_RETRY && input !== GAME_QUIT) {
      throw new Error(ERROR.INVALID_RETRY);
    }
  },
};

module.exports = InputView;
