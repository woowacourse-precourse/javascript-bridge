const { Console } = require('@woowacourse/mission-utils');

class BridgeGameController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  start() {
    this.#view.printStart();
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    this.#view.readBridgeSize(this.#handleInputBridgeSize.bind(this));
  }

  #handleInputBridgeSize(size) {
    try {
      const bridgeSize = Number(size);

      this.#model.makeBridge(bridgeSize);
      this.#requestMoveDirection();
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestBridgeSize();
    }
  }

  #requestMoveDirection(round = 0) {
    if (this.#model.isLastRound(round)) {
      this.#quit();
      return;
    }

    this.#view.readMoving(this.#handleInputMoveDirection.bind(this, round));
  }

  #handleInputMoveDirection(round, direction) {
    try {
      const { map, movingState } = this.#model.move(round, direction);
      const moveNextRound = movingState
        ? this.#requestMoveDirection.bind(this, round + 1)
        : this.#requestGameCommand.bind(this);

      this.#view.printMap(map);
      moveNextRound();
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestMoveDirection(round);
    }
  }

  #requestGameCommand() {
    this.#view.readGameCommand(this.#handleInputGameCommand.bind(this));
  }

  #handleInputGameCommand(command) {
    try {
      const isRetry = this.#model.retry(command);
      const retryOrQuit = isRetry
        ? this.#requestMoveDirection.bind(this)
        : this.#quit.bind(this);

      retryOrQuit();
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestGameCommand();
    }
  }

  /**
   * 사용자가 게임을 종료할 때 사용하는 메서드
   */
  #quit() {
    const gameResult = this.#model.getGameResult();

    this.#view.printResult(gameResult);

    Console.close();
  }
}

module.exports = BridgeGameController;
