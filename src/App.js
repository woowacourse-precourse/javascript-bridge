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
      this.bridgeGame.move(); // 그다음 유저 위치 이동시키기
      // X를 골랐다면 게임 오버, O면 다음 인풋 받기
      if (this.checkGameOver()) {
        // 게임 오버이면
        this.requestGameOverCommand();
      } else {
        this.getBridgeMovementDirection();
      }
    } catch (errorType) {
      OutputView.printError(errorType);
      this.getBridgeMovementDirection();
    }
  }

  checkGameOver() {
    const isGameOver = this.bridgeGame.getGameState();
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
          this.bridgeGame.getGameState(),
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
