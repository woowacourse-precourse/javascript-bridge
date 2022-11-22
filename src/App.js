const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { GAME_BUTTON } = require('./Constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartMsg();
    this.requestBridgeLength();
  }

  requestBridgeLength() {
    InputView.readBridgeSize.call(this, this.makeBridge);
  }

  makeBridge(length) {
    this.bridgeGame.buildBridge(length);
    this.#requestMove();
  }

  #requestMove() {
    InputView.readMoving.call(this, this.moveUser);
  }

  moveUser(direction) {
    this.bridgeGame.move(direction);
    OutputView.printMap(this.bridgeGame.currentUserMoveMap());
    const walkable = this.bridgeGame.walkable();
    this.#checkGameStatus(walkable);
  }

  #checkGameStatus(gameStatus) {
    if (gameStatus && this.bridgeGame.isWin()) this.#gameEnd();

    if (gameStatus && !this.bridgeGame.isWin()) this.#requestMove();

    if (!gameStatus) this.#fail();
  }

  #fail() {
    InputView.readRetryOrQuit.call(this, this.#retryOrQuit);
  }

  #retryOrQuit(command) {
    if (command === GAME_BUTTON.restart) this.#restartGame();

    if (command === GAME_BUTTON.end) this.#gameEnd();
  }

  #restartGame() {
    this.bridgeGame.retry();
    this.#requestMove();
  }

  #gameEnd() {
    const userMoveMap = this.bridgeGame.currentUserMoveMap();
    OutputView.printResult(userMoveMap, this.bridgeGame.isWin(), this.bridgeGame.tryCount);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
