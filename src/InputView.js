const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_PROCESS, MESSAGE_ERROR, BRIDGE_SIZE_RANGE, MOVING } = require('./Constants');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const bridgeGame = new BridgeGame();

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE_PROCESS.INPUT_BRIDGE_LENGTH, this.setBridgeSize.bind(this));
  },

  setBridgeSize(bridgeSize) {
    this.validateBridgeSize(bridgeSize);
    bridgeGame.setBridge(BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator));
    this.readMoving();
  },

  validateBridgeSize(bridgeSize) {
    try {
      if (bridgeSize.trim().length === 0) throw MESSAGE_ERROR.BRIDGE_NOT_EMPTY;
      if (/[^0-9]/.test(bridgeSize)) throw MESSAGE_ERROR.BRIDGE_ONLY_NUMBER;
      if (Number(bridgeSize) < BRIDGE_SIZE_RANGE.MIN || Number(bridgeSize) > BRIDGE_SIZE_RANGE.MAX) {
        throw MESSAGE_ERROR.BRIDGE_OUT_OF_RANGE;
      }
    } catch(e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
  },

  readMoving() {
    Console.readLine(MESSAGE_PROCESS.INPUT_MOVING, this.setMoving.bind(this));
  },

  setMoving(moving) {
    this.valitateMoving(moving);
    if (moving.length > 0) {
      bridgeGame.move(moving);
      this.printMoveResult();
    }
  },

  valitateMoving(moving) {
    try {
      if (moving.trim().length === 0) throw MESSAGE_ERROR.MOVING_NOT_EMPTY;
      if (moving.length !== 1) throw MESSAGE_ERROR.MOVING_ONLY_CHAR;
      if (moving !== MOVING.UP && moving !== MOVING.DOWN ) throw MESSAGE_ERROR.MOVING_ONLY_U_OR_D;
    } catch(e) {
      OutputView.printError(e);
      this.readMoving();
    }
    return true;
  },

  printMoveResult() {
    OutputView.printMap(bridgeGame.getMoveResult());
    if (bridgeGame.isFail()) this.readGameCommand();
    if (bridgeGame.isSuccess()) OutputView.printResult(bridgeGame.getGameResult());
    else this.readMoving();
  },

  readGameCommand() {
    Console.readLine(MESSAGE_PROCESS.INPUT_GAME_COMMAND, this.setGameCommand.bind(this));
  },

  setGameCommand(command) {
    if (command === 'R') {
      bridgeGame.retry();
      this.readMoving();
    }
    if (command === 'Q') OutputView.printResult(bridgeGame.getGameResult());
  },

  valitateGameCommand(command) {
    try {
      if (command.trim().length === 0) throw MESSAGE_ERROR.GAME_COMMAND_NOT_EMPTY;
      if (command.length !== 1) throw MESSAGE_ERROR.GAME_COMMAND_ONLY_CHAR;
      if (command !== GAME_COMMAND.RETRY && command !== GAME_COMMAND.QUIT ) {
        throw MESSAGE_ERROR.GAME_COMMAND_ONLY_R_OR_Q;
      }
    } catch(e) {
      OutputView.printError(e);
      this.readGameCommand();
    }
  }
};

module.exports = InputView;
