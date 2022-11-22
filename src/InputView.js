const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_PROCESS, MESSAGE_ERROR, BRIDGE_SIZE_RANGE, MOVING, GAME_COMMAND } = require('./Constants');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const bridgeGame = new BridgeGame();

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_PROCESS.INPUT_BRIDGE_LENGTH, this.validateBridgeSize.bind(this));
  },

  validateBridgeSize(bridgeSize) {
    try {
      this.exceptionBridgeSize(bridgeSize);
      this.setBridgeSize(bridgeSize);
    } catch(e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
  },

  exceptionBridgeSize(bridgeSize) {
    if (/[^0-9]/.test(bridgeSize)) throw MESSAGE_ERROR.BRIDGE_ONLY_NUMBER;
      if (Number(bridgeSize) < BRIDGE_SIZE_RANGE.MIN || Number(bridgeSize) > BRIDGE_SIZE_RANGE.MAX) {
        throw MESSAGE_ERROR.BRIDGE_OUT_OF_RANGE;
      }
  },

  setBridgeSize(bridgeSize) {
    bridgeGame.setBridge(BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate));
    this.readMoving();
  },

  readMoving() {
    Console.readLine(MESSAGE_PROCESS.INPUT_MOVING, this.valitateMoving.bind(this));
  },

  valitateMoving(moving) {
    try {
      this.exceptionMoving(moving);
      this.setMoving(moving);
    } catch(e) {
      OutputView.printError(e);
      this.readMoving();
    }
  },

  exceptionMoving(moving) {
    if (moving.length !== 1) throw MESSAGE_ERROR.MOVING_ONLY_CHAR;
    if (moving !== MOVING.UP && moving !== MOVING.DOWN ) throw MESSAGE_ERROR.MOVING_ONLY_U_OR_D;
  },

  setMoving(moving) {
    bridgeGame.move(moving);
    this.printMoveResult();

  },

  printMoveResult() {
    OutputView.printMap(bridgeGame.getMoveResult());
    if (bridgeGame.isFail()) this.readGameCommand();
    if (bridgeGame.isSuccess()) OutputView.printResult(bridgeGame.getGameResult());
    else this.readMoving();
  },

  readGameCommand() {
    Console.readLine(MESSAGE_PROCESS.INPUT_GAME_COMMAND, this.valitateGameCommand.bind(this));
  },

  valitateGameCommand(command) {
    try {
      this.exceptionGameCommand(command);
      this.setGameCommand(command);
    } catch(e) {
      OutputView.printError(e);
      this.readGameCommand();
    }
  },

  exceptionGameCommand(command) {
    if (command.length !== 1) throw MESSAGE_ERROR.GAME_COMMAND_ONLY_CHAR;
    if (command !== GAME_COMMAND.RETRY && command !== GAME_COMMAND.QUIT ) {
      throw MESSAGE_ERROR.GAME_COMMAND_ONLY_R_OR_Q;
    }
  },

  setGameCommand(command) {
    if (command === GAME_COMMAND.RETRY) {
      bridgeGame.retry();
      this.readMoving();
    }
    if (command === GAME_COMMAND.QUIT) OutputView.printResult(bridgeGame.getGameResult());
  }
};

module.exports = InputView;
