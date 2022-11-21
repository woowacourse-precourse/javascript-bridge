const BridgeGame = require('../model/BridgeGame.js');
const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');
const Bridge = require('../model/Bridge.js');
const { Console } = require('@woowacourse/mission-utils');
const StepResult = require('../model/StepResult.js');

class BridgeGameController {
  constructor() {
    OutputView.welcomeMessage();
    this.bridgeGame = new BridgeGame();
    this.bridge = new Bridge();
    this.stepResult = new StepResult();
  }

  start() {
    InputView.readBridgeSize(this.createBridgeByUser.bind(this));
  }

  createBridgeByUser(bridgeLength) {
    this.bridge.answerArray = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(this.moveByUser.bind(this));
  }

  moveByUser(move) {
    const isWrongAnswer = this.playTurn(move);
    if (isWrongAnswer) return InputView.readGameCommand(this.askWantRetry.bind(this));

    if (this.isEndGame()) return OutputView.printResult(true, this.bridgeGame.retryCount, this.stepResult);

    return InputView.readMoving(this.moveByUser.bind(this));
  }

  playTurn(move) {
    const thisTurnAnswer = this.bridge.answerArray[this.turn];
    this.bridgeGame.move(thisTurnAnswer, move, this.stepResult);
    const isWrongAnswer = !this.bridgeGame.isThisTurnCorrect(thisTurnAnswer, move);
    OutputView.printMap(this.stepResult);

    return isWrongAnswer;
  }

  isEndGame() {
    return this.bridgeGame.turn >= this.bridge.answerArray.length;
  }

  askWantRetry(answer) {
    if (answer === 'R') {
      this.bridgeGame.retry(this.bridge);
      this.bridgeGame.retryCount += 1;
      InputView.readMoving(this.moveByUser.bind(this));
    } else {
      OutputView.printResult(false, this.bridgeGame.retryCount, this.bridge);
    }
    Console.print(error.message);
    InputView.readGameCommand(this.askWantRetry.bind(this));
  }
}

module.exports = BridgeGameController;
