// const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeSize = require('./available-check/BridgeSize');
const MovingCheck = require('./available-check/MovingCheck');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const AskRetry = require('./available-check/AskRetry');

class BridgeGameControl {
  size;
  bridge;
  userMove = [];
  tryCount = 1;
  success = 0;

  constructor() {
    this.bridgeSize = new BridgeSize();
    this.movingCheck = new MovingCheck();
    this.askRetryCheck = new AskRetry();
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
    // Console.print(this.bridge)
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
        return this.finalAnswer('O');
    };
  };

  repeatMoving() {
    OutputView.printMap(this.userMove, 'O');
    this.userMoving();
  };

  notAnswerMoving() {
    OutputView.printMap(this.userMove, 'X');
    this.success = 0;
    this.askRetry();
  };

  finalAnswer(answer) {
    this.success = 1;
    OutputView.printMap(this.userMove, answer);
    OutputView.printResult(this.userMove, answer);
    OutputView.printTryResult(this.tryCount, this.success);
  };

  askRetry() {
    InputView.readGameCommand((command) => {
      this.askRetryCheck.validate(command);
      this.retryCommand(this.bridgeGame.retry(command));
    });
  };

  retryCommand(command) {
    if (command) {
      this.userMove = [];
      this.tryCount += 1;
      return this.userMoving();
    };
    OutputView.printResult(this.userMove, this.success);
    OutputView.printTryResult(this.tryCount, this.success);
  };
};

module.exports = BridgeGameControl;
