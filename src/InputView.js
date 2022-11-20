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
    bridgeGame.move(moving);
    this.printMoveResult();
  },

  valitateMoving(moving) {
    try {
      if (moving.length !== 1) throw MESSAGE_ERROR.MOVING_ONLY_CHAR;
      if (moving !== MOVING.UP && moving !== MOVING.DOWN ) throw MESSAGE_ERROR.MOVING_ONLY_U_OR_D;
    } catch(e) {
      OutputView.printError(e);
      this.readMoving();
    }
  },

  printMoveResult() {
    OutputView.printMap(bridgeGame.getMoveResult());
    if (bridgeGame.isFail()) this.readGameCommand();
    else if (bridgeGame.isSuccess()) OutputView.printResult();
    else this.readMoving();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
