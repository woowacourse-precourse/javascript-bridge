const { GAME_SIGNATURE } = require('./utils/constant');

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
    if (!this.validateBy(this.validator.checkBridgeSize, size)) {
      this.askBridgeSize();
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
    if (!this.validateBy(this.validator.checkMoving, direction)) {
      this.askMoveDirection();
      return;
    }

    this.bridgeGame.move(direction);
    this.outputView.printMap(this.bridgeGame.trials);

    this.proceedByMovingResult();
    return;
  }

  proceedByMovingResult() {
    if (this.bridgeGame.status === GAME_SIGNATURE.gameOn) this.askMoveDirection();
    else if (this.bridgeGame.status === GAME_SIGNATURE.gameFail) this.askGameCommand();
    else if (this.bridgeGame.status === GAME_SIGNATURE.gameSuccess) this.end();
  }

  end() {
    this.outputView.printResult(this.bridgeGame);
  }

  askGameCommand() {
    this.inputView.readGameCommand(this.handleGameCommand.bind(this));
  }

  handleGameCommand(command) {
    if (!this.validateBy(this.validator.checkGameCommand, command)) {
      this.askGameCommand();
      return;
    }

    if (command === 'Q') this.end();
    if (command === 'R') this.retry();
  }

  validateBy(handleChecking, input) {
    try {
      handleChecking(input);
      return true;
    } catch (error) {
      this.outputView.printError(error);
      return false;
    }
  }

  retry() {
    this.bridgeGame.retry();
    this.askMoveDirection();
  }
}

module.exports = Controller;
