const { Console } = require('@woowacourse/mission-utils');
const { QUERY } = require('./constants/constants');
const OutputView = require('./OutputView');
const validator = require('./validator/validator');

const InputView = {
  readBridgeSize(game) {
    Console.readLine(QUERY.SIZE, (size) => {
      try {
        validator.validateBridgeSize(size);
        game.generateBridge(size);
        this.readMoving(game);
      } catch (err) {
        this.readError(err, () => this.readBridgeSize(game));
      }
    });
  },
  readMoving(game) {
    Console.readLine(QUERY.MOVE, (char) => {
      try {
        validator.validateMove(char);
        game.move(char);
        this.gameProgress(game);
      } catch (err) {
        this.readError(err, () => this.readMoving(game));
      }
    });
  },
  readGameCommand(game) {
    Console.readLine(QUERY.RETRY, (command) => {
      try {
        validator.validateCommand(command);
        if (!game.retry(command)) OutputView.printResult(game);
        this.readMoving(game);
      } catch (err) {
        this.readError(err, () => this.readMoving(game));
      }
    });
  },
  readError(err, callback) {
    OutputView.printError(err);
    callback();
  },
  gameProgress(game) {
    OutputView.printMap(game);
    if (game.clear()) OutputView.printResult(game);
    if (!game.over()) this.readGameCommand(game);
    this.readMoving(game);
  },
};

module.exports = InputView;
