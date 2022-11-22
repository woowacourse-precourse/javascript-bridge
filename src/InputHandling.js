const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const Validation = require('./Validation');
const BridgeGame = require('./BridgeGame')

class InputHandling {
  #answerBridgeArray;

  play() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    try {
      Validation.checkBridgeSize(size);
      this.#answerBridgeArray = makeBridge(size, generate);
      InputView.readMoving(this.handleMovingValue.bind(this));
    } catch (error) {
      Console.print(error);
      InputView.readBridgeSize(this.handleBridgeSize.bind(this));
    }
  }

  handleMovingValue(direction) {
    try{
      Validation.checkMovingValue(direction);
      this.bridgeGame = new BridgeGame(this.#answerBridgeArray);
      this.bridgeGame.decideMoveOrStop(direction);
    } catch (error) {
      Console.print(error);
      InputView.readMoving(this.handleMovingValue.bind(this));
    }
  }
}

module.exports = InputHandling;
