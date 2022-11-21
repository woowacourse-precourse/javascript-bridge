const { MESSAGE } = require('../Constants.js');
const BridgeSize = require('../Validate/BridgeSize.js');
const CrossingBridge = require('../Validate/BridgeCommand.js');
const RandomNumber = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../BridgeGame.js');
const Retry = require('../Validate/Retry.js');
const OutputView = require('./OutputView.js');
const { playerInput, printMessage, close } = require('../Utils.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    playerInput(MESSAGE.INPUT_SIZE, callback);
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving(callback) {
    playerInput(MESSAGE.INPUT_SPACE_TO_MOVE, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    playerInput(MESSAGE.INPUT_WANT_RETRY, callback);
  },
};

module.exports = InputView;
