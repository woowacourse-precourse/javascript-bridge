const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const { GAME_COMMAND } = require('./constant');
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

  moveBridge() {
    do {
      this.moveBridgeOnetime();
    } while (
      this.bridgeGame.moveAvailable !== GAME_COMMAND.MOVE_UNAVAILABLE &&
      this.bridgeGame.bridgeIndex < this.bridgeSize
    );

    this.loseOrWinGame();
  }

  moveBridgeOnetime() {
    let gameMove;
    gameMove = InputView.getMoving();
    this.bridgeGame.move(gameMove, this.bridge);
    OutputView.printUpbridgeAndDownBridge(
      this.bridgeGame.upBridge,
      this.bridgeGame.downBridge
    );
  }

  printResult() {
    OutputView.printResult(this.bridgeGame);
    this.endGame();
  }

  loseOrWinGame() {
    if (this.bridgeGame.moveAvailable === GAME_COMMAND.MOVE_UNAVAILABLE) {
      OutputView.printUpbridgeAndDownBridge(
        this.bridgeGame.upBridge,
        this.bridgeGame.downBridge
      );
      this.retryOrQuitGame();
    } else {
      this.printResult();
    }
  }

  retryOrQuitGame() {
    let gameCommand = '';
    gameCommand = InputView.getCommand();
    if (gameCommand === GAME_COMMAND.RETRY) {
      this.bridgeGame.retry();
      this.moveBridge();
    }
    if (gameCommand === GAME_COMMAND.QUIT) {
      this.printResult();
    }
  }

  endGame() {
    Console.close();
  }
}

module.exports = App;
