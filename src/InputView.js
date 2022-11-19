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
      try {
        InputView.validateLength(input);
      } catch (e) {
        Console.print(e.message);
        InputView.readBridgeSize();
      }
    });
  },

  readMoving(game) {
    Console.readLine(REQUEST.MOVE_SPACE, (input) => {
      try {
        InputView.validateMoving(input, game);
      } catch (e) {
        Console.print(e.message);
        InputView.readMoving(game);
      }
    });
  },

  readGameCommand(game) {
    Console.readLine(REQUEST.GAME_RETRY, (input) => {
      try {
        InputView.validateGameCommand(input, game);
      } catch (e) {
        Console.print(e.message);
        InputView.readGameCommand(game);
      }
    });
  },

  validateLength(input) {
    if (!isNumberInRange(input, RANGE.LENGTH_MIN, RANGE.LENGTH_MAX)) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
    const bridgeGame = new BridgeGame(Number(input));
    InputView.readMoving(bridgeGame);
  },

  validateMoving(input, game) {
    if (input !== MOVE.UP && input !== MOVE.DOWN) {
      throw new Error(ERROR.INVALID_MOVE);
    }
    const isContinued = game.move(input);
    OutputView.printMap(game.getResultArrays());
    if (isContinued) InputView.readMoving(game);

    if (game.isFailed()) InputView.readGameCommand(game);
    if (game.isFinished()) OutputView.printResult(game);
  },

  validateGameCommand(input, game) {
    if (input !== GAME_RETRY && input !== GAME_QUIT) {
      throw new Error(ERROR.INVALID_RETRY);
    }
    if (input === GAME_RETRY) {
      game.retry();
      InputView.readMoving(game);
      return;
    }
    OutputView.printResult(game);
    Console.close();
  },
};

module.exports = InputView;
