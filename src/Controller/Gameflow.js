const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const CheckBridgeSize = require('../Model/CheckBridgeSize');
const CheckInputUpDown = require('../Model/CheckInputUpDown');
const CheckInputReplayQuit = require('../Model/CheckInputReplayQuit');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../Model/BridgeGame');
const { RESULT, OX } = require('../util/Constant');

class GameFlow {
  size;
  userUpDown = [];
  count = 1;
  middleResult;

  constructor() {
    this.CheckBridgeSize = new CheckBridgeSize();
    this.CheckInputUpDown = new CheckInputUpDown();
    this.CheckInputReplayQuit = new CheckInputReplayQuit();
  }

  start() {
    InputView.readBridgeSize(size => {
      this.isValidBridgeSize(this.CheckBridgeSize.validate(size), size);
    });
  }

  isValidBridgeSize(valitation, size) {
    if (!valitation) {
      return this.start();
    }
    this.size = size;
    return this.createBridge();
  }

  createBridge() {
    this.bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(this.size, BridgeRandomNumberGenerator.generate)
    );
    this.userMoving();
  }

  userMoving() {
    InputView.readMoving(inputUpDown => {
      this.isValidUpdown(this.CheckInputUpDown.validate(inputUpDown), inputUpDown);
    });
  }

  isValidUpdown(valitation, inputUpDown) {
    if (!valitation) {
      return this.userMoving();
    }
    this.userUpDown.push(inputUpDown);
    return this.endCheck();
  }

  endCheck() {
    switch (this.bridgeGame.move(this.userUpDown)) {
      case 0:
        return this.wrongInputMove();
      case 1:
        return this.continueMove();
      case 2:
        return this.endGame();
    }
  }

  wrongInputMove() {
    this.middleResult = RESULT.FAIL;
    OutputView.printMap(this.userUpDown, OX.WRONG);
    this.askReplay();
  }

  continueMove() {
    OutputView.printMap(this.userUpDown, OX.CORRECT);
    this.userMoving();
  }

  endGame() {
    this.middleResult = RESULT.SUCCESS;
    OutputView.printMap(this.userUpDown, OX.CORRECT);
    OutputView.printResult(this.userUpDown, OX.CORRECT);
    OutputView.printFinalResult(this.count, this.middleResult);
  }

  askReplay() {
    InputView.readGameCommand(inputReplayQuit => {
      this.isValidRepalyQuit(
        this.CheckInputReplayQuit.validate(inputReplayQuit),
        inputReplayQuit
      );
    });
  }

  isValidRepalyQuit(valitation, inputReplayQuit) {
    if (!valitation) {
      return this.askReplay();
    }
    return this.checkingAskReplay(this.bridgeGame.retry(inputReplayQuit));
  }

  checkingAskReplay(inputReplayQuit) {
    if (inputReplayQuit) {
      this.count += 1;
      this.userUpDown = [];
      return this.userMoving();
    }
    OutputView.printResult(this.userUpDown, this.middleResult);
    OutputView.printFinalResult(this.count, this.middleResult);
  }
}

module.exports = GameFlow;
