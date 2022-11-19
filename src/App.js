const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeGame = require('./domain/BridgeGame');
const Validator = require('./view/Validator');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.validator = new Validator();
  }

  play() {
    OutputView.printStart();
    this.getBridgeSizeInput();
  }

  getBridgeSizeInput() {
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(bridgeSize) {
    try {
      this.validator.checkBridgeSize(bridgeSize);
      this.bridgeGame.makeBridgeMap(bridgeSize);
      this.getBridgeMovementDirection();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeSizeInput();
    }
  }

  getBridgeMovementDirection() {
    InputView.readMoving(this.requestMovementDirection.bind(this));
  }

  requestMovementDirection(moveCommand) {
    try {
      this.validator.checkMoveCommand(moveCommand);
      OutputView.printMap(this.bridgeGame.drawBridgeMap(moveCommand));
      this.bridgeGame.move();
      if (this.checkGameOver()) {
        this.requestGameOverCommand();
        return;
      }
      this.getBridgeMovementDirection();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeMovementDirection();
    }
  }

  checkGameOver() {
    const isGameOver = this.bridgeGame.checkGameOver();
    return isGameOver;
  }

  requestGameOverCommand() {
    return InputView.readGameCommand(this.requestRetryGame.bind(this));
  }

  requestRetryGame(retryCommand) {
    try {
      if (retryCommand === 'Q') {
        OutputView.printResult(
          '여기에 유저가 현재까지 건넌 다리 넣어야함\n',
          this.bridgeGame.checkGameOver(),
          this.bridgeGame.getUserTryCount()
        );
        return OutputView.gameClose();
      }

      if (retryCommand === 'R') {
        this.bridgeGame.retry();
        // 이전 입력값 위치에 값 지우기
        this.getBridgeMovementDirection();
      }

      this.validator.checkRetryCommand(retryCommand);
      this.requestGameOverCommand();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.requestGameOverCommand();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
