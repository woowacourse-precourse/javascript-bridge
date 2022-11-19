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
      OutputView.printMap(this.bridgeGame.drawBridgeMap(moveCommand)); // 사용자가 입력한 커맨드에 따라 맵 그리고 출력시키기
      this.getGameOverCommand(this.checkGameOver());
      this.bridgeGame.move(moveCommand); // 그다음 유저 위치 이동시키기
      this.getBridgeMovementDirection();
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeMovementDirection();
    }
  }

  checkGameOver() {
    const isGameOver = this.bridgeGame.getGameState();
    return isGameOver;
  }

  getGameOverCommand(isGameOver) {
    if (isGameOver) {
      InputView.readGameCommand(this.requestRetryGame.bind(this));
    }
  }

  requestRetryGame(retryCommand) {
    try {
      this.validator.checkRetryCommand(retryCommand);
      this.getGameOverCommand(this.checkGameOver());
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getGameOverCommand(this.checkGameOver());
    }
  }
}

const app = new App();
app.play();

module.exports = App;
