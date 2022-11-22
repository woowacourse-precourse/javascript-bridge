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
  readMoving(game) {},
  readGameCommand(game) {},
  readError(err, callback) {
    OutputView.printError(err);
    callback();
  },
};

module.exports = InputView;
