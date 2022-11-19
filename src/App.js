const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputValidator = require('./InputValidator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame;
  }

  play() {
    InputView.readBridgeSize(this.handleInputLength.bind(this));
  }

  handleInputLength(input) {
    try {
      if (!InputValidator.isValidLength(input)) {
        throw new Error('[ERROR] : 유효한 길이가 아닙니다.');
      }
      this.initBridges(+input);
      InputView.readMoving(this.handleInputStep.bind(this));
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.handleInputLength.bind(this));
    }
  }

  handleInputStep(input) {
    try {
      if (!InputValidator.isValidStep(input)) {
        throw new Error('[ERROR] : 유효한 칸이 아닙니다.');
      }
      this.bridgeGame.bridgeSteps.push(input);
      OutputView.printMap(
        this.bridgeGame.answerSteps,
        this.bridgeGame.bridgeSteps
      );
      const result = this.bridgeGame.move();
      if (result === 'WIN') {
        this.bridgeGame.gameStatus = '성공';
        OutputView.printResult(
          this.bridgeGame.answerSteps,
          this.bridgeGame.bridgeSteps,
          this.bridgeGame.gameStatus,
          this.bridgeGame.gameCount
        );
      }
      if (result === 'MOVE') {
        InputView.readMoving(this.handleInputStep.bind(this));
      }
      if (result === 'FAIL') {
        // handle retry
      }
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readMoving(this.handleInputStep.bind(this));
    }
  }

  initBridges(size) {
    this.bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
  }
}

module.exports = App;
