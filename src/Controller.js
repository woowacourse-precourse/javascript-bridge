const GAME_SIGNATURE = require('./utils/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class Controller {
  constructor(
    { bridgeGame, bridgeMaker, bridgeRandomNumberGenerator },
    { inputView, outputView, validator }
  ) {
    this.bridgeGame = bridgeGame;
    this.bridgeMaker = bridgeMaker;
    this.bridgeRandomNumberGenerator = bridgeRandomNumberGenerator;
    this.inputView = inputView;
    this.outputView = outputView;
    this.validator = validator;

    this.start();
  }

  start() {
    this.outputView.printStartMessage();
    this.askBridgeSize();
  }

  askBridgeSize() {
    this.inputView.readBridgeSize(this.handleMakingBridge.bind(this));
  }

  handleMakingBridge(size) {
    this.validateBy(this.validator.checkBridgeSize, size);
    const bridge = this.bridgeMaker.makeBridge(size, this.bridgeRandomNumberGenerator.generate);
    this.bridgeGame.setBridge(bridge);
    this.outputView.newLine();
    this.askMoveDirection();
  }

  askMoveDirection() {
    this.inputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(direction) {
    this.validateBy(this.validator.checkMoving, direction);
    this.bridgeGame.move(direction);
    this.outputView.printMap(this.bridgeGame.trials);

    if (this.bridgeGame.status === GAME_SIGNATURE.gameOn) this.askMoveDirection();
    else if (this.bridgeGame.status === GAME_SIGNATURE.gameFail) this.askGameCommand();
    else if (this.bridgeGame.status === GAME_SIGNATURE.gameSuccess) this.end();

    return;
  }

  end() {
    this.outputView.printResult(this.bridgeGame);
  }

  askGameCommand() {
    this.inputView.readGameCommand(this.handleGameCommand.bind(this));
  }

  handleGameCommand(command) {
    this.validateBy(this.validator.checkGameCommand, command);

    if (command === 'Q') this.end();
    if (command === 'R') this.retry();
  }

  validateBy(handleChecking, input) {
    try {
      handleChecking(input);
    } catch (error) {
      this.outputView.printError(error);
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.askMoveDirection();
  }
}

module.exports = Controller;
