const BridgeGame = require('../model/BridgeGame');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Validate = require('../utils/Validate');
const { Console } = require('@woowacourse/mission-utils');
const { CROSSING_RESULT, COMMAND } = require('../utils/constants');
const { CROSSING_RESULT_MESSAGE } = require('../utils/message');

class BridgeController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStartAnnouncement();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    if (!this.checkValidate(Validate.validateSizeRange, Number(size))) {
      return this.requestBridgeSize();
    }
    const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame.updateBridge(bridge);

    OutputView.printLineBreak();
    this.requestBridgeMovemoment();
  }

  checkValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }

  requestBridgeMovemoment() {
    InputView.readMoving(this.controlMovemoment.bind(this));
  }

  controlMovemoment(movePosition) {
    if (!this.checkValidate(Validate.validateMovePosition, movePosition)) {
      return this.requestBridgeMovemoment();
    }

    this.#bridgeGame.selectMovemomentDirection(movePosition);
    const drawBridge = this.getDrawBridge();
    OutputView.printMap(drawBridge);
    this.controlNextStep(drawBridge);
  }

  getDrawBridge() {
    const traceOfCrossingBridge = this.#bridgeGame.move();
    return this.drawBridge(traceOfCrossingBridge);
  }

  drawBridge(traceOfCrossingBridge) {
    const bridge = { upBridge: '', downBridge: '' };
    traceOfCrossingBridge.forEach((position) => {
      bridge.upBridge += ` | ${position[0]}`;
      bridge.downBridge += ` | ${position[1]}`;
    });
    bridge.upBridge = `[ ${[...bridge.upBridge].splice(3).join('')} ]`;
    bridge.downBridge = `[ ${[...bridge.downBridge].splice(3).join('')} ]`;
    return bridge;
  }

  controlNextStep(drawBridge) {
    if (
      drawBridge.upBridge.includes(CROSSING_RESULT.fail) ||
      drawBridge.downBridge.includes(CROSSING_RESULT.fail)
    ) {
      return this.requestGameCommand();
    }

    if (this.#bridgeGame.isSuccess()) return this.controlFinish(CROSSING_RESULT_MESSAGE.success);

    return this.requestBridgeMovemoment();
  }

  requestGameCommand() {
    InputView.readGameCommand(this.controlGameCommand.bind(this));
  }

  controlGameCommand(input) {
    if (!this.checkValidate(Validate.validateRetryOfQuit, input)) {
      return this.requestGameCommand();
    }

    if (input === COMMAND.retry) return this.#bridgeGame.retry() || this.requestBridgeMovemoment();
    return this.controlFinish(CROSSING_RESULT_MESSAGE.fail);
  }

  controlFinish(result) {
    const attemps = this.#bridgeGame.getNumberOfAttempts();
    const drawBridge = this.getDrawBridge();
    return OutputView.printResult(drawBridge, result, attemps) || Console.close();
  }
}
module.exports = BridgeController;
