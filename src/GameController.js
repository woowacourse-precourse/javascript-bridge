const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.game = new BridgeGame();
    this.bridge = null;
  }

  start() {
    this.outputView.printStartMessage();
    const onDeliverySizeInputted = (brigeSize) => {
      this.bridge = BridgeMaker.makeBridge(brigeSize, BridgeRandomNumberGenerator.generate);
      this.move();
    };

    this.inputView.readBridgeSize(onDeliverySizeInputted);
  }

  move() {
    const onDeliveryMoving = (moving) => {
      this.game.move(moving);
    };

    this.inputView.readMoving(onDeliveryMoving);
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
