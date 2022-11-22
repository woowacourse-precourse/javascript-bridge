const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const { validateBridge, validateMove, validateRetry } = require('./utils/validate');
const { COMMAND } = require('./utils/constants');

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.getBridgeSizeInput.bind(this));
  }

  getBridgeSizeInput(size) {
    validateBridge(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame = new BridgeGame(bridge);
    InputView.readMoving(this.getMoveInput.bind(this));
  }

  getMoveInput(moveInput) {
    validateMove(moveInput);
    this.moveUser(moveInput);
  }

  getRetry(answer) {
    validateRetry(answer);
    if (answer === COMMAND.QUIT) {
      this.endGame();
      return;
    }
    this.bridgeGame.retry(answer);
    InputView.readMoving(this.getMoveInput.bind(this));
  }

  endGame() {
    const { round, gameResult } = this.bridgeGame.getGameResult();
    OutputView.printResult(this.bridgeGame.getCurrentBridge(), round, gameResult);
  }

  moveUser(moveInput) {
    this.bridgeGame.move(moveInput);
    OutputView.printMap(this.bridgeGame.getCurrentBridge());
    this.playGame();
  }

  playGame() {
    if (this.bridgeGame.isFail()) {
      InputView.readGameCommand(this.getRetry.bind(this));
      return;
    }
    if (this.bridgeGame.isEnd()) {
      this.endGame();
      return;
    }
    InputView.readMoving(this.getMoveInput.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
