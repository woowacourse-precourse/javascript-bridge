const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');
const BridgeGame = require('./BridgeGame.js');

class Manager{
  constructor(){
    OutputView.printStartMessage();
    this.bridgeGame = new BridgeGame();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      Validation.isValidSize(size);
      this.bridgeGame.makeBridge(size);
      this.requestDirection();
    });
  }
  
  requestDirection() {
    InputView.readMoving((direction) => {
      Validation.isValidDirection(direction);
      this.bridgeGame.move(direction);

      const [upBridge, downBridge] = this.bridgeGame.getCurrentMap();
      OutputView.printMap(upBridge, downBridge);

      const isCorrect = this.bridgeGame.getIsCorrect();
      isCorrect ? this.requestDirection() : console.log("게임 결과 출력");
    });
  }
}

module.exports = Manager;