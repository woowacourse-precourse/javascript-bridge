// const { Console } = require('@woowacourse/mission-utils');
const { ANSWER } = require('./utiles/Constant');
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
    OutputView.printStart();
  };
  
  start() {
    InputView.readBridgeSize((size) => {
      this.isValidSize(this.bridgeSize.validate(size), size);
    });
  };

  isValidSize(commend, size) {
    if (!commend) {
      return this.start();
    };
    this.size = size;
    return this.makeBridge();
  };

  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame = new BridgeGame(this.bridge);
    this.userMoving();
  };
  
  userMoving() {
    InputView.readMoving((userUpDown) => {
      this.isValidMoving(this.movingCheck.validate(userUpDown), userUpDown);
    });
  };

  isValidMoving(commend, userUpDown) {
    if (!commend) {
      return this.userMoving();
    };
    this.userMove.push(userUpDown);
    return this.answerCheck();
  };
  

  answerCheck() {
    switch(this.bridgeGame.move(this.userMove)) {
      case 0:
        return this.notAnswerMoving();
      case 1:
        return this.repeatMoving();
      case 2:
        return this.finalAnswer(ANSWER.OK);
    };
  };

  repeatMoving() {
    OutputView.printMap(this.userMove, ANSWER.OK);
    this.userMoving();
  };

  notAnswerMoving() {
    OutputView.printMap(this.userMove, ANSWER.NO);
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
    InputView.readGameCommand((retryAnswer) => {
      this.isValidRetry(this.askRetryCheck.validate(retryAnswer), retryAnswer);
    });
  };

  isValidRetry(commend, retryAnswer) {
    if (!commend) {
      return this.askRetry();
    };
    return this.retryCommand(this.bridgeGame.retry(retryAnswer));
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
