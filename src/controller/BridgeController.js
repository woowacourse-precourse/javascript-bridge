const BridgeGame = require('../model/BridgeGame');
const OutputView = require('../OutputView');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');
const InputView = require('../InputView');
const Validate = require('../utils/Validate');
const { Console } = require('@woowacourse/mission-utils');

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
    InputView.readBridgeSize(this.controlSize.bind(this));
  }

  controlSize(size) {
    const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame.updateBridge(bridge);
    if (!this.controlValidate(Validate.validateSizeRange, Number(size))) {
      return this.requestBridgeSize();
    }
    OutputView.printLineBreak();
    this.requestBridgeMovemonet();
  }

  requestBridgeMovemonet() {
    InputView.readMoving(this.controlMovemoment.bind(this));
  }

  controlMovemoment(movePosition) {
    if (!this.controlValidate(Validate.validateMovePosition, movePosition)) {
      return this.requestBridgeMovemonet();
    }
    this.controlMovemonetFromUser(movePosition);
  }

  getDrawBridge() {
    const userBridge = this.#bridgeGame.getUserBridge();
    const moveBridge = this.#bridgeGame.move(userBridge);
    return this.draw(moveBridge);
  }

  draw(moveBridge) {
    let upBridge = '';
    let downBridge = '';

    moveBridge.forEach((position) => {
      upBridge = this.drawUpBridge(position, upBridge, moveBridge);
      downBridge = this.drawDownBridge(position, downBridge, moveBridge);
    });
    return { upBridge, downBridge };
  }

  drawUpBridge(position, upBridge, moveBridge) {
    if (position === moveBridge[0]) return (upBridge += position[0]);
    return (upBridge += ` | ${position[0]}`);
  }

  drawDownBridge(position, downBridge, moveBridge) {
    if (position === moveBridge[0]) return (downBridge += position[1]);
    return (downBridge += ` | ${position[1]}`);
  }

  controlMovemonetFromUser(movePosition) {
    this.#bridgeGame.addBridgeFromUser(movePosition);
    const drawBridge = this.getDrawBridge();
    OutputView.printMap(drawBridge);
    this.controlNextStep();
  }

  controlNextStep() {
    const drawBridge = this.getDrawBridge();
    if (drawBridge.upBridge.includes('X') || drawBridge.downBridge.includes('X')) {
      return this.requestGameCommand();
    }

    if (this.#bridgeGame.isSuccess()) {
      const attemps = this.#bridgeGame.getNumberOfAttempts();
      OutputView.printResult(drawBridge, '성공', attemps);
      return Console.close();
    }
    return this.requestBridgeMovemonet();
  }

  requestGameCommand() {
    InputView.readGameCommand(this.controlGameCommand.bind(this));
  }

  controlGameCommand(input) {
    if (!this.controlValidate(Validate.validateRetryOfQuit, input)) {
      return this.requestGameCommand();
    }
    this.controlRetryCommand(input);
  }

  controlRetryCommand(input) {
    if (input === 'R') {
      this.#bridgeGame.retry();
      this.requestBridgeMovemonet();
    }

    if (input === 'Q') {
      const attemps = this.#bridgeGame.getNumberOfAttempts();
      const drawBridge = this.getDrawBridge();
      OutputView.printResult(drawBridge, '실패', attemps);
      return Console.close();
    }
  }

  controlValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}
module.exports = BridgeController;
