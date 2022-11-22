const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame;
    this.bridgeSize;
    this.bridge = [];
  }

  play() {
    OutputView.printGameStart();
    this.bridgeSize = InputView.getBridgeSize();
    this.bridge = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.bridgeGame = new BridgeGame();
    this.moveBridge();
  }

  printMap() {
    OutputView.printMap(this.bridgeGame.upBridge);
    OutputView.printMap(this.bridgeGame.downBridge);
  }

  printResult() {
    OutputView.printResult(this.bridgeGame);
  }

  moveBridgeOnetime() {
    let gameMove;
    gameMove = InputView.getMoving();
    this.bridgeGame.move(gameMove, this.bridge);
    this.printMap();
  }

  retryOrQuitGame() {
    let gameCommand = '';
    gameCommand = InputView.getCommand();
    if (gameCommand === 'R') {
      this.bridgeGame.retry();
      this.moveBridge();
    }
    if (gameCommand === 'Q') {
      this.printResult();
    }
  }

  loseOrWinGame() {
    if (this.bridgeGame.moveAvailable === 'X') {
      this.printMap();
      this.retryOrQuitGame();
    } else {
      this.printResult();
    }
  }

  moveBridge() {
    do {
      this.moveBridgeOnetime();
    } while (
      this.bridgeGame.moveAvailable !== 'X' &&
      this.bridgeGame.bridgeIndex < this.bridgeSize
    );

    this.loseOrWinGame();
  }
}

module.exports = App;
