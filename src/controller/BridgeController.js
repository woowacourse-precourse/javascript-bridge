const BridgeModel = require("../model/BridgeModel");
const GENERAL_CONSTANTS = require("../constants/GeneralConstants");
const { BRIDGE_INPUT_MESSAGES } = require("../constants/Messages");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");

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
   * 유저가 성공적으로 움직였는지 유무를 반환하는 메서드 연결체
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean} [성공 유무]
   */
  getIsSuccessMoving(userMoving) {
    return this.bridgeModel.isSuccessMoving(userMoving);
  }

  /**
   * 유저가 더 움직일 수 있는 칸이 없는지 여부를 반환하는 메서드 연결체
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean} [움직임 불가능 여부]
   */
  getIsFinished(userMoving) {
    return this.bridgeModel.isFinished(userMoving);
  }

  /**
   * 유저에게 다리 길이를 입력 받은 후 다리 생성 및 저장한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   */
  onBridgeSizeInput(bridgeLengthInput) {
    this.validateBridgeLengthInput(bridgeLengthInput);
    this.bridgeModel.setBridge(this.getCreatedBridge(bridgeLengthInput));
    this.mainController.readUserMovingInput();
  }

  /**
   * 현재까지의 유저의 움직임 성공유무들을 반환하는 메서드 연결체
   * @param userMoving {string[]} [유저 움직임 기록]
   */
  getMovingRecords(userMoving) {
    return this.bridgeModel.getMovingRecords(userMoving);
  }
}

module.exports = BridgeController;
