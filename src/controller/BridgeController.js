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
   * 다리를 생성 후 반환한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   * @return {string[]} [생성된 다리]
   */
  getCreatedBridge(bridgeLengthInput) {
    return BridgeMaker.makeBridge(
      parseInt(bridgeLengthInput, 10),
      BridgeRandomNumberGenerator.generate
    );
  }

  /**
   * 유저에게 다리 길이를 입력 받은 후 다리 생성 및 저장한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   */
  onBridgeSizeInput(bridgeLengthInput) {
    this.validateBridgeLengthInput(bridgeLengthInput);
    this.bridgeModel.setBridge(this.getCreatedBridge(bridgeLengthInput));
  }
}

module.exports = BridgeController;
