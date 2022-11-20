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
      if (/[^0-9]/.test(bridgeSize)) throw MESSAGE_ERROR.BRIDGE_ONLY_NUMBER;
      if (Number(bridgeSize) < BRIDGE_SIZE_RANGE.MIN || Number(bridgeSize) > BRIDGE_SIZE_RANGE.MAX) {
        throw MESSAGE_ERROR.BRIDGE_OUT_OF_RANGE;
      }
      this.setBridgeSize(bridgeSize);
    } catch(e) {
      OutputView.printError(e);
      this.readBridgeSize();
    }
  },

  setBridgeSize(bridgeSize) {
    bridgeGame.setBridge(BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator));
    this.readMoving();
  },

  readMoving() {
    Console.readLine(MESSAGE_PROCESS.INPUT_MOVING, this.valitateMoving.bind(this));
  },

  valitateMoving(moving) {
    try {
      if (moving.length !== 1) throw MESSAGE_ERROR.MOVING_ONLY_CHAR;
      if (moving !== MOVING.UP && moving !== MOVING.DOWN ) throw MESSAGE_ERROR.MOVING_ONLY_U_OR_D;
      this.setMoving(moving);
    } catch(e) {
      OutputView.printError(e);
      this.readMoving();
    }
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
      if (command.length !== 1) throw MESSAGE_ERROR.GAME_COMMAND_ONLY_CHAR;
      if (command !== GAME_COMMAND.RETRY && command !== GAME_COMMAND.QUIT ) {
        throw MESSAGE_ERROR.GAME_COMMAND_ONLY_R_OR_Q;
      }
      this.setGameCommand(command);
    } catch(e) {
      OutputView.printError(e);
      this.readGameCommand();
    }
  },

  setGameCommand(command) {
    if (command === 'R') {
      bridgeGame.retry();
      this.readMoving();
    }
    if (command === 'Q') OutputView.printResult(bridgeGame.getGameResult());
  }
};

module.exports = InputView;
