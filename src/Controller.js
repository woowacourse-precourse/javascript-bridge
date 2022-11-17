const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
  #tryCount;
  #bridgeGame;

  constructor() {
    this.#tryCount = 1;
  }

  handleGameStart() {
    OutputView.printStart();
    this.#handleMakeBridge();
  }

  #handleMakeBridge() {
    InputView.readBridgeSize((input) => {
      this.#bridgeGame = new BridgeGame(input);
      OutputView.printLineBreak();
      this.#handleMove();
    });
  }

  #handleMove() {
    InputView.readMoving((input) => {
      const { resultToString, gameStatus } = this.#bridgeGame.move(input);
      OutputView.printMap(resultToString);
      if (gameStatus === 2) this.#handleGameEnd();
      if (gameStatus === 1) this.#handleGameOver();
      if (gameStatus === 0) this.#handleMove();
    });
  }

  #handleGameOver() {
    InputView.readGameCommand((input) => {
      if (input === 'R') this.#handleGameRetry();
      if (input === 'Q') this.#handleGameEnd();
    });
  }

  #handleGameRetry() {
    this.#bridgeGame.retry();
    this.#tryCount += 1;
    this.#handleMove();
  }

  #handleGameEnd() {
    const { resultToString } = this.#bridgeGame.getResultMap();
    const gameStatus = this.#bridgeGame.getGameStatus();
    OutputView.printResult(resultToString, gameStatus, this.#tryCount);
  }
}

module.exports = Controller;
