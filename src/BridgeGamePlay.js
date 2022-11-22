const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { RESULT } = require('./constant/constant');

/**
 * 다리 건너기 게임 진행을 관리하는 클래스
 */
class BridgeGamePlay {
  #bridge;

  #myMoves;

  constructor() {
    this.bridgeGame = new BridgeGame();
    this.#bridge = [];
    this.#myMoves = [];
  }

  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메서드
   */
  start() {
    OutputView.printStart();
    const bridgeSize = InputView.getBridgeSize();
    this.#bridge = this.bridgeGame.makeBridge(bridgeSize);
    this.playGame();
  }

  /**
   * 게임 한 판 진행
   */
  playGame() {
    this.#myMoves = [];
    this.bridgeGame.addTryCount();
    this.move();
  }

  /**
   * 게임 이동
   */
  move() {
    const currentMove = InputView.getMoving();
    this.#myMoves.push(currentMove);
    const result = this.bridgeGame.getMoveResult(this.#myMoves, this.#bridge);
    OutputView.printMap(result);
    if (this.bridgeGame.checkIfCanMove(this.#myMoves, this.#bridge)) {
      this.move();
    }
    this.checkIfWinOrMove(result);
  }

  /**
   * 이겼는지 또는 이동이 불가능한지 확인
   */
  checkIfWinOrMove(result) {
    if (this.bridgeGame.validateWin(this.#myMoves, this.#bridge)) {
      OutputView.printResult(result, RESULT.WIN, this.bridgeGame.getTryCount());
    }
    if (!this.bridgeGame.validateMove(this.#myMoves, this.#bridge)) {
      this.checkRetry(result, InputView.getGameCommand());
    }
  }

  /**
   * 이동이 불가능할 때 다시 할지 확인
   */
  checkRetry(result, gameCommand) {
    if (!this.bridgeGame.retry(gameCommand)) {
      OutputView.printResult(result, RESULT.FAIL, this.bridgeGame.getTryCount());
    }
    if (this.bridgeGame.retry(gameCommand)) {
      this.playGame();
    }
  }
}

module.exports = BridgeGamePlay;
