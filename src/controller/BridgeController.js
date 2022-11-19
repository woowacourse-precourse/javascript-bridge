const BridgeGame = require('../model/BridgeGame');
const OutputView = require('../OutputView');
const Validate = require('../utils/Validate');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');

const BridgeController = {
  bridgeGame: new BridgeGame(),

  controlBridge(size) {
    try {
      Validate.validateSizeRange(size);
      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      this.bridgeGame.updateBridge(bridge);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },

  controlMovingFromUser(movePosition) {
    try {
      Validate.validateMovePosition(movePosition);
      this.bridgeGame.addBridgeFromUser(movePosition);
      return this.controlDrawByMovement();
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },

  getDrawBridge() {
    const userBridge = this.bridgeGame.getUserBridge();
    const moveBridge = this.bridgeGame.move(userBridge);
    const drawBridge = this.bridgeGame.draw(moveBridge);
    return drawBridge;
  },

  controlDrawByMovement() {
    const drawBridge = this.getDrawBridge();
    OutputView.printMap(drawBridge);
    return true;
  },

  controlNextStep() {
    const drawBridge = this.getDrawBridge();
    if (drawBridge[0].includes('X') || drawBridge[1].includes('X')) return false;
    return true;
  },

  controlSuccess() {
    const drawBridge = this.getDrawBridge();
    if (this.bridgeGame.isSuccess()) {
      const attemps = this.bridgeGame.getNumberOfAttempts();
      OutputView.printResult(drawBridge, '성공', attemps);
      return true;
    }
  },

  controlGameCommand(input) {
    try {
      Validate.validateRetryOfQuit(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },

  controlRetryCommand(input) {
    if (input === 'R') {
      this.bridgeGame.retry();
      return true;
    }
    if (input === 'Q') {
      const attemps = this.bridgeGame.getNumberOfAttempts();
      const drawBridge = this.getDrawBridge();
      OutputView.printResult(drawBridge, '실패', attemps);
      return false;
    }
  },
};
module.exports = BridgeController;
