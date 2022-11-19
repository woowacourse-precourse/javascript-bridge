const BridgeModel = require("../model/BridgeModel");

class BridgeController {
  constructor(mainController) {
    this.mainController = mainController;
    this.bridgeModel = new BridgeModel();
  }

  /**
   * 다리 길이에 대한 input 을 검증한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   */
  validateBridgeLengthInput(bridgeLengthInput) {
    if (!GENERAL_CONSTANTS.BRIDGE_LENGTH_REGEX.test(bridgeLengthInput)) {
      throw new Error(BRIDGE_INPUT_MESSAGES.INPUT_ERROR);
    }
  }

  /**
   * 유저에게 다리 길이를 입력 받은 후 순서에 맞게 실행한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   */
  onBridgeSizeInput(bridgeLengthInput) {
    this.validateBridgeLengthInput(bridgeLengthInput);
  }
}

module.exports = BridgeController;
