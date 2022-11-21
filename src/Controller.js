const GAME_SIGNATURE = require('./utils/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class Controller {
  constructor(
    { bridgeRandomNumberGenerator, bridgeMaker, bridgeGame },
    { outputView, inputView, validator }
  ) {
    this.bridgeGame = bridgeGame;
    this.bridgeRandomNumberGenerator = bridgeRandomNumberGenerator;
    this.bridgeMaker = bridgeMaker;
    this.outputView = outputView;
    this.inputView = inputView;
    this.validator = validator;
    this.start();
    this.askBridgeSize();
  }

  start() {
    this.outputView.printStartMessage();
  }

  askBridgeSize() {
    this.inputView.readBridgeSize(this.handleMakingBridge.bind(this));
  }

  handleMakingBridge(size) {
    try {
      this.validator.checkBridgeSize(size);
    } catch (error) {
      this.outputView.printError(error);
      return;
    }

    const bridge = this.bridgeMaker.makeBridge(size, this.bridgeRandomNumberGenerator.generate);
    this.bridgeGame.setBridge(bridge);
    this.outputView.newLine();
    this.askMoveDirection();
  }

  askMoveDirection() {
    this.inputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(direction) {
    try {
      this.validator.checkMoving(direction);
    } catch (error) {
      this.outputView.printError(error);
      return;
    }

    this.bridgeGame.move(direction);
    this.outputView.printMap(this.bridgeGame.trials);

    //TODO: if-else
    if (this.bridgeGame.status === GAME_SIGNATURE.gameOn) {
      this.askMoveDirection();
      return;
    }

    if (this.bridgeGame.status === GAME_SIGNATURE.gameFail) {
      this.askGameCommand();
      return;
    }

    if (this.bridgeGame.status === GAME_SIGNATURE.gameSuccess) {
      this.end();
      return;
    }
  }

  end() {
    this.outputView.printResult(this.bridgeGame);
  }

  askGameCommand() {
    this.inputView.readGameCommand(this.handleGameCommand.bind(this));
  }

  handleGameCommand(command) {
    try {
      this.validator.checkGameCommand(direction);
    } catch (error) {
      this.outputView.printError(error);
      return;
    }

    if (command === 'R') {
      this.retry();
      return;
    }

    if (command === 'Q') {
      this.end();
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.askMoveDirection();
  }
}

module.exports = Controller;
