const BridgeModel = require("../model/BridgeModel");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const { validate } = require("../validation/BridgeSizeValidation");

class BridgeController {
  #mainController;
  #bridgeModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#bridgeModel = new BridgeModel();
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
    return this.#bridgeModel.isSuccessMoving(userMoving);
  }

  /**
   * 유저가 더 움직일 수 있는 칸이 없는지 여부를 반환하는 메서드 연결체
   * @param userMoving {string[]} [유저 움직임]
   * @return {boolean} [움직임 불가능 여부]
   */
  getIsFinished(userMoving) {
    return this.#bridgeModel.isFinished(userMoving);
  }

  /**
   * 다리 저장 연결 메서드
   * @param newBridge {string[]} [새로운 다리]
   */
  setBridge(newBridge) {
    this.#bridgeModel.setBridge(newBridge);
  }

  /**
   * 유저에게 다리 길이를 입력 받은 후 다리 생성 및 저장한다.
   * @param bridgeLengthInput {string} [다리 길이 input]
   */
  processBridgeSizeInput(bridgeLengthInput) {
    try {
      validate(bridgeLengthInput);
      this.setBridge(this.getCreatedBridge(bridgeLengthInput));
      this.#mainController.readUserMovingInput();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readBridgeSizeInput();
    }
  }

  /**
   * 이동 기록과 다리를 대조하여 다리별 성공여부를 반환하는 메서드 연결체
   * @param userMoving [유저 이동 기록]
   * @return {{up: string[], down: string[]}} [다리별 움직임 성공여부]
   */
  getMovingStatus(userMoving) {
    return this.#bridgeModel.getMovingStatus(userMoving);
  }
}

module.exports = BridgeController;
