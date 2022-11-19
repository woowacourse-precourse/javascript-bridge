const { ANSWER } = require('../utiles/Constant');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeSizeCheck = require('../models/BridgeSizeCheck');
const MovingCheck = require('../models/MovingCheck');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../models/BridgeGame');
const RetryCheck = require('../models/RetryCheck');

class BridgeGameControl {
  size;
  bridge;
  userMove = [];
  tryCount = 1;
  success = ANSWER.FAIL;

  constructor() {
    this.bridgeSizeCheck = new BridgeSizeCheck();
    this.movingCheck = new MovingCheck();
    this.retryCheck = new RetryCheck();
    OutputView.printStart();
  };
  
  start() {
    InputView.readBridgeSize((size) => {
      this.isValidSize(this.bridgeSizeCheck.validate(size), size);
    });
  };

  isValidSize(commend, size) {
    if (!commend) {
      return this.start();
    };

    this.size = size;
    OutputView.lineInterval();
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
    this.success = ANSWER.FAIL;
    this.askRetry();
  };

  finalAnswer(answer) {
    this.success = ANSWER.SUCCESS;
    OutputView.printMap(this.userMove, answer);
    OutputView.printResult(this.userMove, this.success, this.tryCount);
  };

  askRetry() {
    InputView.readGameCommand((retryAnswer) => {
      this.isValidRetry(this.retryCheck.validate(retryAnswer), retryAnswer);
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

    OutputView.printResult(this.userMove, this.success, this.tryCount);
  };
};

module.exports = BridgeGameControl;
