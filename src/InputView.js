const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./bridge/BridgeGame.js');
const OutputView = require('./OutputView.js');
const { MESSAGE, RESTART } = require('./constants/constant.js');
const Validator = require('./bridge/Validator.js');

const bridge = new BridgeGame();

const InputView = {
  readBridgeSize() {
    Console.readLine(`\n${MESSAGE.BRIDGE_LEN}\n`, answer => {
      try {
        Validator.validateBridgeSize(+answer);
        bridge.setBridge(answer);
        Console.print('');
        this.readMoving();
      } catch (e) {
        OutputView.printError(e);
        this.readBridgeSize();
      }
    });
  },

  readMoving() {
    Console.readLine(`${MESSAGE.CHOOSE_CELL}\n`, answer => {
      try {
        Validator.validateDirection(answer);
        bridge.move(answer);
        OutputView.printMap(bridge);

        if (bridge.detectWinner()) OutputView.printResult(bridge);
        else if (bridge.isPlaying) this.readMoving();
        else this.readGameCommand();
      } catch (e) {
        OutputView.printError(e);
        this.readMoving();
      }
    });
  },

  readGameCommand() {
    Console.readLine(`${MESSAGE.CHOOSE_RESTART}\n`, answer => {
      try {
        Validator.validateRestartInput(answer);
        if (answer === RESTART.RESTART) {
          bridge.retry();
          this.readMoving();
        } else OutputView.printResult(bridge);
      } catch (e) {
        OutputView.printError(e);
        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;
