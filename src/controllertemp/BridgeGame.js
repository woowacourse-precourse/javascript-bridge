/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeGameService;
  constructor(bridgeGameService) {
    this.#bridgeGameService = bridgeGameService;
  }

  move() {
    const process = () => {
      this.#bridgeGameService.processMove(
        this.retry.bind(this),
        this.end.bind(this),
        this.move.bind(this)
      );
    };

    this.#bridgeGameService.moveGame(process);
  }

  retry() {
    const process = () => {
      this.#bridgeGameService.processRetry(
        this.move.bind(this),
        this.end.bind(this)
      );
    };

    this.#bridgeGameService.retryGame(process);
  }

  start() {
    this.#bridgeGameService.startGame(this.move.bind(this));
  }

  end() {
    this.#bridgeGameService.endGame();
  }
}

module.exports = BridgeGame;
