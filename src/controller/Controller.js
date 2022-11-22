// @ts-check
const Bridge = require('../Bridge');
const BridgeGame = require('./BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME_STATUS, GAME_COMMAND } = require('../constants');

class Controller {
  /** @type {number} */
  #tryCount;
  /** @type {BridgeGame} */
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
      const bridge = new Bridge(Number(input));
      this.#bridgeGame = new BridgeGame(bridge);
      OutputView.printLineBreak();
      this.#handleMove();
    });
  }

  #handleMove() {
    InputView.readMoving((input) => {
      this.#bridgeGame.move(input);
      const moveResult = this.#bridgeGame.getMoveResult();
      OutputView.printMap(moveResult);
      this.#handleGameStatus();
    });
  }

  #handleGameStatus() {
    const gameStatus = this.#bridgeGame.getGameStatus();
    if (gameStatus === GAME_STATUS.END) this.#handleGameEnd();
    if (gameStatus === GAME_STATUS.OVER) this.#handleGameOver();
    if (gameStatus === GAME_STATUS.PROCEEDING) this.#handleMove();
  }

  #handleGameOver() {
    InputView.readGameCommand((input) => {
      if (input === GAME_COMMAND.RETRY) this.#handleGameRetry();
      if (input === GAME_COMMAND.QUIT) this.#handleGameEnd();
    });
  }

  #handleGameRetry() {
    this.#bridgeGame.retry();
    this.#tryCount += 1;
    this.#handleMove();
  }

  #handleGameEnd() {
    const moveResult = this.#bridgeGame.getMoveResult();
    const gameStatus = this.#bridgeGame.getGameStatus();
    OutputView.printResult(moveResult, gameStatus, this.#tryCount);
  }
}

module.exports = Controller;
