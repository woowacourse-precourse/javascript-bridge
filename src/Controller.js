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
    this.inputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    try {
      this.validator.checkBridgeSize(size);
    } catch (error) {
      this.outputView.printError(error.message);
      return;
    }

    const bridge = this.bridgeMaker.makeBridge(size, this.bridgeRandomNumberGenerator.generate);
    this.bridgeGame.setBridge(bridge);

    this.outputView.newLine();
    this.askMoveDirection();
  }

  askMoveDirection() {
    this.inputView.readMoving(this.move.bind(this));
  }

  move(direction) {
    try {
      this.validator.checkMove(direction);
    } catch (error) {
      this.outputView.printError(error.message);
      return;
    }

    this.bridgeGame.move(direction);
    this.outputView.printMap(this.bridgeGame.trials);

    if (this.bridgeGame.status === GAME_SIGNATURE.gameOn) {
      this.askMoveDirection();
      return;
    }

    if (this.bridgeGame.status === GAME_SIGNATURE.gameFail) {
      this.gameCommand();
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

  gameCommand() {
    this.inputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    try {
      this.validator.checkGameCommand(command);
    } catch (error) {
      this.outputView.printError(error.message);
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
