const { READ_TYPE, GAME_COMMAND } = require('../constants');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');

const BridgeState = require('./BridgeState');
const BridgeGame = require('./BridgeGame');

const Utils = require('../utils/Utils');

/**
 * @type {BridgeGame}
 */
let bridgeGame = null;

const BridgeGameController = {
  start() {
    OutputView.printStartMessage();

    this.initializeBridgeGame();
  },

  initializeBridgeGame() {
    InputView.read(READ_TYPE.BRIDGE_SIZE, (bridgeSize) => {
      BridgeState.setBridgeSize(Utils.convertToNumber(bridgeSize));

      const answerBridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      BridgeState.setAnswerBridge(answerBridge);

      bridgeGame = new BridgeGame();
      OutputView.addNewLine();
      this.loopGame();
    });
  },

  loopGame() {
    InputView.read(READ_TYPE.MOVING, (moving) => {
      bridgeGame.move(moving);
      OutputView.printMap();
      OutputView.addNewLine();

      const retryOrAllDone = this.checkRetryOrAllDone();
      if (retryOrAllDone) return;

      this.loopGame();
    });
  },

  checkRetryOrAllDone() {
    const isRetry = this.checkRetry();
    if (isRetry) return true;

    const isAllDone = this.checkAllDone();
    if (isAllDone) return true;

    return false;
  },

  checkRetry() {
    const isRetry = bridgeGame.retry();

    if (isRetry) {
      this.DoQuitOrNew();
      return true;
    }

    return false;
  },

  checkAllDone() {
    const isAllDone = bridgeGame.allDone();

    if (isAllDone) {
      this.gameEnd();
      return true;
    }

    return false;
  },

  DoQuitOrNew() {
    InputView.read(READ_TYPE.GAME_COMMAND, (gameCommand) => {
      const isRetry = this.checkCommandRetry(gameCommand);
      if (isRetry) return;

      const isQuit = this.checkCommandQuit(gameCommand);
      if (isQuit) return;
    });
  },

  checkCommandRetry(gameCommand) {
    if (gameCommand === GAME_COMMAND.RETRY) {
      bridgeGame = new BridgeGame();
      this.loopGame();
      return true;
    }

    return false;
  },

  checkCommandQuit(gameCommand) {
    if (gameCommand === GAME_COMMAND.QUIT) {
      this.gameEnd();
      return true;
    }

    return false;
  },

  gameEnd() {
    OutputView.printResult();
    OutputView.close();
  },
};

module.exports = BridgeGameController;
