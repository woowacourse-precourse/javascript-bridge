const BridgeGame = require('../model/BridgeGame');
const OutputView = require('../OutputView');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');

const BridgeController = {
  bridgeGame: new BridgeGame(),

  controlValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },

  controlSize(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame.updateBridge(bridge);
    OutputView.printLineBreak();
    return true;
  },

  controlMovemonetFromUser(movePosition) {
    this.bridgeGame.addBridgeFromUser(movePosition);
    const drawBridge = this.getDrawBridge();
    OutputView.printMap(drawBridge);
    return true;
  },

  getDrawBridge() {
    const userBridge = this.bridgeGame.getUserBridge();
    const moveBridge = this.bridgeGame.move(userBridge);
    return this.draw(moveBridge);
  },

  draw(moveBridge) {
    let upBridge = '';
    let downBridge = '';

    moveBridge.forEach((position) => {
      upBridge = this.drawUpBridge(position, upBridge, moveBridge);
      downBridge = this.drawDownBridge(position, downBridge, moveBridge);
    });
    return { upBridge, downBridge };
  },

  drawUpBridge(position, upBridge, moveBridge) {
    if (position === moveBridge[0]) return (upBridge += position[0]);
    return (upBridge += ` | ${position[0]}`);
  },

  drawDownBridge(position, downBridge, moveBridge) {
    if (position === moveBridge[0]) return (downBridge += position[1]);
    return (downBridge += ` | ${position[1]}`);
  },

  controlNextStep() {
    const drawBridge = this.getDrawBridge();
    if (drawBridge.upBridge.includes('X') || drawBridge.downBridge.includes('X')) return false;
    if (this.bridgeGame.isSuccess()) {
      const attemps = this.bridgeGame.getNumberOfAttempts();
      OutputView.printResult(drawBridge, '성공', attemps);
    }
    return true; //O 인경우
  },

  controlSuccess() {
    const drawBridge = this.getDrawBridge();
    if (this.bridgeGame.isSuccess()) {
      const attemps = this.bridgeGame.getNumberOfAttempts();
      OutputView.printResult(drawBridge, '성공', attemps);
      return true;
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
