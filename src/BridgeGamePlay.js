const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { RESULT } = require('./constant/constant');

/**
 * 다리 건너기 게임 진행을 관리하는 클래스
 */
class BridgeGamePlay {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.bridge = [];
    this.tryCount = 0;
    this.myMoves = [];
  }

  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메서드
   */
  start() {
    OutputView.printStart();
    const bridgeSize = InputView.getBridgeSize();
    this.bridge = this.bridgeGame.makeBridge(bridgeSize);
    this.playGame();
  }

  /**
   * 게임 한 판 진행
   */
  playGame() {
    this.myMoves = [];
    this.tryCount += 1;
    this.move();
  }

  move() {
    const currentMove = InputView.getMoving();
    this.myMoves.push(currentMove);
    const currentBridge = this.bridgeGame.move(this.myMoves, this.bridge);
    const currentMyMoves = this.bridgeGame.move(this.myMoves, this.myMoves);
    const result = this.bridgeGame.compareBridge(currentMyMoves, currentBridge);
    OutputView.printMap(result);
    this.check(result);
  }

  check(result) {
    this.checkIfWin(result);
    this.checkIfFinish(result);
    this.checkIfCanMove();
  }

  checkRetry(result, gameCommand) {
    if (!this.bridgeGame.retry(gameCommand)) {
      OutputView.printResult(result, RESULT.FAIL, this.tryCount);
    }
    if (this.bridgeGame.retry(gameCommand)) {
      this.playGame();
    }
  }

  checkIfWin(result) {
    if (this.bridgeGame.validateWin(this.myMoves, this.bridge)) {
      OutputView.printResult(result, RESULT.WIN, this.tryCount);
    }
  }

  checkIfFinish(result) {
    if (!this.bridgeGame.validateMove(this.myMoves, this.bridge)) {
      const gameCommand = InputView.getGameCommand();
      this.checkRetry(result, gameCommand);
    }
  }

  checkIfCanMove() {
    if (
      this.bridgeGame.validateMove(this.myMoves, this.bridge) &&
      !this.bridgeGame.validateWin(this.myMoves, this.bridge)
    ) {
      this.move();
    }
  }
}

module.exports = BridgeGamePlay;
