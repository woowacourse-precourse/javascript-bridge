const BridgeGame = require('../model/BridgeGame.js');
const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const BridgeMaker = require('../BridgeMaker.js');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator.js');
const Bridge = require('../model/Bridge.js');
const StepResult = require('../model/StepResult.js');

class BridgeGameController {
  constructor() {
    OutputView.welcomeMessage();
    this.bridgeGame = new BridgeGame();
    this.bridge = new Bridge();
    this.stepResult = new StepResult();
  }

  start() {
    OutputView.welcomeMessage();
    InputView.readBridgeSize(this.createBridgeByUser.bind(this));
  }

  createBridgeByUser(bridgeLength) {
    const bridgeAnswerArray = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    this.bridge.setAnswerArray(bridgeAnswerArray);
    InputView.readMoving(this.moveByUser.bind(this));
  }

  moveByUser(move) {
    const isWrongAnswer = this.playTurn(move);
    if (isWrongAnswer) return InputView.readGameCommand(this.askWantRetry.bind(this));

    if (this.isEndGame()) return OutputView.printResult(true, this.bridgeGame.retryCount, this.stepResult);

    return InputView.readMoving(this.moveByUser.bind(this));
  }

  playTurn(move) {
    const thisTurnAnswer = this.bridge.answerArray[this.bridgeGame.turn];
    this.bridgeGame.move(thisTurnAnswer, move, this.stepResult);
    const isWrongAnswer = !this.bridgeGame.isThisTurnCorrect(thisTurnAnswer, move);
    OutputView.printMap(this.stepResult);

    return isWrongAnswer;
  }

  isEndGame() {
    return this.bridgeGame.turn >= this.bridge.answerArray.length;
  }

  askWantRetry(answer) {
    if (answer === 'R') return this.retry();

    return OutputView.printResult(false, this.bridgeGame.retryCount, this.bridge);
  }

  retry() {
    this.bridgeGame.retry();
    this.stepResult.retry();
    InputView.readMoving(this.moveByUser.bind(this));
  }
}

module.exports = BridgeGameController;
