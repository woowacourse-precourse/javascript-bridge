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
  userMove = [];

  constructor() {
    this.bridgeSize = new BridgeSize();
    this.movingCheck = new MovingCheck();
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
    this.bridgeGame = new BridgeGame(this.bridge);
    this.userMoving();
  };
  
  userMoving() {
    Console.print(this.bridge)
    InputView.readMoving((userUpDown) => {
      this.movingCheck.validate(userUpDown);
      this.userMove.push(userUpDown);
      this.answerCheck();
    });
  };

  answerCheck() {
    switch (this.bridgeGame.move(this.userMove)) {
      case 0:
        return this.notAnswerMoving();
      case 1:
        return this.repeatMoving();
      case 2:
        return this.finalAnswer();
    };
  };

  repeatMoving() {
    OutputView.printMap(this.userMove, 'O');
    this.userMoving();
  };

  notAnswerMoving() {
    OutputView.printMap(this.userMove, 'X');
    //재시도 묻기
  };

  finalAnswer() {
    OutputView.printMap(this.userMove, 'O');
    OutputView.printResult(this.userMove, 'O');
  };


};

module.exports = BridgeGameControl;
