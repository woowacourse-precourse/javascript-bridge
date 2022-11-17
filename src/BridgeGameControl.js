const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeSize = require('./available-check/BridgeSize');
const MovingCheck = require('./available-check/MovingCheck');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class BridgeGameControl {
  size;
  bridge;
  userMove = '';

  constructor() {
    this.bridgeSize = new BridgeSize();
    this.movingCheck = new MovingCheck();
    this.bridgeGame = new BridgeGame();
  };
  
  start() {
    InputView.readBridgeSize((size) => {
      this.bridgeSize.validate(size);
      this.size = size;
      this.makeBridge();
    });
  };

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    this.moving();
  };

  moving() {
    InputView.readMoving((upDown) => {
      this.movingCheck.validate(upDown);
      this.userMove += upDown;
      // Console.print(this.userMove);
      // this.bridgeGame.move(upDown);
    });
  };

};

module.exports = BridgeGameControl;
